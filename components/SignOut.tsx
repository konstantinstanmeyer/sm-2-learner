"use client"

import { signOut } from "next-auth/react"

export default function Signout(){
    return (
        <button className="text-center text-sm w-full hover:underline" onClick={() => signOut()}>sign out</button>
    )
}