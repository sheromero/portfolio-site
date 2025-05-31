import  TimelineItem  from "./timeline-item";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineProps {
  items: {
    name: string;
    title?: string;
    logo?: string;
    startDate?: string;
    endDate?: string;
    description?: string[];
    links?: { name: string; href: string; icon: any }[];
  }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {items.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
