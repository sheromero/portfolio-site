import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "./icon";
import type { Experience } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  const { name, title, logo, startDate, endDate, description, links } =
    experience;

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-4">
        <Avatar className="size-12 border">
          {logo ? (
            <AvatarImage
              src={logo}
              alt={name}
              className="bg-background object-contain"
            />
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
          <ul className="ml-4 pr-4 list-disc text-sm">
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
                <Badge className="bg-muted text-muted-foreground dark:bg-primary dark:text-foreground duration-350 hover:scale-105">
                  <Icon name={link.icon} aria-hidden="true" />
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
