import { Hero } from "@/components/sections/Hero";
import { Countdown } from "@/components/sections/Countdown";
import { About } from "@/components/sections/About";
import { GiftGrid } from "@/components/sections/GiftGrid";
import { PixContribution } from "@/components/sections/PixContribution";
import { ConfirmationForm } from "@/components/forms/ConfirmationForm";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── Hero Carrossel ── */}
      <Hero />

      {/* ── Countdown ── */}
      <Countdown />

      {/* ── Sobre Nós ── */}
      <About />

      {/* ── Lista de Presentes (preview) ── */}
      <GiftGrid limit={6} />

      {/* ── CTA: Ver lista completa ── */}
      <section className="py-20 bg-gradient-section">
        <div className="section-wrapper text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-vinho/40" />
              <span className="font-poppins text-xs text-vinho/70 uppercase tracking-[0.3em]">
                Lista Completa
              </span>
              <div className="h-px w-10 bg-vinho/40" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-5">
              Tem muito mais na nossa{" "}
              <span className="italic text-vinho">lista de desejos</span>
            </h2>
            <p className="font-poppins text-navy/60 text-base mb-10 leading-relaxed">
              Exploramos todos os cantinhos da casa e preparamos uma lista com
              tudo que precisamos para tornar nosso lar ainda mais especial.
            </p>
            <Link href="/produtos" className="btn-primary">
              Ver Todos os Presentes
            </Link>
          </div>
        </div>
      </section>

      {/* ── PIX ── */}
      <PixContribution />

      {/* ── Confirmação de Presença ── */}
      <section
        id="confirmacao"
        className="py-section bg-gradient-section noise-overlay relative overflow-hidden"
      >
        {/* Decorative background large letter */}
        <div className="absolute bottom-0 left-0 pointer-events-none select-none">
          <span className="font-playfair text-[18rem] font-bold text-navy/[0.025] leading-none">
            Y
          </span>
        </div>

        <div className="section-wrapper relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-10 bg-vinho/40" />
            <span className="font-poppins text-xs text-vinho/70 uppercase tracking-[0.3em]">
              Presença
            </span>
            <div className="h-px w-10 bg-vinho/40" />
          </div>

          <h2 className="section-heading">Confirme sua Presença</h2>

          <p className="font-poppins text-navy/60 text-base md:text-lg text-center mb-14 max-w-xl mx-auto leading-relaxed -mt-8">
            Sua presença é o que mais importa para nós. Preencha o formulário
            abaixo e nos avise se poderá comparecer!
          </p>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto bg-cream/80 border border-sky-accent/15 shadow-editorial p-8 md:p-12 animate-fade-in-up">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-vinho/30 -translate-x-px -translate-y-px" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-vinho/30 translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-vinho/30 -translate-x-px translate-y-px" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-vinho/30 translate-x-px translate-y-px" />
            <div className="relative">
              <ConfirmationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
