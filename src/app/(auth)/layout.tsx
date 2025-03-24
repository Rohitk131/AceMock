import React, { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap", 
});


const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white  ${poppins.className}  `}>
      
      <img
        src="/blob-scene-haikei.svg"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 md:px-12 md:py-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 max-w-6xl">
     
          <div className="flex md:hidden w-full flex-col gap-6 text-center mb-8">
            
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tight text-white">
                Ace<span className="text-green-400 italic">Mock</span>
                <span className="text-green-400 animate-pulse">.</span>
              </h1>
              <div className="flex items-center justify-center">
                <div className="h-px w-8 bg-green-400 mr-3"></div>
                <p className="text-lg font-medium uppercase tracking-widest text-neutral-300">
                  Practice makes perfect
                </p>
                <div className="h-px w-8 bg-green-400 ml-3"></div>
              </div>
            </div>
            <p className="text-base text-neutral-300 font-light italic">
              Master your interviews with AI-driven mock sessions
            </p>
          </div>
          
          <div className="hidden md:flex md:w-5/12 flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-black tracking-tight text-white">
                Ace<span className="text-green-400 italic">Mock</span>
                <span className="text-green-400 animate-pulse">.</span>
              </h1>
              <div className="flex items-center">
                <div className="h-px w-16 bg-green-400 mr-4"></div>
                <p className="text-xl font-medium uppercase tracking-widest text-neutral-300">
                  Practice makes perfect
                </p>
              </div>
            </div>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              Master your interviews with 
              <span className="font-semibold relative inline-block mx-2">
                AI-driven
                <span className="absolute bottom-0 left-0 w-full h-px bg-green-400/50"></span>
              </span> 
              mock sessions.
            </p>
            <div className="flex space-x-2 text-sm text-neutral-400">
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                <span>Real-time feedback</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                <span>Build confidence</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                <span>Guaranteed success</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 flex justify-center">
            <div className="w-full max-w-md backdrop-blur-sm bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;