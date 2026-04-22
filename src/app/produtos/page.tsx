import type { Metadata } from "next";
import { GiftGrid } from "@/components/sections/GiftGrid";
import { PixContribution } from "@/components/sections/PixContribution";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lista de Presentes · Chá de Casa Nova — Kaio & Yas",
  description:
    "Confira nossa lista completa de presentes para o Chá de Casa Nova de Kaio e Yas.",
};

export default function ProdutosPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-40 pb-20 bg-gradient-navy noise-overlay overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-vinho/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-sky-accent/10 blur-3xl pointer-events-none" />

        <div className="section-wrapper relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-10 font-poppins text-xs text-cream/40 uppercase tracking-widest">
            <Link href="/" className="hover:text-cream/70 transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-cream/70">Lista de Presentes</span>
          </nav>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-sky-accent/40" />
            <span className="font-poppins text-xs text-sky-accent/70 uppercase tracking-[0.3em]">
              Lista de Desejos
            </span>
            <div className="h-px w-10 bg-sky-accent/40" />
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 animate-fade-in">
            Nossos Desejos para a{" "}
            <span className="italic text-sky-accent">Casa Nova</span>
          </h1>

          <p className="font-poppins text-cream/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Cada item desta lista foi escolhido com carinho para o nosso novo
            lar. Qualquer contribuição, grande ou pequena, fará toda a
            diferença para nós!
          </p>

          {/* Stats bar */}
          <div className="mt-14 flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {[
              { value: "12", label: "Itens na Lista" },
              { value: "2", label: "Lojas Parceiras" },
              { value: "∞", label: "Gratidão" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-3xl md:text-4xl font-bold text-cream">
                  {stat.value}
                </p>
                <p className="font-poppins text-xs text-cream/50 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gift Grid (todos os itens) ── */}
      <GiftGrid />

      {/* ── Não achou algo? PIX ── */}
      <section className="py-20 bg-cream border-t border-navy/10">
        <div className="section-wrapper text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-4">
              Prefere contribuir de outra forma?
            </h3>
            <p className="font-poppins text-navy/60 text-sm md:text-base mb-8 leading-relaxed">
              Se preferir nos presentear com dinheiro, você pode fazer uma
              contribuição via PIX. Toda ajuda é muito bem-vinda! 💛
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#pix" className="btn-primary">
                Contribuir via PIX
              </Link>
              <Link href="/#confirmacao" className="btn-secondary py-4">
                Confirmar Presença
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PIX Section reaproveitada ── */}
      <PixContribution />
    </>
  );
}
