import Link from "next/link"

export default function NotFoundPage() {
    return (
        <section className="w-full px-[300px] h-screen flex justify-center relative">
                <div className="relative">
                    <h1 className="text-[250pt] font-medium bg-linear-to-r from-zinc-300 from-0% to-black/0 to-105% bg-clip-text text-transparent z-0">
                        403
                    </h1>
                    <div className="z-10 absolute left-1/2 -translate-x-1/2 -translate-y-[170px] w-[450px]">
                        <div className="rounded-[20px] p-[0.5px] bg-linear-0 from-black/0 from-80% to-white/90 to-100% ">
                            <div className="py-8 bg-linear-to-b from-zinc-800/70 from-20% to-zinc-800/2 to-95% backdrop-blur-[10px] px-10 rounded-[20px] w-full text-center justify-center">
                                <h1 className="text-[20pt] text-center text-primary mb-2">
                                    Oops, your page not found
                                </h1>
                                <p className="text-zinc-500 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elits.</p>
                                <div className="w-full flex justify-center items-center">
                                    <div className=" p-[0.5px] rounded-full bg-conic-100 from-black/0 via-white/80 to-black/0">
                                        <button className="text-white bg-gradient-to-r from-[#566070] to-zinc-900 px-6 py-2 rounded-full cursor-pointer">
                                            <Link href={"/"}>
                                                Back to Homepage
                                            </Link> 
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}