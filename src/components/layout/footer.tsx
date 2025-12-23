"use client";

import Link from "next/link";
import { Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Footer() {
  return (
    <footer className="bg-background/70 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary" style={{ color: 'rgb(16, 104, 244)'}}>Nithishkumar Ganesan</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">
              Fullstack Developer
            </p>
            <p className="text-gray-400 mt-4 max-w-xs">
              I blend aesthetics with engineering to craft web interfaces that
              not only work — they wow.
            </p>
          </div>

          {/* Column 2: Socials */}
          <div className="lg:col-span-1 lg:justify-self-center">
            <p className="text-gray-400 max-w-xs">
              Let’s stay connected — I post dev notes, design experiments, and
              bad jokes.
            </p>
            <div className="flex gap-6 mt-4">
              <Link href="tel:+916383682418" className="text-gray-500 hover:text-white transition-colors"><Phone size={24} /></Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></Link>
              <Link href="https://github.com/nithig" className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></Link>
            </div>
          </div>

          {/* Column 3: CTA */}
          <div className="lg:col-span-1 lg:justify-self-end">
            <p className="text-gray-400 mb-4 max-w-xs">
              Open to freelance, consulting, or just a tech chat over coffee.
            </p>
            <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6" style={{ backgroundColor: 'rgb(16, 104, 244)'}}>
              Start a conversation
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Nithishkumar · Coded with intent, designed with care.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
