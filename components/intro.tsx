import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpeg";

function Intro() {
  return (
    <section className="flex items-center justify-between">
      <div className="mt-[-30px]">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
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
