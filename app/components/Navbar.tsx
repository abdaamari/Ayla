"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }

      setIsOpen(false);
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-full border-soft glass card-shadow transition-all duration-500">
        <div ref={menuRef} className="relative px-6 md:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/gallery/logoayla.png"
                alt="Ayla Make Up"
                width={180}
                height={60}
                priority
                className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-10 text-foreground md:flex">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Gallery", "#gallery"],
                ["Packages", "#packages"],
                ["Contact", "#contact"],
              ].map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="relative font-medium transition-all duration-300 hover:text-primary after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {title}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/6285899504367"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-60 flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 top-full mt-3.5 flex w-full flex-col rounded-3xl border border-soft bg-white/5 px-6 text-center backdrop-blur-xl shadow-md transition-all duration-300 md:hidden ${
              isOpen
                ? "visible max-h-125 space-y-5 py-6 opacity-100"
                : "invisible max-h-0 space-y-0 py-0 opacity-0"
            }`}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Packages", "#packages"],
              ["Contact", "#contact"],
            ].map(([title, href]) => (
              <Link
                key={title}
                href={href}
                onClick={closeMenu}
                className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
              >
                {title}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href="https://wa.me/6285899504367"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-lg font-semibold text-primary underline underline-offset-4"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/6285899504367"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-primary p-4 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary/90 md:hidden animate-bounce"
        aria-label="Book via WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}