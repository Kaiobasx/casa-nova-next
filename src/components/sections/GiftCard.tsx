import Image from "next/image";
import Link from "next/link";
import { Gift } from "@/lib/gifts"; // Ajuste o caminho se necessário

export function GiftCard({ gift }: { gift: Gift }) {
    return (
        <article className="group card-base overflow-hidden flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
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
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#780000] text-[#FDF0D5] font-poppins text-[10px] uppercase tracking-widest font-semibold">
                        Top desejo
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#003049] mb-3 group-hover:text-[#780000] transition-colors duration-200">
                    {gift.name}
                </h3>
                <p className="font-poppins text-[#003049]/60 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                    {gift.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-[#003049]/10 mb-6" />

                {/* Único Botão de Ação */}
                <div className="flex flex-col">
                    <Link
                        href={`/produtos/${gift.id}`}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#780000] text-[#FDF0D5] font-poppins text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-[#C1121F] hover:shadow-lg"
                    >
                        Ver Detalhes do Item
                    </Link>
                </div>
            </div>
        </article>
    );
}