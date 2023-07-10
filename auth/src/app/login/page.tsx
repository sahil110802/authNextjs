"use client";
import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";



export default function LoginPage(){
    const [user, setUser] = useState({
        username:"",
        password:"",
    })

    const onLogin=async()=>{

    }
    return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 >Login</h1>
    <hr/>
    <label htmlFor="username">UserName</label>
    <input className="p-1 border border-gray-600 rounded-lg"
    type="text"
    id="username"
    placeholder="username"
    value={user.username}
    onChange={(e)=>setUser({...user,username:e.target.value})}
    />

    <label htmlFor="password">password</label>
    <input className="p-1 border border-gray-600 rounded-lg"
    type="text"
    id="password"
    placeholder="password"
    value={user.password}
    onChange={(e)=>setUser({...user,password:e.target.value})}
    />
    <button className="p-1 border border-gray-600 rounded-lg" onClick={onLogin}>Login</button>
    <Link href="/signup">Visit SignUp Page</Link>
    </div>
    );
}