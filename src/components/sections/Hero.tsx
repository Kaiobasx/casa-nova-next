"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    src: "/img/IMG_4662.JPG",
    alt: "Foto de Casal Kaioba e Yas",
    objectPosition: "50% 50%",
    headline: "Bem-vindos ao Nosso",
    headlineAccent: "Chá de Casa Nova",
    sub: "Sua presença é o maior presente!",
    cta: "Ver Nossos Desejos",
    ctaHref: "/produtos",
  },
  {
    src: "/img/IMG_4739.jpg",
    alt: "Foto Kaio e Yas 2",
    objectPosition: "50% 40%",
    headline: "Um Novo Capítulo",
    headlineAccent: "Começa Aqui",
    sub: "Celebre conosco a alegria do nosso novo lar!",
    cta: "Explorar a Lista",
    ctaHref: "/produtos",
  },
  {
    src: "/img/IMG_2347_VSCO.jpg",
    alt: "Foto Kaio e Yas 3",
    objectPosition: "50% 52%",
    headline: "Obrigado por",
    headlineAccent: "Fazerem Parte",
    sub: "Cada presente ajuda a construir o nosso sonho.",
    cta: "Nos Ajude!",
    ctaHref: "/produtos",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 600);
    },
    [current, transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      aria-label="Carrossel de fotos"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />

          {/* Content */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 delay-300 ${
              i === current && !transitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-sky-accent/70" />
              <span className="font-poppins text-xs text-sky-accent uppercase tracking-[0.3em]">
                Kaio & Yas · 2025
              </span>
              <div className="h-px w-12 bg-sky-accent/70" />
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-4 drop-shadow-2xl max-w-4xl">
              {slide.headline}
              <br />
              <span className="italic text-sky-accent/90">
                {slide.headlineAccent}
              </span>
            </h1>

            <p className="font-poppins text-base sm:text-lg md:text-xl text-cream/80 mb-12 max-w-xl leading-relaxed drop-shadow-lg">
              {slide.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href={slide.ctaHref} className="btn-primary">
                {slide.cta}
              </Link>
              <Link href="/#confirmacao" className="btn-outline text-sm py-3.5">
                Confirmar Presença
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full border border-cream/50 ${
              i === current
                ? "w-8 h-2.5 bg-cream"
                : "w-2.5 h-2.5 bg-cream/30 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="font-poppins text-cream/40 text-xs uppercase tracking-[0.2em] rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  );
}
