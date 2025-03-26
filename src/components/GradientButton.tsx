import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Button8Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button8 = ({ className, children, ...props }: Button8Props) => {
  return (
    <button
      className={cn(
        "relative cursor-pointer rounded-full border-none px-5 py-2 text-white font-medium text-[16px] leading-6 outline-none transition-transform duration-200 ease-out", 
        "bg-gradient-to-r from-[#9248ff] via-[#ff77a5] to-[#ffb340] shadow-md", 
        "hover:bg-opacity-90 active:translate-y-0.5", 
        className
      )}
      {...props}
    >
      {children}
      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
      <span className="absolute inset-0 rounded-full shadow-[0_9px_21px_rgba(0,0,25,0.3),_0_-3px_rgba(73,2,57,0.2)_inset] z-0" />
    </button>
  );
};

export default Button8