import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "./timeline";
import educationData from "@/data/education.json";
import workData from "@/data/work.json";
import { educationSchema, workSchema } from "@/lib/schema";

export default function Experience() {
  const education = educationSchema.parse(educationData).education;
  const work = workSchema.parse(workData).work;

  return (
    <Tabs defaultValue="work">
      <TabsList className="px-1 mb-2 grid w-full grid-cols-2">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>

      <TabsContent value="work" className="animate-in slide-in-from-right-3 duration-350">
        <Timeline experience={work} />
      </TabsContent>

      <TabsContent value="education" className="animate-in slide-in-from-left-3 duration-350">
        <Timeline experience={education} />
      </TabsContent>
    </Tabs>
  );
}
