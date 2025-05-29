import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm ">
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary focus:outline-none transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary focus:outline-none transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="flex gap-0 sm:gap-4"></div>
      <ThemeToggle></ThemeToggle>
      </nav>
    </header>
  );
}
