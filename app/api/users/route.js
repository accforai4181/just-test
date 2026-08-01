import { connectDB } from "../../../lib/db"


export async function GET(request) {
    try{
        const db = await connectDB()
        const [rows] = await db.execute("SELECT * FROM users")
        await db.end()
        return Response.json({
            success: true,
            data: rows
        })
    }
    catch(error){
        return Response.json({
            succes: false,
            message: error.message
        })
    }
    
}