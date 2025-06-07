import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiDocker,
  SiGithub,
  SiZod
} from 'react-icons/si';

const techStack = [
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiZod, name: 'Zod'},
  { icon: SiPython, name: 'Python' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiSqlite, name: 'Sqlite' },
  { icon: SiPrisma, name: 'Prisma' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiGithub, name: 'GitHub' },
];

export default function TechStack() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="title text-2xl sm:text-3xl">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {techStack.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="flex items-center justify-center transition-transform duration-300 hover:scale-120"
            aria-label={name}
            role="img"
          >
            <Icon size={32} title={name} style={{ color: 'var(--color-icon)' }} />
          </div>
        ))}
      </div>
    </section>
  );
}


