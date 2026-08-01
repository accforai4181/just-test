import { getUser} from "../../lib/auth"
import React from "react"

export default async function admin(){

    const user = await getUser()

    return(
        <div className="text-black">
            <h1>My Id is {user.id}</h1>
            <h1>Welocom Back: {user.name}</h1>
            <h1>Emai: {user.email}</h1>
        </div>
    )
}