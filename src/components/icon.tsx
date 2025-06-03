import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = <div style={{ width: 24, height: 24 }} />;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
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
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
