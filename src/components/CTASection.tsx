import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/521234567890?text=Hola%2C%20me%20interesan%20sus%20cosmetiqueras";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-primary rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">¿Lista para ordenar?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">Escríbenos por WhatsApp y recibe atención personalizada. Precios especiales a mayoreo.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-float"
            >
              <MessageCircle className="w-6 h-6" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
