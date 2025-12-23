"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "gnithishdeveloper@gmail.com",
    href: "mailto:gnithishdeveloper@gmail.com"
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 6383682418",
    href: "tel:+916383682418"
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Bangalore, India",
    href: "#"
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Get <span className="text-primary" style={{ color: 'rgb(16, 104, 244)'}}>In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-2" style={{ backgroundColor: 'rgb(16, 104, 244)'}}></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 mt-16 items-start">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/50 border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-6" style={{ color: 'rgb(16, 104, 244)'}}>
              Send a Message
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-background border border-gray-800 rounded-lg p-4 text-gray-300 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-background border border-gray-800 rounded-lg p-4 text-gray-300 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-background border border-gray-800 rounded-lg p-4 text-gray-300 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-background border border-gray-800 rounded-lg p-4 text-gray-300 focus:border-primary focus:ring-0 outline-none transition-colors h-32 resize-none"
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 text-base"
                style={{ backgroundColor: 'rgb(16, 104, 244)'}}
              >
                Send Message <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <a href={item.href} key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/30" style={{ backgroundColor: 'rgba(16, 104, 244, 0.2)'}}>
                  <item.icon className="w-6 h-6 text-primary" style={{ color: 'rgb(16, 104, 244)'}} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}
            <div className="w-full h-[200px] md:h-[250px] bg-slate-900 border border-gray-800 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124416.3214535427!2d77.5029471431718!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf80c2354213d2d4d!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1684343210987"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
