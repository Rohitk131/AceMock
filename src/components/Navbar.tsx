"use client";

import React, { useState } from "react";
import { Settings, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-3 glass-panel border-b border-white/10 backdrop-blur-lg flex justify-between items-center bg-white/10">
    
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="logo" width={50} height={50} className="" />
        <h1 className="text-xl font-black tracking-tight text-white">
          Ace<span className="text-green-400 italic">Mock</span>
          <span className="text-green-400 animate-pulse">.</span>
        </h1>
      </div>

 
      <div className="hidden md:flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Settings className="w-5 h-5 text-green-400" />
        </motion.button>
        <img
          src='https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/8056935f732218218d2cc588916c6676-1694818112/JPEG%20%28with%20fade%20but%20filled%29.jpg'
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full border border-white/20 hover:scale-105 transition-transform"
        />
      </div>

     
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isOpen ? <X className="text-green-400 w-5 h-5" /> : <Menu className="text-green-400 w-5 h-5" />}
        </motion.button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full glass-panel border-t border-white/10 backdrop-blur-lg p-4 flex flex-col gap-3 md:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 p-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Settings className="w-5 h-5 text-green-400" />
              <span className="text-white">Settings</span>
            </motion.button>
            <div className="flex items-center gap-2">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full border border-white/20"
              />
              <span className="text-white font-medium">Your Profile</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
