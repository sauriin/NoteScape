import { ModeToggle } from "@/components/mode-toggle"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated } from "convex/react"
import Image from "next/image"
import { HeaderActions } from "./header-actions"


export function Header() {
    return (
        <div className="bg-slate-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4 text-2xl">
                    <Image src="/remove-bg-bulb.png" className="rounded-full" width={50} height={50} alt="Img of an spark bulb" />
                    NoteScape
                </div>
                <div className="flex gap-4 items-center">
                    <ModeToggle />
                    <HeaderActions />
                </div>
            </div>
        </div>
    )
}