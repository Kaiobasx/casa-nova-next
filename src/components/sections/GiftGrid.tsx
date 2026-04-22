import Image from "next/image";
import Link from "next/link";
import { gifts } from "@/lib/gifts";

function GiftCard({ gift }: { gift: (typeof gifts)[0] }) {
  return (
    <article className="group card-base overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-white">
        <Image
          src={gift.image}
          alt={gift.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Priority badge */}
        {gift.priority === "high" && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-vinho text-cream font-poppins text-[10px] uppercase tracking-widest font-semibold">
            Top desejo
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-vinho transition-colors duration-200">
          {gift.name}
        </h3>
        <p className="font-poppins text-navy/60 text-sm leading-relaxed mb-6 flex-1">
          {gift.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-navy/10 mb-6" />

        {/* Buttons */}
        <div className="flex flex-col gap-2.5">
          <Link
            href={gift.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-vinho text-cream font-poppins text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-red-accent hover:shadow-vinho"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 opacity-80"
            >
              <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-4.457.57c-3.413 0-6.468-.788-9.163-2.363-.277-.16-.35-.316-.197-.48l.13-.013zm6.86-6.905a6.716 6.716 0 001.564 4.715 6.587 6.587 0 005.175 2.35 6.498 6.498 0 003.808-1.206 6.72 6.72 0 002.423-3.204 6.58 6.58 0 00.206-3.524c-.313-1.35-1.015-2.498-2.085-3.416L13.02 1.38a.54.54 0 00-.526-.166.528.528 0 00-.378.397L10.79 6.61a.525.525 0 01-.527.398l-2.52-.052a.53.53 0 00-.538.53v4.63z" />
            </svg>
            Comprar na Amazon
          </Link>

          <Link
            href={gift.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-navy/20 text-navy font-poppins text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:border-navy hover:bg-navy hover:text-cream"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 opacity-80"
            >
              <path d="M7.5 2.25a.75.75 0 01.75.75v.75h7.5V3a.75.75 0 011.5 0v.75h.75A2.25 2.25 0 0120.25 6v14.25A2.25 2.25 0 0118 22.5H6A2.25 2.25 0 013.75 20.25V6A2.25 2.25 0 016 3.75h.75V3a.75.75 0 01.75-.75zm6 6.75a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H13.5zm-3 0a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H10.5zm-3 3a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H7.5zm3 0a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H10.5zm3 0a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H13.5zm-3 3a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H10.5zm-3 0a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H7.5z" />
            </svg>
            Comprar na Shopee
          </Link>
        </div>
      </div>
    </article>
  );
}

interface GiftGridProps {
  limit?: number;
}

export function GiftGrid({ limit }: GiftGridProps) {
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

        <h2 className="section-heading">Nossos Desejos para a Casa Nova</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedGifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>

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
