import ProjectList from "@/components/project-list";
import { createFileRoute } from "@tanstack/react-router";
import projectData from "@/data/projects.json";
import { projectListSchema } from "@/lib/schema";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const projects = projectListSchema.parse(projectData).projects;
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h2 className="title text-2xl sm:text-3xl">Projects</h2>
      </div>
      <ProjectList projects={projects}></ProjectList>
    </section>
  );
}
