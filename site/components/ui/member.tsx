import clsx from "clsx";
import { TypographyH3, TypographyH4, TypographyP } from "./typography";

interface MemberProps {
  className?: string;
  name: string;
  project: string;
  description: string;
}

export default function Member({ className, name, project, description }: MemberProps) {
  return (
    <article className={clsx("border-2 border-solid border-black rounded-2xl px-8 py-4", className)}>
      <div className="flex flex-row items-center justify-between">
        <TypographyH3>{name}</TypographyH3>
        <TypographyH4>{project}</TypographyH4>
      </div>
      <TypographyP>{description}</TypographyP>
    </article>
  );
}
