import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-section bg-gradient-section noise-overlay relative overflow-hidden">
      {/* Large decorative letter */}
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <span className="font-playfair text-[20rem] font-bold text-navy/[0.03] leading-none">
          K
        </span>
      </div>

      <div className="section-wrapper relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="h-px w-10 bg-vinho/40" />
          <span className="font-poppins text-xs text-vinho/70 uppercase tracking-[0.3em]">
            Quem Somos
          </span>
          <div className="h-px w-10 bg-vinho/40" />
        </div>

        <h2 className="section-heading animate-fade-in">Sobre Nós</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative animate-fade-in-up order-2 lg:order-1">
            {/* Main image frame */}
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-none overflow-hidden shadow-editorial">
              <Image
                src="/img/89c5b1e0-f5f3-48c9-8568-76e212b91be5.jpg"
                alt="Kaio e Yas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>

            {/* Decorative border offset */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-sky-accent/30 -z-10 max-w-sm mx-auto lg:max-w-none" />

            {/* Corner accent */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-vinho/60" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 animate-fade-in-up delay-200">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8 italic leading-tight">
              "Um novo capítulo,<br /> um novo lar, a mesma história."
            </h3>

            <div className="space-y-6 font-poppins text-navy/70 text-base leading-relaxed">
              <p>
                Olá! Somos Kaio e Yas, e estamos super felizes e emocionados para
                começar nossa nova jornada em nosso lar. Cada detalhe da nossa casa
                nova está sendo pensado com muito carinho, e gostaríamos de
                compartilhar essa alegria com você.
              </p>
              <p>
                Criamos este site para facilitar a escolha de presentes e para que
                você possa nos ajudar a mobiliar e decorar nosso cantinho. Sua
                contribuição, seja ela qual for, será muito bem-vinda e fará uma
                grande diferença.
              </p>
              <p>
                Agradecemos desde já o seu carinho e esperamos vê-lo(a) em nosso
                Chá de Casa Nova!
              </p>
            </div>

            {/* Signature-style detail */}
            <div className="mt-10 pt-8 border-t border-navy/10 flex items-center gap-4">
              <div>
                <p className="font-playfair text-2xl text-navy italic">
                  Kaio & Yas
                </p>
                <p className="font-poppins text-sm text-navy/50 uppercase tracking-widest mt-1">
                  Com muito amor ♥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
