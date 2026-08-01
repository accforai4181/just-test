import jwt from "jsonwebtoken";
import pool from "../../../lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "Sare Inputs Fill kare",
        },
        { status: 400 },
      );
    }
    const db = pool;

    const [database] = await db.execute(
      "SELECT id, name, email, password FROM users WHERE email = ?",
      [email],
    );

    if (database.length === 0) {
      return Response.json(
        {
          success: false,
          message: "Email or Password ghalat ha",
        },
        { status: 401 },
      );
    }

    const data_database = database[0];

    const compare = await bcrypt.compare(password, data_database.password);
    if (!compare) {
      return Response.json(
        {
          success: false,
          message: "Email or Password ghalat ha",
        },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      {
        id: data_database.id,
        name: data_database.name,
        email: data_database.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3d",
      },
    );
    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    console.log(process.env.JWT_SECRET);
    return Response.json({
      success: true,
      message: "LoggedIn Successfully",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
