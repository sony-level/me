// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from 'react';

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaBlog, FaGithubSquare, FaGitlab ,FaSquareRootAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

// Define the Intro component.
const Intro = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Home", 0.5);
  // Use the 'useActiveSectionContext' to manage active sections and clicks.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/app-icon.png" 
              alt={`${OWNER_NAME.split(" ")[0]} portrait`}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-2xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b className="font-bold">Salut, Je m&apos;appèlle </b>{" "}
        <b className="font-bold text-blue-500">{OWNER_NAME.split(" ")[0]}</b>.{" "}
        Je suis un <b className="font-bold text-blue-500">Étudiant en Cybersécurité</b> {" "}
        <b className="font-bold"></b>.{" "}
        <b className="italic"></b> {" "}
        <b className="underline"></b>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
      >
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition"
            onClick={() => {
              // Set the active section and the time of the last click.
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>
          <a
            href={EXTRA_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition borderBlack dark:bg-white/10"
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </a>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>
           <Link
            href={EXTRA_LINKS.rootMe}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Root-Me"
            title="Root-Me"
          >
             <img src="https://www.root-me.org/IMG/logo/siteon0.svg?1637496509" alt="Logo Root-Me" className="w-7 h-7" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
