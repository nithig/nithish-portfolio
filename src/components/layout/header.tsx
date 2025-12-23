"use client";

import Link from "next/link";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
// REMOVED: import { useIsMobile } from "@/hooks/use-mobile"; -> Not needed for layout

const navLinks = ["About", "Skills", "Projects", "FAQs", "Contact"];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-white hover:text-primary transition-colors"
    style={{ '--hover-color': 'rgb(16, 104, 244)' } as React.CSSProperties}
    onMouseOver={(e) => e.currentTarget.style.color = 'rgb(16, 104, 244)'}
    onMouseOut={(e) => e.currentTarget.style.color = 'white'}
  >
    {children}
  </Link>
);

// FIX 1: Added 'md:hidden' class. This ensures it is ALWAYS hidden on desktop via CSS.
const MobileNav = () => (
  <div className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background/80 backdrop-blur-sm border-none">
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link}>
              <NavLink href={`#${link.toLowerCase()}`}>{link}</NavLink>
            </SheetClose>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6 bg-[rgb(16,104,244)] hover:bg-[rgb(47,119,234)] transition-colors duration-300">
              Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
);


const DesktopNav = () => (
  <div className="hidden md:flex items-center gap-6">
    <nav className="flex items-center gap-6">
      {navLinks.map((link) => (
        <NavLink key={link} href={`#${link.toLowerCase()}`}>
          {link}
        </NavLink>
      ))}
    </nav>
    <div className="flex items-center gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="text-white rounded-full px-6 bg-[rgb(16,104,244)] hover:bg-[rgb(47,119,234)] transition-colors duration-300">
              Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
    </div>
  </div>
);

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 md:px-8 bg-background/50 backdrop-blur-sm">
      <Link href="/" className="text-2xl font-bold">
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>{'{'}</span>
        <span className="text-white"> Nithishkumar </span>
        <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>{'}'}</span>
      </Link>
      
      <DesktopNav />
      <MobileNav />
    </header>
  );
}