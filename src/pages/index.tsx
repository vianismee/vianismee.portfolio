

import Head from "next/head";
import HomeSection from "`/feature/auth/pages/HomeSection";

import { api } from "`/utils/api";
import ProjectSection from "`/feature/auth/pages/ProjectSection";

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
    </>
  );
}
