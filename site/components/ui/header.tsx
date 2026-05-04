import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-950 text-gray-100 h-16 w-dvw">
      <nav className="h-full w-full flex items-center justify-center">
        <ul className="h-1/2 w-3/4 flex justify-between font-bold text-2xl">
          <li>
            <Link href="/">Домашняя</Link>
          </li>
          <li>
            <Link href="/about">О проекте</Link>
          </li>
          <li>
            <Link href="/members">Участники</Link>
          </li>
          <li>
            <Link href="/blog">Блог</Link>
          </li>
          <li>
            <Link href="/resourses">Ресурсы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
