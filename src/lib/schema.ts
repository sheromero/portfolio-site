import dynamicIconImports from "lucide-react/dynamicIconImports";
import { z } from "zod";

const linkWithIcon = z.object({
  name: z.string(),
  href: z.string().url(),
  icon: z.custom<keyof typeof dynamicIconImports>(),
});

export type LinkWithIcon = z.infer<typeof linkWithIcon>;

export const experienceSchema = z.object({
  name: z.string(),
  title: z.string(),
  logo: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.array(z.string()).optional(),
  links: z.array(linkWithIcon).optional(),
});

export type Experience = z.infer<typeof experienceSchema>;

export const educationSchema = z.object({
  education: z.array(experienceSchema),
});
export const workSchema = z.object({
  work: z.array(experienceSchema),
});


