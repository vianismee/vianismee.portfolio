import Link from "next/link";
import Home from './../../../pages/index';


const Navbar = () => {
    return (
            <ul className="bg-[#242A31]/50 px-[20px] py-[10px] flex gap-x-8 rounded-[6px] backdrop-blur-[20px] fixed z-50">
               <Link href={"/"}>Home</Link>
               <Link href={"/about"}>About</Link>
               <Link href={"/blogs"}>Blog</Link>
               <Link href={"/projects"}>Project</Link>
            </ul>
    )
}

export default Navbar;