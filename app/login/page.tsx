"use client"
import React, {useState} from "react";
import Button from "../component/Button";
import Router from "next/router";

export default function page(){
    const [formData, setformData] = useState({
        email: "",
        password: "",
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

        const response = await fetch("/api/login",
            {
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(formData)
            })
        const data = await response.json()
        setmessage( data.message || data.messages  )
        if(data.success){
          Router.push("/dashboard")
        
        }
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Email</h1>
                <input
                 type="email"
                 placeholder="enter your email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 
                 />
                <h1>Password</h1>
                <input
                 type="password"
                 placeholder="enter your Password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 
                 />
                 <button type="submit" className="bg-orange-700 px-4 py-1 rounded-3xl">Login</button>
            </form>
            <h1>{message}</h1>
        </div>
    )
}