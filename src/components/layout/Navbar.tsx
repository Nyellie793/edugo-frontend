"use client"

import Link from "next/link"
import Button from "../ui/button"
import { useState } from "react"
import {
    Menu,
    X
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Courses",
    href: "/courses",
  },

  {
    label: "AI Tutor",
    href: "/ai-tutor",
  },

  {
    label: "About",
    href: "/about",
  },
]

export default function Navbar() {

  const[isOpen, setIsOPen] = useState(false)  

  return (

    <header
      className="
        sticky
        top-0
        z-50

        bg-[#FBF8F5]/80
        backdrop-blur-md

        border-b
        border-[#ECECEC]

        shadow-[0_2px_10px_rgba(0,0,0,0.03)]
      "
    >

      <nav
        className="
          max-w-7xl
          mx-auto

          flex
          items-center
          justify-between

          px-6
          md:px-16

          py-5
        "
      >

        {/* LOGO SECTION */}

        <Link
          href="/"

          className="
            flex
            items-center
            gap-3
          "
        >

          {/* PLACEHOLDER LOGO */}

          <div
            className="
              w-11
              h-11

              rounded-2xl

              bg-[#14213D]

              flex
              items-center
              justify-center

              text-white
              font-black
              text-lg
            "
          >
            E
          </div>

          {/* PLATFORM NAME */}

          <div>

            <h1
              className="
                text-2xl
                font-black
                tracking-tight
              "
            >
              EDUGO
            </h1>

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.2em]

                text-[#8A8A8A]
                font-semibold
              "
            >
              AI LEARNING
            </p>

          </div>

        </Link>

        {/* DESKTOP NAV */}

        <div
          className="
            md:flex
            items-center
            gap-5
          "
        >

          {/* NAV LINKS */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            {navLinks.map((link) => (

              <Link
                key={link.label}
                href={link.href}

                className="
                  px-5
                  py-2.5

                  rounded-full

                  text-sm
                  font-medium

                  text-[#555555]

                  transition-all
                  duration-300

                  hover:bg-[#F5E7B2]
                  hover:text-[#9A6B00]
                "
              >

                {link.label}

              </Link>

            ))}

          </div>

          {/* AUTH BUTTONS */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <Button>
              Sign Up
            </Button>

          </div>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setIsOPen(true)}
          className="
           md:hidden
           
           p-2
           
           rounded-xl
           
           hover:bg-[#F5E7B2]
           
           transition-all
          "
        >
            <Menu size={28} />

        </button>

      </nav>

      {/* MOBILE SIDEBAR */}

      <div
        className={`
          md:hidden

          fixed
          top-0
          right-0
          
          h-screen
          w-[300px]
          
          bg-white
          
          z-50
          
          shadow-2xl
          
          transition-all
          duration-300
          
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* SIDEBAR HEADER */}
        <div 
           className="
             flex
             items-center
             justify-between
             
             p-6
             
             border-b
             border-[#ECECEC]
            "
        >
            <h2 
              className="
                text-xl
                font-bold
              "
            >
                Menu

            </h2>

            <button 
              onClick={() => setIsOPen(false)}

              className="
                p-2
                rounded-lg
                
                hover:bg-gray-100
              "
            >
                <X size={24} />
            </button>

        </div>

        {/* MOBILE LINKS */}

        <div 
          className="
            flex
            flex-col
            
            p-6
            gap-3
          "
        >
            {navLinks.map((link) => (

            <Link
              key={link.label}
              href={link.href}

              onClick={() => setIsOPen(false)}

              className="
                px-5
                py-4

                rounded-2xl

                text-sm
                font-medium

                text-[#555555]

                transition-all

                hover:bg-[#F5E7B2]
                hover:text-[#9A6B00]
              "
            >

              {link.label}

            </Link>

          ))}

        </div>

        {/* MOBILE BUTTONS */}

        <div
          className="
            p-6
            flex
            flex-col
            gap-3
          "
        >

          <Button
            variant="subtle"
            size="sm"
          >
            Login
          </Button>

          <Button>
            Sign Up
          </Button>

        </div>

      </div>

       {/* BACKDROP */}

      {isOpen && (

        <div
          onClick={() => setIsOPen(false)}

          className="
            md:hidden 
            
            fixed
            inset-0

            bg-black/20
            backdrop-blur-sm

            z-40
          "
        />

      )}

    </header>
  )
}