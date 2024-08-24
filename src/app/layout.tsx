import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import IconArray from "@/components/IconArray";
import Footer from "@/components/layouts/Footer";
import { Logo, Navbar, NavigationLinks } from "@/components/layouts/Navbar";
import LogoWithIcon from "@/components/LogoWithIcon";
import { FooterAboutDetails } from "@/constants/about";
import { NavLinks, SocialIcons } from "@/constants/menu";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Partridge Portfolio | achronus.dev",
  description: "Ryan Partridge's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className}`}>
        <Navbar>
          <nav className="flex gap-4 items-center">
            <Logo>
              <LogoWithIcon />
            </Logo>
            <NavigationLinks navLinks={NavLinks} />
          </nav>
          <nav className="flex items-center ml-auto gap-2">
            <IconArray icons={SocialIcons} />
          </nav>
        </Navbar>
        {children}
        <Footer details={FooterAboutDetails} />
      </body>
    </html>
  );
}
