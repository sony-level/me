import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import React from 'react';

import { Header, Footer, ThemeSwitch } from "@/components";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

import "./globals.css";

// inter font export
const inter = Inter({ subsets: ["latin"] });

// site metadata
export const metadata: Metadata = {
  title: `${OWNER_NAME.split(" ")[0]} | Personal Portfolio`,
  description: `${
    OWNER_NAME.split(" ")[0]
  } étudiant en cybersécurité.`,
  authors: {
    name: OWNER_NAME,
    url: EXTRA_LINKS.github,
  },
  keywords: [
    "cybersecurity",
    "risk management",
    "incident response",
    "audit",
    "compliance",
    "cryptography",
    "network security",
    "application security",
    "cloud security",
    "mobile security",
    "IoT security",
    "ethical hacking",
    "forensics",
    "penetration testing",
    "malware analysis",
    "reverse engineering",
    "security architecture",
    "identity and access management",
    "data loss prevention",
    "end point security",
    "SIEM management",
    "firewall",
    "IDS",
    "IPS",
    "secure coding practices",
    "threat modelling",
    "vulnerability assessment",
    "deployment",
    "docker",
    "kubernetes",
    "CI/CD",
    "ansible",
    "jenkins",
    "terraform",
    "AWS",
    "azure",
    "google cloud",
    "heroku",
    "vagrant",
    "puppet",
    "chef",
    "saltstack",
    "cloudformation",
    "serverless deployment"
  ],
  manifest: "/manifest.json",
  other: {
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY!,
  },
}; 

// Définir le viewport avec themeColor
export const generateViewport = () => ({ 
  themeColor: "#000000",
  // autres configurations de viewport si nécessaire
});

// root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* bg blur effect */}
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        {/* theme context provider */}
        <ThemeContextProvider>
          {/* active section context provider */}
          <ActiveSectionContextProvider>
            {/* header */}
            <Header />
            {children}
            {/* footer */}
            <Footer />

            {/* toaster */}
            <aside>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>

            {/* theme switcher */}
            <aside>
              <ThemeSwitch />
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* vercel analytics */}
        <Analytics />

        {/* vercel speed insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
