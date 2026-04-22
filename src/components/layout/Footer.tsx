import Link from "next/link";

const footerLinks = [
  { href: "/#sobre", label: "Sobre Nós" },
  { href: "/produtos", label: "Lista de Presentes" },
  { href: "/#pix", label: "Contribuir com PIX" },
  { href: "/#confirmacao", label: "Confirmar Presença" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy noise-overlay relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-accent to-transparent opacity-40" />

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-vinho/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-sky-accent/5 translate-x-1/4 translate-y-1/4" />

      <div className="section-wrapper relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-vinho/30 border border-cream/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 text-cream"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <div>
                <p className="font-playfair text-cream text-xl font-semibold leading-none">
                  Kaio & Yas
                </p>
                <p className="font-poppins text-cream/50 text-xs uppercase tracking-widest mt-0.5">
                  Chá de Casa Nova
                </p>
              </div>
            </div>
            <p className="font-poppins text-cream/60 text-sm leading-relaxed max-w-xs">
              Um novo capítulo começa. Obrigados por fazerem parte da nossa
              história e desse momento tão especial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-poppins text-cream/50 text-xs uppercase tracking-widest mb-6">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / PIX */}
          <div>
            <h4 className="font-poppins text-cream/50 text-xs uppercase tracking-widest mb-6">
              PIX Rápido
            </h4>
            <div className="bg-white/5 border border-cream/10 p-5">
              <p className="font-poppins text-xs text-cream/50 uppercase tracking-wider mb-1">
                Chave PIX (Celular)
              </p>
              <p className="font-playfair text-cream text-lg font-medium">
                11 976277421
              </p>
              <p className="font-poppins text-xs text-cream/50 mt-2">
                Kaio Vinicius · Santander
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-cream/40 text-xs">
            &copy; 2025 Chá de Casa Nova de Kaioba e Yas. Todos os direitos reservados.
          </p>
          <p className="font-poppins text-cream/30 text-xs">
            Feito com{" "}
            <span className="text-vinho-light" aria-label="amor">
              ♥
            </span>{" "}
            para um novo lar
          </p>
        </div>
      </div>
    </footer>
  );
}
