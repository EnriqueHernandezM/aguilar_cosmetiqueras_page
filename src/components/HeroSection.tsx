import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import product1 from "../assets/image1.png";
import product2 from "../assets/image2.png";
import product3 from "../assets/image3.png";

const WHATSAPP_URL = "https://wa.me/521234567890?text=Hola%2C%20me%20interesan%20sus%20cosmetiqueras";

const images = [product3, product1, product2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-10">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-rose-light/50 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/60 blur-3xl -z-10" />

      <div className="container mx-auto grid items-center gap-8 px-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Text */}
        <div className="space-y-8 opacity-0 animate-fade-up">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Premium · Fabricantes · Mayoreo
              <span className="hidden md:inline"> · México</span>
            </p>{" "}
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-foreground">
              Aguilar
              <br />
              <span className="text-gradient">Cosmetiqueras</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed"> Alta calidad y diseño para tu negocio, evento o marca. Fabricamos y distribuimos a mayoreo con envíos a todo México. </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-float hover:shadow-2xl"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir por WhatsApp
          </a>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center items-center h-[500px] opacity-0 animate-fade-up -mt-16" style={{ animationDelay: "0.3s" }}>
          {images.map((img, i) => {
            const isActive = i === current;
            const offset = (i - current + images.length) % images.length;
            return (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${offset === 0 ? 0 : offset === 1 ? 80 : -80}px) scale(${isActive ? 1 : 0.7}) translateY(${isActive ? 0 : 20}px)`,
                  zIndex: isActive ? 3 : 1,
                  opacity: isActive ? 1 : 0.5,
                }}
                onClick={() => setCurrent(i)}
              >
                <img src={img} alt={`Cosmetiquera modelo ${i + 1}`} width={400} height={400} className="w-100 h-80  md:w-80 md:h-64 object-center rounded-3xl shadow-float" />
              </div>
            );
          })}
          {/* Dots */}
          <div className="absolute bottom-8 flex gap-2 ">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-beige-dark"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
