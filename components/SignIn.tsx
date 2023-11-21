"use client"

import Image from "next/image";
import { signIn } from "next-auth/react"

export default function SignIn(){
    return (
        <div className="flex z-40 flex-row items-center absolute top-0 right-0 mr-3 mt-3 poppins">
            <button onClick={() => signIn("google")} className="hover:cursor-pointer mr-1 text-md card px-2 py-1 text-gray-600 flex flex-row items-center">
                Login
                <Image className="w-4 ml-2" alt="google" width={100} height={100} src="/google-logo.png" />
            </button>
        </div>
    )
}