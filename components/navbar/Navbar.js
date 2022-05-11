import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <nav className={
      "fixed top-0 w-full z-30 backdrop-blur-xl transition-all " +
      (scrollActive ? "shadow-md pt-0" : "pt-0 shadow-sm")
    }>
      <div className="flex md:justify-between items-center md:h-20 h-14 md:px-40">
        <Link href="/">
          <span className="font-bold text-2xl cursor-pointer mx-auto md:ml-0 underline transition-all duration-300 hover:text-green-400">
            Kingkin Fajar
          </span>
        </Link>
        <div className="links md:block hidden text-body">
          <Link href="/projects">
            <span className={router.pathname == '/projects' ? "cursor-pointer font-semibold" : "cursor-pointer"}>Project</span>
          </Link>
          <Link href="/blog">
            <span className={router.pathname == '/blog' ? "pl-4 cursor-pointer font-semibold" : "cursor-pointer pl-4"}>Blog</span>
          </Link>
          <Link href="/about">
            <span className={router.pathname == '/about' ? "pl-4 cursor-pointer font-semibold" : "cursor-pointer pl-4"}>About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
