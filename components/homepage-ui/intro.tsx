import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpeg";

function Intro() {
  return (
    <section className="flex w-full flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between">
      <div className="text-center lg:mt-[-30px] lg:text-start">
        <h1 className="mb-2 text-3xl font-bold tracking-tight lg:text-4xl">
          Lorenzo Lucchesi
        </h1>
        <h2 className="text-lg tracking-tight">Web Developer</h2>
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

export default Intro;
