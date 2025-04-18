"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import GradientButton from "./GradientButton";
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const Navbar = () => {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Resume Analyzer", href: "/resume-analyzer" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full",
        "bg-transparent py-4 px-6 md:px-12"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-indigo-400 to-rose-400 w-8 h-8 rounded-lg"
          />
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              "bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
            )}
          >
            AceMock
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium",
                  "text-white/60 hover:text-white",
                  "transition-colors duration-300"
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "hidden md:block",
              "px-4 py-2 rounded-full",
              "bg-white/[0.05] border border-white/[0.1]",
              "text-sm font-medium text-white",
              "hover:bg-white/[0.1] transition-colors"
            )}
          >
            Log In
          </motion.button>

          <GradientButton className="z-10">Get Started</GradientButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
