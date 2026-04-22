"use client";

import { useState } from "react";

const PIX_KEY = "11 976277421";
const PIX_NAME = "Kaio Vinicius Carneiro de Oliveira";
const PIX_BANK = "Banco Santander";

export function PixContribution() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = PIX_KEY;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="pix"
      className="py-section bg-gradient-navy noise-overlay relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-vinho/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-accent/10 blur-3xl pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-10 bg-sky-accent/40" />
            <span className="font-poppins text-xs text-sky-accent/70 uppercase tracking-[0.3em]">
              Contribuição
            </span>
            <div className="h-px w-10 bg-sky-accent/40" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-cream mb-6 animate-fade-in">
            Contribua com <span className="italic text-sky-accent">PIX</span>
          </h2>

          <p className="font-poppins text-cream/60 text-base md:text-lg mb-14 leading-relaxed animate-fade-in">
            Se preferir nos ajudar com uma contribuição em dinheiro para os
            custos da casa nova, você pode fazer um PIX diretamente para nossa
            conta!
          </p>

          {/* PIX Card */}
          <div className="glass-modal p-8 md:p-12 text-left animate-fade-in-up">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-accent/20 border border-sky-accent/30">
                {/* PIX logo */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-accent">
                  <path d="M5.45 18.63a2.33 2.33 0 0 0 1.65-.68l3.58-3.57a.6.6 0 0 1 .84 0l3.59 3.58a2.33 2.33 0 0 0 1.65.68h.7l-4.52 4.52a2.52 2.52 0 0 1-3.56 0l-4.54-4.53h.61Zm13.1-13.26a2.33 2.33 0 0 0-1.65.68l-3.59 3.58a.59.59 0 0 1-.84 0L8.9 6.05a2.33 2.33 0 0 0-1.65-.68h-.61l4.54-4.53a2.52 2.52 0 0 1 3.56 0l4.52 4.52-.71.01Z" />
                  <path d="M1.19 9.64 3.6 7.23h1.85A1.56 1.56 0 0 1 6.5 7.7l3.58 3.58a1.37 1.37 0 0 0 1.94 0L15.6 7.7a1.56 1.56 0 0 1 1.1-.47h2.09l2.41 2.41a2.52 2.52 0 0 1 0 3.56l-2.41 2.41H16.7a1.56 1.56 0 0 1-1.1-.46l-3.58-3.58a1.38 1.38 0 0 0-1.94 0L6.5 15.15a1.56 1.56 0 0 1-1.05.43H3.6l-2.41-2.38a2.52 2.52 0 0 1 0-3.56Z" />
                </svg>
              </div>
              <div>
                <p className="font-poppins text-cream text-sm font-semibold uppercase tracking-wider">
                  Chave PIX
                </p>
                <p className="font-poppins text-cream/50 text-xs">
                  Celular · Banco Santander
                </p>
              </div>
            </div>

            {/* Key display */}
            <div className="bg-white/5 border border-sky-accent/20 p-5 mb-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-poppins text-cream/50 text-xs uppercase tracking-widest mb-1">
                  Chave PIX (Celular)
                </p>
                <p
                  id="pixKeyToCopy"
                  className="font-playfair text-2xl sm:text-3xl text-cream font-semibold tracking-wide"
                >
                  {PIX_KEY}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-5 py-3 font-poppins text-sm font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  copied
                    ? "bg-green-600/20 border-green-400/40 text-green-300"
                    : "bg-sky-accent/10 border-sky-accent/30 text-sky-accent hover:bg-sky-accent/20 hover:border-sky-accent/50"
                }`}
                aria-label="Copiar chave PIX"
              >
                {copied ? (
                  <>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Copiado!
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                    Copiar Chave
                  </>
                )}
              </button>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4">
                <p className="font-poppins text-cream/50 text-xs uppercase tracking-widest mb-1">
                  Nome Completo
                </p>
                <p className="font-poppins text-cream text-sm font-medium">
                  {PIX_NAME}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <p className="font-poppins text-cream/50 text-xs uppercase tracking-widest mb-1">
                  Instituição Financeira
                </p>
                <p className="font-poppins text-cream text-sm font-medium">
                  {PIX_BANK}
                </p>
              </div>
            </div>

            {/* Thank you note */}
            <div className="mt-8 text-center">
              <p className="font-playfair text-cream/60 text-lg italic">
                "Agradecemos imensamente seu apoio e carinho!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
