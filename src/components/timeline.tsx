import TimelineItem from "./timeline-item";
import type { Experience } from "@/lib/schema";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineProps {
  experience: Experience[];
}

export default function Timeline({ experience }: TimelineProps) {
  return (
    <Card className="bg-background text-foreground dark:bg-card">
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {experience.map((item, idx) => (
            <TimelineItem key={idx} experience={item}/>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
