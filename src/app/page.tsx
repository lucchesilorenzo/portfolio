import Hero from "@/components/hero";
import Experience from "@/components/experience";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentProjects />
      <Skills />
      <Experience />
    </>
  );
}
