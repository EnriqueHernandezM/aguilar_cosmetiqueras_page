import aboutImg from "../assets/image1.png";

const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-float">
            <img src={aboutImg} alt="Taller de Aguilar Cosmetiqueras" loading="lazy" width={1200} height={800} className="w-full h-[400px] object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">Nuestra historia</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Sobre <span className="text-gradient">nosotros</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Somos una empresa familiar mexicana con más de 10 años de experiencia en la fabricación de cosmetiqueras de alta calidad. Cada producto es elaborado con dedicación, cuidando cada detalle para ofrecer un
              acabado premium.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabajamos directamente con mayoristas, revendedores y emprendedoras que buscan productos confiables para hacer crecer su negocio. Envíos a todo México con entregas a domicilio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
