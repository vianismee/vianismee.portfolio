'use client'

import { api } from "`/utils/api";

import Head from "next/head";
import HomeSection from "`/feature/auth/pages/HomeSection";
import ProjectSection from "`/feature/auth/pages/ProjectSection";
import BlogSection from "`/feature/auth/pages/BlogSection";


// import { SectionContainer } from './../feature/components/layout/SectionContainer';

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Vian Portfolio</title>
        <meta name="description" content="Home Vian Portfolio" />
        <link rel="icon" href="/logoicon.ico" />
      </Head>
        <section className="h-screen w-full justify-center px-[300px] content-center">
          <HomeSection />
        </section>
        <section className="h-screen w-full px-[300px] justify-center content-center">
          <ProjectSection />
        </section>
        <section className="w-full content-center px-[300px]">
          <BlogSection />
        </section>
    </>
  );
}
