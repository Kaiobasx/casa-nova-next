import Link from "next/link";
import { gifts } from "@/lib/gifts";
import { GiftCard } from "./GiftCard"; // Ajuste o caminho de importação conforme sua estrutura de pastas

interface GiftGridProps {
  limit?: number;
}

export function GiftGrid({ limit }: GiftGridProps) {
  // Lógica para limitar a quantidade de itens na Home, se necessário
  const displayedGifts = limit ? gifts.slice(0, limit) : gifts;

  return (
    <section className="py-section bg-cream">
      <div className="section-wrapper">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="h-px w-10 bg-vinho/40" />
          <span className="font-poppins text-xs text-vinho/70 uppercase tracking-[0.3em]">
            Lista de Desejos
          </span>
          <div className="h-px w-10 bg-vinho/40" />
        </div>

        <h2 className="section-heading text-center mb-12">
          Nossos Desejos para a Casa Nova
        </h2>

        {/* Grid de Presentes usando o novo componente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedGifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>

        {/* Botão de "Ver Todos" (Aparece apenas se a lista for limitada) */}
        {limit && gifts.length > limit && (
          <div className="text-center mt-16">
            <Link href="/produtos" className="btn-primary">
              Ver Todos os {gifts.length} Presentes
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}