import pool from "../../../lib/db";
import bcrypt from "bcrypt"

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return Response.json(
        {
          success: false,
          message: "Apna sare inputs ko fill kare...",
        },
        { status: 400 },
      );
    }
    

  
    const [existingUser] = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return Response.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 409 }
      );
    }

    const saltRound = 10
    const hashedPassword = await bcrypt.hash(password, saltRound) 

    const [data] = await pool.execute(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassword],
    );
    return Response.json({
      success: true,
      message: "User Registered SuccessFully",
      userId: data.insertId,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
