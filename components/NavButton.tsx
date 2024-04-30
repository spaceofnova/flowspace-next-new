"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className="flex w-full items-center rounded pt-4 pb-4 relative"
      title={href}
    >
      <div
        className={`w-6 h-6 m-auto after:content-[''] after:bg-accent after:h-3/4 after:absolute after:top-[0.4rem] after:-right-1  ${
          currentPath === href ? "after:w-[0.05rem] text-accent" : "after:w-0"
        } after:overflow-hidden after:transition-all`}
      >
        {children}
      </div>
    </Link>
  );
}
