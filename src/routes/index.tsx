import { createFileRoute } from "@tanstack/react-router";
import Experience from "@/components/experience";
import pic from "../assets/pic.jpg";
import Socials from "@/components/socials";
import { ArrowDown, ArrowDownRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

const BIRTH_YEAR = 2001;

function App() {
  return (
    <article className="bg-background text-foreground mt-8 flex flex-col gap-16 pb-16">
      <section className="bg-background text-foreground flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="title text-5xl">Hey, it's Sherif.</h1>
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f920/512.gif"
              alt="🤠"
              width="32"
              height="32"
              className="inline-block"
            />
          </div>
          <p className="mt-2 font-medium">
            {new Date().getFullYear() - BIRTH_YEAR}
            y.o. software engineer/developer
          </p>
          <div className="flex gap-2">
            <MapPin className="size-4 animate-bounce sm:block"></MapPin>
            <p>Western Australia, AU</p>
          </div>
          <p className="mt-8 max-w-sm">
            Fullstack developer with experience in web automation, scraping and intergrating
            machine learning/computer vision solutions.
          </p>
          <div className="mt-8 flex items-end gap-1">
            <p className="font-semibold">
              Want something fun? Check out down there
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>
          <section className="mt-8 flex items-center gap-8">
            <Socials></Socials>
          </section>
        </div>
        <img
          className="rounded-lg"
          src={pic}
          width={200}
          height={125}
          alt="Description"
          loading="lazy"
        />
      </section>
      <Experience></Experience>
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
        </div>
      </section>
    </article>
  );
}
