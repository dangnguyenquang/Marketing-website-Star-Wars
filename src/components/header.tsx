"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { PATH_NAME } from "@/configs/pathName";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`backdrop-blur-sm bg-white/10 z-40 w-full fixed top-0 left-0 py-4 px-[30px] md:px-[40px] lg:px-[60px] flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-b-[20px]"
          : "shadow-none rounded-b-none"
      }`}
    >
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <img
          src="/images/star-wars-hub-high-resolution-logo-transparent.png"
          className="h-10 w-auto"
        />
      </Link>
      <div className="ml-auto flex gap-2">
        <Link
          href={PATH_NAME.HOME}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 duration-300 py-2 text-sm font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href={PATH_NAME.MOVIE_LIST}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 duration-300 py-2 text-sm font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Movie list
        </Link>
        <Link
          href={PATH_NAME.CHARACTER_LIST}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 duration-300 py-2 text-sm font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Character list
        </Link>
      </div>
    </header>
  );
}
