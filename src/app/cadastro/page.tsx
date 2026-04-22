import type { Metadata } from "next";
import { RegisterForm } from "@/components/forms/RegisterForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadastro · Chá de Casa Nova — Kaio & Yas",
  description: "Crie sua conta para acessar a área de convidados.",
};

export default function CadastroPage() {
  return (
    <section className="min-h-screen bg-gradient-navy noise-overlay flex items-center justify-center relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-accent/10 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-vinho/10 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #669BBC 0, #669BBC 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16">
        {/* Logo / Brand */}
        <div className="text-center mb-12 animate-fade-in">
          <Link href="/" className="inline-flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center bg-vinho/30 border border-cream/20 group-hover:bg-vinho/50 transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-cream">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <span className="font-playfair text-cream text-2xl font-semibold">
              Kaio & Yas
            </span>
          </Link>

          <div className="mt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-sky-accent/40" />
              <span className="font-poppins text-xs text-sky-accent/60 uppercase tracking-[0.25em]">
                Novo por Aqui?
              </span>
              <div className="h-px w-8 bg-sky-accent/40" />
            </div>
            <h1 className="font-playfair text-3xl font-bold text-cream">
              Crie sua conta
            </h1>
            <p className="font-poppins text-cream/50 text-sm mt-2">
              Cadastre-se para acessar a lista de presentes completa
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-modal p-8 md:p-10 relative animate-fade-in-up delay-100">
          {/* Corner ornaments */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-sky-accent/30 -translate-x-px -translate-y-px" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-sky-accent/30 translate-x-px -translate-y-px" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-sky-accent/30 -translate-x-px translate-y-px" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-sky-accent/30 translate-x-px translate-y-px" />

          <style>{`
            .glass-modal .input-base {
              background-color: rgba(253,240,213,0.08);
              border-color: rgba(102,155,188,0.25);
              color: #FDF0D5;
            }
            .glass-modal .input-base::placeholder {
              color: rgba(253,240,213,0.3);
            }
            .glass-modal .input-base:focus {
              background-color: rgba(253,240,213,0.12);
              border-color: #669BBC;
            }
            .glass-modal .label-base {
              color: rgba(253,240,213,0.6);
            }
            .glass-modal .font-poppins.text-navy\\/60 {
              color: rgba(253,240,213,0.5);
            }
          `}</style>

          <RegisterForm />
        </div>

        {/* Back link */}
        <div className="text-center mt-8 animate-fade-in delay-300">
          <Link
            href="/"
            className="font-poppins text-xs text-cream/30 hover:text-cream/60 uppercase tracking-widest transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Voltar para o início
          </Link>
        </div>
      </div>
    </section>
  );
}
