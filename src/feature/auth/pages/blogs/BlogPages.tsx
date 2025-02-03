
const BlogPages = () => {
    return(
        <main>
            <section className="w-full px-[300px] h-screen flex justify-center relative">
                <div className="relative">
                    <h1 className="text-[250pt] font-medium bg-gradient-to-r from-zinc-300 from-0% to-black/0 to-105% bg-clip-text text-transparent z-0">
                        403
                    </h1>
                    <div className="z-10 absolute left-1/2 -translate-x-1/2 -translate-y-[170px] w-[450px]">
                        <div className="py-8 bg-gradient-to-b from-zinc-800/70 from-20% to-zinc-950/0 to-60% backdrop-blur-[30px] px-10 rounded-[20px] w-full text-center border-[2px] border-zinc-800 justify-center">
                            <h1 className="text-[20pt] text-center text-primary mb-2">
                                Oops, your page not found
                            </h1>
                            <p className="text-zinc-500 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elits.</p>
                            <div className="w-full flex justify-center items-center">
                                <div className=" p-px rounded-full">
                                    <div className="text-black bg-red-600 px-6 py-2 rounded-full">Back to Homepage</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default BlogPages;