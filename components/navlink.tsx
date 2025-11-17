"use client";
import LinkProps from "@/@types/LinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactElement } from "react";

export default function NavLink({ link }: { link: LinkProps }): ReactElement {
  const pathName: string = usePathname();
  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
}
