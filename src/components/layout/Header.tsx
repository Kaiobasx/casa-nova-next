"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#sobre", label: "Sobre Nós" },
  { href: "/produtos", label: "Presentes" },
  { href: "/#pix", label: "PIX" },
  { href: "/#confirmacao", label: "Confirmar Presença" },
];

const authLinks = [
  { href: "/login", label: "Entrar" },
  { href: "/cadastro", label: "Cadastrar" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-navbar shadow-glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="section-wrapper flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Chá de Casa Nova - Início"
        >
          {/* House Icon SVG */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-vinho/20 border border-cream/30 group-hover:bg-vinho/40 transition-all duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5 text-cream"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="hidden sm:block">
            <span className="font-playfair text-cream text-xl font-semibold leading-none block">
              Kaio & Yas
            </span>
            <span className="font-poppins text-cream/60 text-xs uppercase tracking-widest">
              Chá de Casa Nova
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-poppins text-sm text-cream/80 hover:text-cream tracking-wide uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-accent group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {authLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "font-poppins text-sm text-cream/70 hover:text-cream tracking-wide uppercase transition-colors duration-200"
                  : "btn-primary text-sm py-2.5 px-6"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 text-cream focus:outline-none"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="w-6 flex flex-col gap-1.5 transition-all duration-300">
            <span
              className={`h-px bg-cream transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-px bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px bg-cream transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-navbar border-t border-cream/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins text-sm text-cream/80 hover:text-cream tracking-wide uppercase transition-colors py-2 border-b border-cream/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            {authLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  i === 0
                    ? "font-poppins text-sm text-cream/70 hover:text-cream tracking-wide uppercase text-center py-2"
                    : "btn-primary text-sm py-3 text-center"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
