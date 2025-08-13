"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

type NavLink = {
  name: string;
  href: string;
};

const socials: SocialLink[] = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
];

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Category", href: "/category" },
  { name: "Shop", href: "/shop" },
  { name: "How is work", href: "/how-is-work" },
  { name: "Blog", href: "/blog" },
  { name: "Project Inquiry", href: "/project-inquiry" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="container mx-auto flex justify-between  bg-white border-b border-gray-300">
      {/* Menu Links */}
      <div className="container mx-auto flex justify-between border-l border-r border-gray-300 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-craft.svg"
            alt="Logo"
            width={60}
            height={30}
            priority
          />
        </Link>
        <div className="flex gap-1 rounded-full border px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "px-2 py-1 text-sm transition-colors",
                pathname === link.href
                  ? "font-semibold text-black"
                  : "text-gray-500 hover:text-black"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 border-l border-r border-gray-300 px-4 py-2 rounded-full bg-black">
          {socials.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-300"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
