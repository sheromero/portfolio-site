import { createFileRoute } from "@tanstack/react-router";
import Experience from "@/components/experience";
import Socials from "@/components/socials";
import { ArrowDown, ArrowDownRight, MapPin, File } from "lucide-react";
import ProjectList from "@/components/project-list";
import { Link } from "@tanstack/react-router";
import projectData from "@/data/projects.json";
import { projectListSchema } from "@/lib/schema";

export const Route = createFileRoute("/")({
  component: App,
});

const BIRTH_YEAR = 2001;

function App() {
  const projects = projectListSchema.parse(projectData).projects;

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
            <MapPin className="size-4 animate-bounce sm:block translate-y-1"></MapPin>
            <p>Western Australia, AU</p>
          </div>
          <p className="mt-8 max-w-sm">
            Fullstack developer with experience in web automation, scraping and
            intergrating machine learning/computer vision solutions.
          </p>
          <div className="mt-8 flex items-end gap-1">
            <p className="font-semibold">
              (WIP) Want something fun? Check out down there
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>
          <section className="mt-8 flex items-center gap-8">
            <a
              href="/resume(wip).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Resume
              <File className="size-4" />
            </a>
            <Socials></Socials>
          </section>
        </div>
        <img
          className="rounded-lg"
          src={"/pic.jpg"}
          width={200}
          height={125}
          alt="Description"
          loading="lazy"
        />
      </section>
      <Experience></Experience>
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Projects</h2>
        </div>
        <ProjectList projects={projects.slice(0, 2)}></ProjectList>
        <div className="flex justify-center mt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View More Projects →
          </Link>
        </div>
      </section>
    </article>
  );
}
