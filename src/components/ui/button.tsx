/*import { access } from "fs";*/
import * as React from "react"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "accent" | "outline" | "subtle";
  size?: "sm" | "md" | "lg"
}

export default function Button({ 
  children, 
  variant = "primary",
  size = "md"
}: ButtonProps) {

  const variants = {
    primary:
     "bg-[#14213D] text-white hover:bg-[#0E1A33]",

    accent:
     "bg-[#FFAE00] hover:opacity-90 text-[#111111]",

    outline:
     "border border-[#D6D6D6] text-[#111111]",

    subtle:
     `
      border border-[#E5E5E5]
      bg-white
      text-[#14213D]
      hover:bg-gray-50`

  }

  const sizes = {
    sm:
     "h-[40px] px-4 text-sm font medium",

    md:
     "h-[52px] px-6 text-sm font-semibold w-50",

    lg:
     "h-[60px] px-8 text-base font-semibold"
  }
  
  return(
    <button
      className={`
        rounded-full
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]

        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </button>
  )
}