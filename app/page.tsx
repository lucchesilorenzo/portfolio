import Intro from "@/components/homepage-ui/intro";
import About from "@/components/homepage-ui/about";
import RecentProjects from "@/components/homepage-ui/recent-projects";
import Skills from "@/components/homepage-ui/skills";
import Experience from "@/components/homepage-ui/experience";

function Home() {
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

export default Home;
