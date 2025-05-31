import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-6 pb-12 text-center sm:text-left">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Socials />

        <div className="text-xs text-muted-foreground flex flex-col items-center sm:items-end">
          <p>
            &copy; {new Date().getFullYear()} Sherif. All rights reserved.
          </p>
          <p>
            Made with <span role="img" aria-label="heart">❤️</span> using React, Vite & TanStack Router.
          </p>
        </div>
      </div>
    </footer>
  );
}
