import clsx from "clsx";
import Link from "next/link";
import { TypographyP } from "./typography";

interface ResourseProps {
  classname?: string;
  children: string;
  link: string;
}

export default function Resourse({ classname, children, link }: ResourseProps) {
  return (
    <li className={clsx("text-blue-800", classname)}>
      <Link href={link}>
        <TypographyP className="text-xl">{children}</TypographyP>
      </Link>
    </li>
  );
}
