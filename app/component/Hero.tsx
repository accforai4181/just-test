    import React from "react";
import Button from "./Button";


    export default function Hero(){
        return(
            <div className="flex justify-between h-screen">
                <div className="pt-20 ml-[10%]">
                    <h1 className="text font-bold">Premium Web & App <br /> Development Solutions <br /> | Buraq Tech USA</h1>
                    <p className="text-[20px]  mt-7">Transform your digital presence with Buraq Tech -<br /> a US based premium IT company delivering expert web</p>
                    <div className="text-[18px] ml-4 mt-7">
                        <li>Unlimited product pages and fully scalable solutions</li>
                        <li>Fast and reliable air cargo services for urgent shipments.</li>
                        <li>Cost-effective sea freight with global coverage, ensuring your.</li>
                        <li>Unlimited product pages and fully scalable solutions</li>
                    </div>
                </div>
                <div className="bg-white/10 mr-[9%] p-8 rounded-2xl backdrop-blur-sm mt-10 h-100">
                    <h2 className="text-center text-white mb-4 font-bold">Login Your Account</h2>
                    <div className="">
                        <div >
                        <input className="w-full py-2 px-3 border-none focus:border-none bg-white/30 mt-2 text-white rounded"  type="text" placeholder="Enter Your Name" />
                        </div>
                        <div >
                        <input className="w-full py-2 px-3 border-none focus:border-none bg-white/30 mt-2 text-white rounded" type="email" placeholder="Enter Your Email" />
                        </div>
                        <div >
                        <input className="w-full py-2 px-3 border-none focus:border-none bg-white/30 mt-2 text-white rounded" type="password" placeholder="Enter Your Password" />
                        </div>
                        <textarea className="w-full py-2 px-3 border-none focus:border-none bg-white/30 mt-2 text-white rounded" placeholder="Enter Your Message"></textarea>
                        <button type="submit"><Button data={"Login"} /></button>
                    </div>
                </div>
            </div>
        )
    }
