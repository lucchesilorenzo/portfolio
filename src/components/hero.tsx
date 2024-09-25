import Image from "next/image";
import About from "./about";
import profile from "/public/profile.jpeg";

export default function Hero() {
  return (
    <section className="flex w-full flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between">
      <div>
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight lg:text-start lg:text-4xl">
          Lorenzo Lucchesi
        </h1>
        <h2 className="text-center text-lg tracking-tight lg:text-start">
          Web Developer
        </h2>

        <About />
      </div>

      <Image
        src={profile}
        alt="Lorenzo Lucchesi"
        width={180}
        height={180}
        className="rounded-lg grayscale transition-all hover:grayscale-0"
      />
    </section>
  );
}
