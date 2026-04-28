import { ArrowUp, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [atModelos, setAtModelos] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("modelos");
      if (section) {
        const rect = section.getBoundingClientRect();
        setAtModelos(rect.top <= 100 && rect.bottom > 100);
      }

      // 👇 detecta scroll para animación del logo
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atModelos) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-0 md:py-1 px-4 md:px-10">
        {/* Logo */}
        <img
          src={logo}
          alt="Aguilar Cosmetiqueras"
          className={`
            object-contain transition-all duration-300
${scrolled ? "h-[78px] md:h-[87px]" : "h-[110px] md:h-[120px]"}
            `}
        />

        {/* Button */}
        <button onClick={handleClick} className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
          {atModelos ? (
            <>
              <ArrowUp className="w-4 h-4" />
              Subir
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Ver modelos
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
