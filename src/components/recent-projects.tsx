import Link from "next/link";
import ProjectsCarousel from "./projects-carousel";
import { Button } from "./ui/button";

export default function RecentProjects() {
  return (
    <section className="w-full space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Recent projects</h2>

      <ProjectsCarousel />

      <Button variant="link" className="p-0 text-lg" asChild>
        <Link href="/projects">All projects</Link>
      </Button>
    </section>
  );
}
