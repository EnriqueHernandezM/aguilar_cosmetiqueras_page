import { Sparkles, Shield, Scissors, Palette } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Atención al detalle", desc: "Cada pieza es revisada para asegurar la máxima calidad." },
  { icon: Shield, title: "Materiales de alta calidad", desc: "Materiales resistentes cierres y herrajes duraderos en cada cosmetiquera." },
  { icon: Scissors, title: "Costuras reforzadas", desc: "Fabricadas con hilo sintético resistente que no se deshilacha y garantiza mayor durabilidad." },
  { icon: Palette, title: "Colores tendencia", desc: "Paleta de colores muy variada." },
  { icon: Palette, title: "Variedad de colores", desc: "Disponibles en múltiples colores para adaptarse a tu evento, marca o negocio." },
];

const FeaturesSection = () => {
  return (
    <section className="py-10 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 ">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">¿Por qué elegirnos?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Calidad que se <span className="text-gradient">nota</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-rose-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-muted-foreground text-lg max-w-2xl mx-auto">Fabricantes y distribuidores a mayoreo con envíos a todo México y entregas a domicilio.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
