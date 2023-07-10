"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";



export default function SignupPage(){
    const router=useRouter()
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
    })


    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const onSignUp=async()=>{
        try {
            setLoading(true)
            const response=await axios.post("/api/user/signup",user)
            console.log("signup successfull",response.data)
            router.push("/login")


        } catch (error:any) {
            console.log("SignUp Failed",error.message)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
      if(user.email.length>0 && user.password.length>0 && user.username.length>0){
        setButtonDisabled(false)
      }else{setButtonDisabled(true)}
    }, [user])
    
    return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 >{loading?"processing...":"Sign Up"}</h1>
    <hr/>
    <label htmlFor="username">UserName</label>
    <input className="p-1 border border-gray-600 rounded-lg text-black"
    type="text"
    id="username"
    placeholder="username"
    value={user.username}
    onChange={(e)=>setUser({...user,username:e.target.value})}
    />

    <label htmlFor="email">email</label>
    <input className="p-1 border border-gray-600 rounded-lg text-black"
    type="text"
    id="email"
    placeholder="email"
    value={user.email}
    onChange={(e)=>setUser({...user,email:e.target.value})}
    />

    <label htmlFor="password">password</label>
    <input className="p-1 border border-gray-600 rounded-lg text-black"
    type="text"
    id="password"
    placeholder="password"
    value={user.password}
    onChange={(e)=>setUser({...user,password:e.target.value})}
    />
    <button className="p-1 border border-gray-600 rounded-lg" onClick={onSignUp}>{buttonDisabled?"No signUp":"signUp"}</button>
    <Link href="/login">Visit Login Page</Link>
    </div>
    );
}