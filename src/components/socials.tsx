import Icon from './icon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export default function Socials() {
  // Placeholder data defined inline

type IconName = keyof typeof dynamicIconImports;

const socials: { name: string; href: string; icon: IconName }[] = [
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'GitHub', href: 'https://github.com/sheromero', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sherif-f-moussa/', icon: 'linkedin' },
];


  return (
    <section className="flex gap-6">
      {socials.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary dark:hover:text-foreground" 
          title={name}
        >
          <span className="sr-only">{name}</span>
          <Icon name={icon} aria-hidden="true" className="size-5" />
        </a>
      ))}
    </section>
  );
}
