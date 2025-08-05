// import { Approach } from "@/components/approach";
// import { Clients } from "@/components/clients";
// import { Experience } from "@/components/experience";
// import { Footer } from "@/components/footer";
// import { Grid } from "@/components/grid";
// import { Hero } from "@/components/hero";
// import { FloatingNav } from "@/components/ui/floating-nav";
// import { RecentProjects } from "@/components/recent-projects";
// import { navItems } from "@/data";
// import { About } from "@/components/about";
// const MainPage = () => {
//   return (
//     <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
//       <FloatingNav navItems={navItems} />

//       <div className="w-full max-w-7xl">
//         <Hero />
//         <Grid />
//          <About/>
//         <RecentProjects />
//         <Clients />
//         <Experience />
//         <Approach />
//         <Footer />
//       </div>
//     </main>
//   );
// };

// export default MainPage;
"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
// ✅ Explicitly get default export for dynamic imports
const Approach = dynamic(() => import("@/components/approach").then((mod) => mod.Approach), { ssr: false });
const Clients = dynamic(() => import("@/components/clients").then((mod) => mod.Clients), { ssr: false });
const Experience = dynamic(() => import("@/components/experience").then((mod) => mod.Experience), { ssr: false });
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer), { ssr: false });
const Grid = dynamic(() => import("@/components/grid").then((mod) => mod.Grid), { ssr: false });
const Hero = dynamic(() => import("@/components/hero").then((mod) => mod.Hero), { ssr: false });
const FloatingNav = dynamic(() => import("@/components/ui/floating-nav").then((mod) => mod.FloatingNav), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/recent-projects").then((mod) => mod.RecentProjects), { ssr: false });
const About = dynamic(() => import("@/components/about").then((mod) => mod.About), { ssr: false });

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <About />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
