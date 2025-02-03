import Link from "next/link";

import { Clipboard } from "lucide-react";
import { Button } from "`/components/ui/button";
import { useToast } from "`/hooks/use-toast";


const HomePages = () => {
    const { toast } = useToast()
    return (
        <div className="flex justify-center w-full py-16 gap-[200px] content-center">
            <div>
              <div className="flex gap-3 py-[8px] px-[15px] rounded-full bg-linear-to-r from-[#0E3B60] to-[#143D60]/0 to-60% items-center">
                <div className="h-full">
                  <span className="relative inline-flex size-3 ">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                  </span>
                </div>
               <p className="">Graphic Designer at <a href="https://kitoshindo.com/" className="font-bold underline">Kitoshindo</a></p>
               <div className="h-full items-center">
                  <img src="https://kitoshindo.com/images/kitoasset/kitologowarnatitle.png" alt="" className="size-[30px]" />
               </div>
              </div>
              <h1 className="text-[48pt] font-bold tracking-[-.03em] mt-[20px]">Hello, I'am Vian</h1>
              <p className="text-[14pt] whitespace-normal min-w-44 text-[#D1D1D1] mt-[20px]">I graphic designer, recent work at Kitoshindo. And Now i want to learn front end developer with  React, TailwindCSS and many more technology.</p>
              <div className="justify-start items-start gap-[19px] inline-flex mt-[20px]">
                <div className="px-3 py-1.5 bg-[#041e36] rounded-md border-[0.2px] border-white/50 justify-center items-center gap-[11px] flex">
                  <p className="text-white text-lg font-medium font-['Source Code Pro'] leading-[30px]">chevianbs@gmail.com</p>
                  <button onClick={() => { navigator.clipboard.writeText("chevianbs@gmail.com");
        toast({
          title: "Hurry up!",
          description: "Email has been copied!🚀 Let's Connect!",
        })
      }} className="px-1 py-[5px] bg-[#0c285c] rounded border border-[#008cff] justify-start items-center gap-[11px] flex">
                    <Clipboard size={"20px"}/>
                  </button>
                </div>
                <Button variant={"outline"} size={"about"}>
                  <Link href={"/about"} className="text-lg">More About Me</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="h-[358px] w-[358px] bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl"></div>
            </div>
          </div>
    )
}

export default HomePages;