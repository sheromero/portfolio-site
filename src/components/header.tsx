import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "./theme-toggle";
import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="relative flex items-center justify-between w-full gap-4">
        <Tabs value={location.pathname}>
          <TabsList className="bg-muted px-1 rounded-lg">
            <TabsTrigger asChild value="/">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary focus:outline-none transition-colors"
              >
                Home
              </Link>
            </TabsTrigger>
            <TabsTrigger asChild value="/projects">
              <Link
                to="/projects"
                className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary focus:outline-none transition-colors"
              >
                Projects
              </Link>
            </TabsTrigger>
            <TabsTrigger asChild value="/about">
              <Link
                to="/about"
                className="px-4 py-2 text-sm font-medium data-[state=active]:text-primary focus:outline-none transition-colors"
              >
                About
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <ThemeToggle />
      </nav>
    </header>
  );
}
