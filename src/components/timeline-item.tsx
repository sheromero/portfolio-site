import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  name: string;
  title?: string;
  logo?: string;
  startDate?: string;
  endDate?: string;
  description?: string[];
  links?: { name: string; href: string; icon: LucideIcon }[];
}

export default function TimelineItem({
  name,
  title,
  logo,
  startDate,
  endDate,
  description,
  links,
}: TimelineItemProps) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-4">
        <Avatar className="size-12 border">
          {logo ? (
            <AvatarImage src={logo} alt={name} className="bg-background object-contain" />
          ) : (
            <AvatarFallback>{name[0]}</AvatarFallback>
          )}
        </Avatar>
      </div>

      <div className="flex flex-col gap-1">
        {(startDate || endDate) && (
          <time className="text-xs text-muted-foreground">
            {startDate} - {endDate || "Present"}
          </time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        {description && (
          <ul className="ml-4 list-disc text-sm">
            {description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        )}
        {links && links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Badge>
                  <link.icon className="size-3" />
                  {link.name}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}