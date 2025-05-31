import ProjectItem from "./project-item";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: { name: string; href: string }[];
}

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
