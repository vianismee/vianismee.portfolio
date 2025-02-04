import { Button } from "`/components/ui/button"
import Link from "next/link";
import { ChevronRight } from "lucide-react"

const ProjectSection = () => {
    return (
        <div>
            <h1 className="text-[48pt] font-bold tracking-[-.03em] mt-[20px]">Featured <span className="bg-linear-to-br from-[#2476CE] from-0% via-[#00AAFF] via-46% to-[#2963A0] to-100% bg-clip-text text-transparent">Project</span></h1>
            <div className="w-full p-0 grid grid-cols-3 gap-5 mt-[50px]">
              <div className="col-span-2 w-full h-full px-[48px] border-white/20 border rounded-xl content-center">
                <h1 className="text-[29pt] font-bold">Homtato Logo</h1>
                <p className="text-[14pt] whitespace-normal text-[#D1D1D1] font-light mt-5">Homtato is a UMKM on Food & Baverage insdustry, the main product is <span className="font-bold">Potato Ball</span>, base on Potato with choco or cheese inside.</p>
              </div>
              <div className="bg-red-400 h-[200px] aspect-square w-full rounded-xl">

              </div>
              <div className="bg-red-400 h-[200px] aspect-square w-full rounded-xl">

              </div>
              <div className="col-span-2 w-full h-full px-[48px] border-white/20 border rounded-xl content-center">
                <h1 className="text-[29pt] font-bold">Homtato Labels</h1>
                <p className="text-[14pt] whitespace-normal text-[#D1D1D1] font-light mt-5">Homtato is a UMKM on Food & Baverage insdustry, the main product is Potato Ball, base on Potato with choco or cheese inside.</p>
              </div>
            </div>
            <div className="mt-10 w-full flex justify-end">
              <Button variant={"outline"}>
                <Link href={"/projects"}> <span className="inline-flex items-baseline gap-2">Show More Project <ChevronRight className="self-center" /></span> </Link> 
              </Button>
            </div>
          </div>
    )
}

export default ProjectSection;