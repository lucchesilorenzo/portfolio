import { Card, CardContent } from "@/components/ui/card";
import { experiencesData } from "@/lib/data";
import { BriefcaseIcon } from "lucide-react";

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="relative ml-3 border-l-2 border-primary">
            {experiencesData.map((experience, index) => (
              <div key={index} className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                  <BriefcaseIcon
                    size={12}
                    className="text-primary-foreground"
                  />
                </span>
                <div className="px-4">
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-primary">
                    {experience.title}
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-muted-foreground">
                    {experience.date}
                  </time>
                  <p className="mb-2 text-base font-normal text-foreground">
                    {experience.company}
                  </p>
                  <p className="text-sm font-normal text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
