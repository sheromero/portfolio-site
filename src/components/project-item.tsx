import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: { name: string; href: string }[];
}

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { title, description, techStack, links } = project;

  return (
    <Card className="w-full bg-background text-foreground dark:bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <Badge
                className="bg-muted text-muted-foreground dark:bg-primary dark:text-foreground"
                key={idx}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                asChild
                className="flex items-center gap-1"
              >
                <Link to={link.href} target="_blank">
                  {link.name}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
