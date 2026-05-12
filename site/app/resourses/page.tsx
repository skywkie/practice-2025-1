import Resourse from "@/components/ui/resourse";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";

export default function About() {
  return (
    <div className="flex flex-col justify-center gap-4 px-10">
      <TypographyH1>Ресурсы</TypographyH1>
      <TypographyH2>Полезные ссылки</TypographyH2>
      <section>
        <ul>
          <Resourse link="https://github.com/skywkie/practice-2025-1">
            GitHub репозиторий сайта
          </Resourse>
          <Resourse link="https://syllabica.com/">Сайт силлабики</Resourse>
        </ul>
      </section>
      <TypographyH2>Литература</TypographyH2>
      <section>
        <ul>
          <Resourse link="https://help.figma.com/">Документация фигмы</Resourse>
          <Resourse link="https://www.w3.org/standards/">Руководство по верстке</Resourse>
          <Resourse link="https://developer.mozilla.org/en-US/">MDN документация</Resourse>
        </ul>
      </section>
    </div>
  );
}
