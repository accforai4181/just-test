import { getUser } from "../../../lib/auth"

export async function GET() {
    const user = await getUser()

    if(!user){
        return Response.json({
            success: false,
            message: "Unauthorized"
        },{
            status: 401,
        }
    
    )
    }
    return Response.json({
            success: true,
            user
        })

}