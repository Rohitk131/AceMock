import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  const baseClasses = `
    px-6 py-3
    text-white font-bold text-base
    rounded-xl cursor-pointer
    transition-all duration-150 ease-in-out
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.9)]
    bg-gradient-to-b from-[#404146] to-[#272729]
    hover:brightness-110
    active:scale-95
  `;

  return (
    <button
      role="button"
      className={clsx(baseClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};
