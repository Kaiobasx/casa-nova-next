"use client";

import { useCountdown } from "@/hooks/useCountdown";

// 🗓️ Altere esta data para a data real do Chá de Casa Nova
const EVENT_DATE = "2025-12-25T18:00:00";

interface TimeBlockProps {
  value: number;
  label: string;
  delay?: string;
}

function TimeBlock({ value, label, delay = "" }: TimeBlockProps) {
  return (
    <div
      className={`flex flex-col items-center animate-fade-in-up ${delay}`}
    >
      {/* Card */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center bg-gradient-navy border border-sky-accent/20 shadow-glass">
        {/* Corner ornaments */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-sky-accent/40" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-sky-accent/40" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-sky-accent/40" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-sky-accent/40" />

        <span
          key={value}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-cream animate-count-up"
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      {/* Label */}
      <span className="mt-4 font-poppins text-xs sm:text-sm uppercase tracking-[0.2em] text-navy/60">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const { days, hours, minutes, seconds, isExpired } =
    useCountdown(EVENT_DATE);

  return (
    <section className="relative py-section bg-cream overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #003049 0, #003049 1px, transparent 0, transparent 50%)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top ornament */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-accent/30 to-transparent" />

      <div className="section-wrapper relative z-10 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="h-px w-10 bg-vinho/40" />
          <span className="font-poppins text-xs text-vinho/70 uppercase tracking-[0.3em]">
            Contagem Regressiva
          </span>
          <div className="h-px w-10 bg-vinho/40" />
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 animate-fade-in">
          Faltam apenas para o{" "}
          <span className="italic text-vinho">Chá de Casa Nova!</span>
        </h2>

        <p className="font-poppins text-navy/50 text-sm md:text-base mb-14 md:mb-20 animate-fade-in">
          25 de Dezembro de 2025 · 18h00
        </p>

        {isExpired ? (
          <div className="inline-block px-10 py-6 border border-sky-accent/30 bg-navy/5">
            <p className="font-playfair text-2xl text-navy italic">
              O Chá de Casa Nova já aconteceu! ✨
            </p>
          </div>
        ) : (
          <div className="flex items-start justify-center gap-4 sm:gap-8 md:gap-12">
            <TimeBlock value={days} label="Dias" delay="delay-100" />

            {/* Separator */}
            <span className="font-playfair text-4xl sm:text-5xl text-vinho/40 mt-10 sm:mt-14 select-none">
              :
            </span>

            <TimeBlock value={hours} label="Horas" delay="delay-200" />

            <span className="font-playfair text-4xl sm:text-5xl text-vinho/40 mt-10 sm:mt-14 select-none">
              :
            </span>

            <TimeBlock value={minutes} label="Minutos" delay="delay-300" />

            <span className="font-playfair text-4xl sm:text-5xl text-vinho/40 mt-10 sm:mt-14 select-none">
              :
            </span>

            <TimeBlock value={seconds} label="Segundos" delay="delay-400" />
          </div>
        )}
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-accent/30 to-transparent" />
    </section>
  );
}
