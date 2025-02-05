'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "blog",
        href: "/blogs",
    },
    {
        name: "Project",
        href: "/projects",
    }
]




const Navbar = () => {
    return (
            <ul className="bg-[#242A31]/50 px-[20px] py-[10px] flex gap-x-8 rounded-[6px] backdrop-blur-[20px] fixed z-50">
            {navLink.map((nav) => {
                
                return (
                    <Link href={nav.href} key={nav.href} >{ nav.name}</Link>
                )
            })}
            </ul>
    )
}

export default Navbar;