"use client"

import React, {useState} from "react";

export default function Register(){
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [message, setmessage] = useState("")

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("/api/register",
            {
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(formData)
            })
        const data = await response.json()
        setmessage( data.message || data.messages  )
        if(data.success){
           setformData({
            name: "",
            email: "",
            password: ""
           })
        }
        
        }
        
    return(
        <div className="bg-white text-black">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-10 border-red-500"

                />
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-10 border-orange-500"

                />
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border-10 border-cyan-500"

                />
                <button type="submit" className="bg-black text-white">Click Me</button>
            </form>
            <h1 className="">{message}</h1>
        </div>
    )
}