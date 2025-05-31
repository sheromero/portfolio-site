import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "./timeline";

const workExperience = [
  {
    role: "Software Developer",
    company: "Car Soruce Connect",
    period: "2023 - Present",
    description:
      "Building scalable React applications and implementing design systems using Tailwind CSS.",
  },
  {
    role: "Software Developer",
    company: "Sole Trader",
    period: "Summer 2022",
    description:
      "Worked on full-stack features with Node.js and React, improving app performance by 20%.",
  },
];

const educationHistory = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Curtin University",
    period: "2020 - 2022",
    description:
      "Graduated with High distinction. Focused on software engineering, data structures, and algorithms. Completed a capstone project using React Native.",
  },
  {
    degree: "Full-Stack Web Dev Certificate",
    institution: "Online Bootcamp",
    period: "2021",
    description:
      "Learned frontend and backend development, including React, Node.js, and databases.",
  },
];

export default function Experience() {
  return (
    <Tabs defaultValue="work">
      <TabsList className="px-1 mb-2 grid w-full grid-cols-2">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>

      <TabsContent value="work">
        <Timeline experience={workExperience} />
      </TabsContent>

      <TabsContent value="education">
        <Timeline experience={educationHistory} />
      </TabsContent>
    </Tabs>
  );
}
