import TechStack from "@/components/tech-stack";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16 space-y-24
      animate-in fade-in slide-in-from-bottom-1 animation-duration-350">
      
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">About shero.wiki</h1>
        <p className="text-lg text-muted-foreground">
          This is my personal portfolio and development playground. I built it to showcase my projects, 
          test ideas, and experiment with new tech — all in one cohesive, high-performance space.
        </p>
        <p className="text-muted-foreground">
          The site is built from the ground up with a focus on speed, accessibility, 
          and clean architecture. 
        </p>
        <p className="text-muted-foreground">
          It's meant to evolve alongside my skills, so expect it to shift and grow over time.
        </p>
      </section>

      {/* Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Tech I Work With</h2>
        <TechStack />
      </section>

      {/* Car Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Crown Athlete</h2>
        <img
          src="/crown.jpg"
          alt="Toyota Crown Athlete 2011"
          className="w-full rounded-xl border shadow-lg object-cover"
        />
        <p className="text-muted-foreground">
          I drive a 2011 Toyota Crown Athlete — a JDM luxury sedan that blends elegance 
          with engineering precision. It’s a clean, understated machine that reflects the same 
          mindset I bring to software: refined under the hood, minimal on the surface.
        </p>
      </section>
    </article>
  );
}

