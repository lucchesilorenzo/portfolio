import Intro from "@/components/intro";
import About from "@/components/about";
import Experience from "@/components/experience";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <RecentProjects />
      <Skills />
    </>
  );
}
