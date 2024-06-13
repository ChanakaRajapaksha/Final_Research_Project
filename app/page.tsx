"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

import { FloatingNav } from "@/components/FloatingNavbar";
import SubObjectives from "@/components/SubObjectives";

import { navItems } from "@/data";
import Documents from "@/components/Documents";
import Presentations from "@/components/Presentations";
import Milestones from "@/components/Milestones";
import Footer from "@/components/Footer";
import Methodology from "@/components/Methodology";
import About from "@/components/About";
import Suranimala from "@/components/Suranimala";
import Survey from "@/components/Survey";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Survey />
        <SubObjectives />
        <Methodology />
        <Suranimala />
        <Milestones />
        <Documents />
        <Presentations />
        <About />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
