import ProjectItem from "./project-item";
import type { Project } from "@/lib/schema";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {projects.map((project, idx) => (
        <ProjectItem key={idx} project={project} />
      ))}
    </div>
  );
}
