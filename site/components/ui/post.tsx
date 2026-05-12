import Image from "next/image";
import { TypographyH2, TypographyP } from "./typography";

interface PostProps {
  title: string;
  description: string;
  project: string;
  src: string;
  alt: string;
  date: string;
}

export default function Post({ title, description, project, src, alt, date }: PostProps) {
  return (
    <article className="flex flex-row gap-8">
      <Image src={src} alt={alt} width="140" height="100" />
      <div>
        <div className="flex flex-row items-center justify-between">
          <TypographyH2>{title}</TypographyH2>
          <TypographyP className="flex flex-row items-center justify-center gap-4">
            <b>{project}</b>
            {date}
          </TypographyP>
        </div>
        <TypographyP>{description}</TypographyP>
      </div>
    </article>
  );
}
