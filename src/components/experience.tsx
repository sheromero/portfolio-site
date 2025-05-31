import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import Timeline from "./timeline";

const workExperience = [
  {
    name: "Car Source Connect",
    title: "Software Developer",
    startDate: "2023",
    endDate: "Present",
    logo: "/logos/car-source.png", // replace with actual path or leave undefined
    description: [
      "Building scalable React applications.",
      "Implementing design systems using Tailwind CSS.",
    ],
    links: [
      {
        name: "Company Site",
        href: "https://carsourceconnect.com",
        icon: Briefcase,
      },
    ],
  },
  {
    name: "Sole Trader",
    title: "Software Developer",
    startDate: "Summer 2022",
    endDate: "Summer 2022",
    logo: "/logos/sole-trader.png", // replace or leave out
    description: [
      "Worked on full-stack features with Node.js and React.",
      "Improved app performance by 20%.",
    ],
    links: [],
  },
  {
    name: "Thales",
    title: "",
    startDate: "Summer 2022",
    endDate: "Summer 2022",
    logo: "/logos/sole-trader.png", // replace or leave out
    description: [
      "Worked on full-stack features with Node.js and React.",
      "Improved app performance by 20%.",
    ],
    links: [
      {
        name: "Company Site",
        href: "https://www.thalesgroup.com/en",
        icon: Briefcase,
      },
    ],
  },
];

const educationHistory = [
  {
    name: "Curtin University",
    title: "B.Sc. Computer Science",
    startDate: "2020",
    endDate: "2022",
    logo: "src/assets/uni.jpg", // replace or leave blank
    description: [
      "Graduated with High Distinction.",
      "Focused on software engineering, data structures, and algorithms.",
      "Completed a capstone project using React Native.",
    ],
    links: [
      {
        name: "University Site",
        href: "https://www.curtin.edu.au/",
        icon: GraduationCap,
      },
    ],
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
        <Timeline items={workExperience} />
      </TabsContent>

      <TabsContent value="education">
        <Timeline items={educationHistory} />
      </TabsContent>
    </Tabs>
  );
}
