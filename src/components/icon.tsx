import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { Square, type LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import clsx from "clsx";

const fallback = <Square className="w-5 h-5 shrink-0 text-transparent" aria-hidden/>;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, className, ...props }: IconProps) => {
  const importFn = dynamicIconImports[name];

  if (!importFn) {
    console.error(`Icon "${name}" not found in lucide-react/dynamicIconImports.`);
    return fallback;
  }

  const LucideIcon = lazy(() =>
    importFn().then((module) => ({
      default: module.default as ComponentType<any>,
    }))
  );

  return (
    <Suspense fallback={fallback}>
      <LucideIcon className={clsx("w-5 h-5 shrink-0", className)} {...props} />
    </Suspense>
  );
};

export default Icon;
