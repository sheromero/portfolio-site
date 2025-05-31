import ProjectList from "@/components/project-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal site built with React, Vite, and Tailwind CSS.",
    techStack: ["React", "Vite", "Tailwind", "TypeScript"],
    links: [
      { name: "GitHub", href: "https://github.com/yourname/portfolio" },
      { name: "Live Demo", href: "https://yourdomain.com" },
    ],
  },
  {
    title: "Task Tracker",
    description: "A serverless app to track personal tasks and habits.",
    techStack: ["Next.js", "Supabase", "Prisma"],
    links: [
      { name: "GitHub", href: "https://github.com/yourname/task-tracker" },
    ],
  },
  {
    title: "Task Tracker",
    description: "A serverless app to track personal tasks and habits.",
    techStack: ["Next.js", "Supabase", "Prisma"],
    links: [
      { name: "GitHub", href: "https://github.com/yourname/task-tracker" },
    ],
  },
  {
    title: "Task Tracker",
    description: "A serverless app to track personal tasks and habits.",
    techStack: ["Next.js", "Supabase", "Prisma"],
    links: [
      { name: "GitHub", href: "https://github.com/yourname/task-tracker" },
    ],
  },
];

function RouteComponent() {
  return (
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Projects</h2>
        </div>
        <ProjectList projects={projects}></ProjectList>
      </section>
  );
}
