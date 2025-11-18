"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactElement } from "react";
import LinkProps from "@/@types/LinkProps";
import NavLink from "./navlink";
import { motion } from "framer-motion";

const links: LinkProps[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export default function Navbar(): ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      opacity: 0,
      x: -10,
    },
    opened: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link: LinkProps) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4">
        <Link href="https://github.com/aniketpatra96">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://dribbble.com/aniket-patra">
          <Image src="/dribbble.png" alt="dribble" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/aniketpatra26/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/aniket.patra.96/">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://in.pinterest.com/aniketpatra12345/">
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/aniketpatra96/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          type="button"
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          title="menu"
          onClick={() => setOpen((prev: boolean) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 bg-black rounded origin-left`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 bg-black rounded`}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 bg-black rounded origin-left`}
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link: LinkProps) => (
              <motion.div
                variants={listItemVariants}
                animate="opened"
                exit="closed"
                key={link.title}
              >
                <Link href={link.url} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
