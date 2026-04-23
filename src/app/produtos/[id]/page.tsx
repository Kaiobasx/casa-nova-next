import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gifts } from "@/lib/gifts";
import { ConfirmationForm } from "@/components/forms/ConfirmationForm"; // Importação nomeada que você usou
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// 1. A interface agora espera que params seja uma Promise
interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// 2. O componente agora é async
export default async function GiftDetailsPage({ params }: PageProps) {
    // 3. Fazemos o unwrap (await) da Promise antes de usar o ID
    const resolvedParams = await params;
    const gift = gifts.find((g) => g.id === parseInt(resolvedParams.id));

    if (!gift) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#FDF0D5] pt-20 pb-12">
            <Header/>
            <div className="section-wrapper">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Coluna da Esquerda: Imagem Editorial */}
                    <div className="relative aspect-square bg-white shadow-xl overflow-hidden group">
                        <Image
                            src={gift.image}
                            alt={gift.name}
                            fill
                            className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {gift.priority === "high" && (
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#780000] text-[#FDF0D5] font-poppins text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
                                Desejo Prioritário
                            </div>
                        )}
                    </div>

                    {/* Coluna da Direita: Informações e Ação */}
                    <div className="flex flex-col">
                        <div className="mb-8">
                            <span className="font-poppins text-xs text-[#780000] uppercase tracking-[0.3em] mb-4 block">
                                Kaio & Yas • Chá de Casa Nova
                            </span>
                            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#003049] leading-tight mb-6">
                                {gift.name}
                            </h1>
                            <p className="font-poppins text-[#003049]/70 text-lg leading-relaxed">
                                {gift.description}
                            </p>
                        </div>

                        {/* Divisor Estilizado */}
                        <div className="h-px w-full bg-[#003049]/10 mb-10" />

                        {/* Links Externos (Amazon/Shopee) - Estilo Minimalista */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href={gift.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center py-4 border border-[#003049]/20 font-poppins text-[11px] uppercase tracking-widest text-[#003049] hover:bg-[#003049] hover:text-[#FDF0D5] transition-all"
                            >
                                Ver na Amazon
                            </a>
                            <a
                                href={gift.shopeeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center py-4 border border-[#003049]/20 font-poppins text-[11px] uppercase tracking-widest text-[#003049] hover:bg-[#003049] hover:text-[#FDF0D5] transition-all"
                            >
                                Ver na Shopee
                            </a>
                        </div>

                        {/* Seção de Confirmação (Glassmorphism) */}
                        <div className="bg-white/40 backdrop-blur-md border border-white/20 p-8 shadow-inner">
                            <h2 className="font-playfair text-2xl text-[#003049] mb-6">
                                Vou presentear com este item
                            </h2>
                            {/* Passando os dados dinâmicos para o seu Client Component */}
                            <ConfirmationForm giftId={gift.id} giftName={gift.name} />
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </main>
    );
}