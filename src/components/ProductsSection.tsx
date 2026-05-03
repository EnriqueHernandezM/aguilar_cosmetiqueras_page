import { useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X, Palette } from "lucide-react";
import barcoDoradoFrente from "../assets/barco_dorada_frente.png";
import barcoDoradoLateral from "../assets/barco-dorado-lateral.png";
import barcoDoradoSuperior from "../assets/barco-dorada-superior.png";

import barcoRosaPinkFrente from "../assets/barco-rosa-pink-frente.png";
import barcoRosaPinkLateral from "../assets/barco-rosa-pink-lateral.png";
import barcoRosaPinkSuperior from "../assets/barco-rosa-pink-superior.png";

import barcoVerdeMentaeFrente from "../assets/barco-verde-menta-frente.png";
import barcoVerdeMentaLatera from "../assets/barco-verde-mente-lateral.png";
import barcoVerdeMentaSuperior from "../assets/barco-verde-mente-superior.png";

import barcoLilaOrquideaFrente from "../assets/barco-lila-orquidea-frente.png";
import barcoLilaOrquideaLateral from "../assets/barco-laila-orquide-lateral.png";
import barcoLilaOrquideaSuperior from "../assets/barco-lila-orquidea-superior.png";

import redondaLilaOrquidia from "../assets/lila-orquidia.png";
import redondaLilaOrquidiaLateral from "../assets/lila-orquidia-lateral.png";
import redondaLilaOrquidiaSuperior from "../assets/lila-orquidia-superior.png";

import redondaVerdeManzanaFrente from "../assets/redonda-verde-manzana-frente.png";
import redondaVerdeManzanaLateral from "../assets/redonda-verde-manzana-lateral.png";
import redondaVerdeManzanaSuperior from "../assets/redonda-verde-manzana-superior.png";

import redondaAmarillaFrente from "../assets/redonda-amarilla-frente.png";
import redondaAmarillaLateral from "../assets/redonda-amarilla-lateral.png";

import cuadradaRosaFrente from "../assets/cuadrada-rosa-aperlado.png";
import cuadradaRosaLateral from "../assets/cuadrada-rosa-lateral.png";
import cuadradaRosaSuperior from "../assets/cuadrada-rosa-superior.png";

import cuadradaGrisFrente from "../assets/cuadrada-gris-frente.png";
import cuadradaGrisLateral from "../assets/cuadrada-gris-lateral.png";
import cuadradaGrisSuperior from "../assets/cuadrada-gris-superior.png";

import cuadradaPerlaFrente from "../assets/cuadrada-perla-frente.png";
import cuadradaPerlaLateral from "../assets/cuadrada-perla-lateral.png";
import cuadradaPerlaSuperior from "../assets/cuadrada-perla-superior.png";

import cuadradaRojaFrente from "../assets/cuadrada-roja-frente.png";
import cuadradaRojaLateral from "../assets/cuadrada-roja-lateral.png";
import cuadradaRojaSuperior from "../assets/cuadrada-roja-superior.png";

import personalizada1 from "../assets/personalizadas1.png";
import personalizada2 from "../assets/pesonalizadas2.png";

type ColorOption = {
  name: string;
  hex?: string;
  gradient?: string;
  gallery: string[];
};

const products: {
  name: string;
  dims: string;
  desc: string;
  colors: ColorOption[];
}[] = [
  {
    name: "Cosmetiquera Cuadrada",
    dims: "17 cm de largo × 9 cm de ancho x 8 cm de alto",
    desc: "Diseño compacto ideal para el día a día.",
    colors: [
      { name: "Rosa Perla", hex: "#E8B4B8", gallery: [cuadradaRosaFrente, cuadradaRosaLateral, cuadradaRosaSuperior] },
      { name: "Gris", hex: "#c0b9b1", gallery: [cuadradaGrisFrente, cuadradaGrisLateral, cuadradaGrisSuperior] },
      { name: "Perla", hex: "#dad2c7", gallery: [cuadradaPerlaFrente, cuadradaPerlaLateral, cuadradaPerlaSuperior] },
      { name: "Roja", hex: "#bd071d", gallery: [cuadradaRojaFrente, cuadradaRojaLateral, cuadradaRojaSuperior] },
    ],
  },
  {
    name: "Cosmetiquera Barco",
    dims: "23 cm de largo × 13 cm de alto",
    desc: "Amplio espacio ideal para viajes.",
    colors: [
      { name: "Oro rosado", hex: "#cda88e", gallery: [barcoDoradoFrente, barcoDoradoLateral, barcoDoradoSuperior] },
      { name: "Rosa pink", hex: "#d37ba3", gallery: [barcoRosaPinkFrente, barcoRosaPinkLateral, barcoRosaPinkSuperior] },
      { name: "Verde menta", hex: "#8cbba7", gallery: [barcoVerdeMentaeFrente, barcoVerdeMentaLatera, barcoVerdeMentaSuperior] },
      { name: "Lila orquidea", hex: "#ab94e2", gallery: [barcoLilaOrquideaFrente, barcoLilaOrquideaLateral, barcoLilaOrquideaSuperior] },
    ],
  },
  {
    name: "Cosmetiquera Redonda ",
    dims: "28 cm × 16 cm",
    desc: "Compartimentos internos y bolsillos con cierre. Organiza todo tu maquillaje.",
    colors: [
      { name: "Lila orquidea", hex: "#ab94e2", gallery: [redondaLilaOrquidia, redondaLilaOrquidiaLateral, redondaLilaOrquidiaSuperior] },
      { name: "Verde manzana", hex: "#8db62a", gallery: [redondaVerdeManzanaFrente, redondaVerdeManzanaLateral, redondaVerdeManzanaSuperior] },
      { name: "Amarilla", hex: "#d6aa16", gallery: [redondaAmarillaFrente, redondaAmarillaLateral] },
    ],
  },
  {
    name: "Personalizadas",
    dims: "28 cm × 16 cm",
    desc: "Compartimentos internos y bolsillos con cierre. Organiza todo tu maquillaje.",

    colors: [{ name: "Multicolor", gradient: "linear-gradient(135deg, #E6D5B8, #f1c27d, #d89c8a, #cdb4db, #bde0fe, #f3e7e4)", gallery: [personalizada2, personalizada1, personalizada2] }],
  },
];

const ANGLE_LABELS = ["Frente", "Lateral", "Superior"];

// ─── Materiales extra ─────────────────────────────────────────────────────────
// Para agregar más: añade { name, hex } al array.
// Cuando tengas imágenes reales agrega el campo `image: string` al tipo
// y reemplaza el div de color sólido con <img src={m.image} className="w-full h-full object-cover" />
type MaterialColor = { name: string; hex: string };
const materialColors: MaterialColor[] = [
  { name: "Rojo", hex: "#D94F4F" },
  { name: "Azul", hex: "#4F7ED9" },
  { name: "Naranja", hex: "#E8873A" },
];

const ProductsSection = () => {
  const [selectedColors, setSelectedColors] = useState<number[]>(() => products.map(() => 0));

  // Modal — "product" = vista cosmetiquera | "materials" = vista materiales
  const [modalOpen, setModalOpen] = useState(false);
  const [modalView, setModalView] = useState<"product" | "materials">("product");
  const [activeProduct, setActiveProduct] = useState(0);
  const [angleIndex, setAngleIndex] = useState(0);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  // Materiales
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null);
  const [zoomedMaterial, setZoomedMaterial] = useState<number | null>(null);

  // ── helpers ──────────────────────────────────────────────────────────────
  const setColorForProduct = (productIndex: number, colorIndex: number) => {
    setSelectedColors((prev) => {
      const next = [...prev];
      next[productIndex] = colorIndex;
      return next;
    });
  };

  const openModal = (productIndex: number) => {
    setActiveProduct(productIndex);
    setAngleIndex(0);
    setColorPickerOpen(false);
    setModalView("product");
    setZoomedMaterial(null);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setColorPickerOpen(false);
    setZoomedMaterial(null);
    document.body.style.overflow = "";
  };

  const goToMaterials = () => {
    setColorPickerOpen(false);
    setZoomedMaterial(selectedMaterial);
    setModalView("materials");
  };

  const goBackToProduct = () => {
    setModalView("product");
    setZoomedMaterial(null);
  };

  const navigateAngle = (dir: 1 | -1) => {
    const len = products[activeProduct].colors[selectedColors[activeProduct]].gallery.length;
    setAngleIndex((prev) => (prev + dir + len) % len);
  };

  const pickColor = (colorIdx: number) => {
    setColorForProduct(activeProduct, colorIdx);
    const newLen = products[activeProduct].colors[colorIdx].gallery.length;
    if (angleIndex >= newLen) setAngleIndex(0);
    setColorPickerOpen(false);
  };

  const pickMaterial = (idx: number) => {
    setSelectedMaterial(idx);
    setZoomedMaterial(idx);
  };

  const product = products[activeProduct];
  const activeColorIdx = selectedColors[activeProduct] ?? 0;
  const activeColor = product?.colors[activeColorIdx];
  const currentImage = activeColor?.gallery[angleIndex];

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Product Grid ─────────────────────────────────────────────────── */}
      <section id="modelos" className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Catálogo</p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Nuestros <span className="text-gradient">modelos</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((p, i) => {
              const colorIdx = selectedColors[i] ?? 0;
              const color = p.colors[colorIdx];
              return (
                <div
                  key={i}
                  className="group overflow-hidden rounded-3xl border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(250,240,235,0.96))] shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-float"
                >
                  <div className="relative overflow-hidden p-5">
                    <div className="absolute inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(243,228,220,0.86)_62%,rgba(237,220,212,0.68)_100%)]" />
                    <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(214,150,167,0.22)_0%,_rgba(214,150,167,0)_72%)]" />
                    <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(230,201,181,0.36)_0%,_rgba(230,201,181,0)_74%)]" />
                    <div className="product-frame relative aspect-square transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="product-frame__glow" />
                      <img onClick={() => openModal(i)} src={color.gallery[0]} alt={`${p.name} - ${color.name}`} loading="lazy" width={800} height={800} className="cursor-pointer product-frame__image p-6" />
                    </div>
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 onClick={() => openModal(i)} className=" cursor-pointer font-display text-2xl font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <span className="inline-block rounded-full bg-rose-light px-3 py-1 text-xs font-semibold text-primary">{p.dims}</span>
                    <div className="flex items-center gap-2 pt-1">
                      {p.colors.map((c, idx) => (
                        <button
                          key={idx}
                          onClick={() => setColorForProduct(i, idx)}
                          aria-label={`Color ${c.name}`}
                          title={c.name}
                          className={`h-6 w-6 rounded-full border transition-all ${idx === colorIdx ? "scale-110 border-transparent ring-2 ring-primary ring-offset-2 ring-offset-card" : "border-border hover:scale-105"}`}
                          style={{ background: c.gradient ? c.gradient : c.hex }}
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <button onClick={() => openModal(i)} className="  flex items-center gap-2 pt-1 text-lg font-medium text-primary transition-colors hover:text-primary/80">
                      <Camera className="h-4 w-4" />
                      Ver más fotos
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modal — un solo backdrop, dos vistas ─────────────────────────── */}
      {modalOpen && product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-in fade-in-0 duration-200" onClick={closeModal}>
          <div className="relative w-[90vw]  max-w-lg overflow-hidden rounded-3xl bg-card shadow-float animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            {/* ── VISTA A: Cosmetiquera ─────────────────────────────────── */}
            {modalView === "product" && (
              <>
                <button onClick={closeModal} className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <X className="h-4 w-4" />
                </button>

                <div className="relative p-5">
                  <div className="absolute inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,232,224,0.9)_60%,rgba(235,216,207,0.72)_100%)]" />
                  <div className="product-frame relative aspect-square">
                    <div className="product-frame__glow" />
                    <img key={currentImage} src={currentImage} alt={`${product.name} - ${activeColor.name} - ángulo ${angleIndex + 1}`} className="product-frame__image p-6" width={800} height={800} />
                  </div>

                  {/* LEFT AREA */}
                  <div onClick={() => navigateAngle(-1)} className="absolute left-0 top-0 h-full w-24 z-20 flex items-center justify-center cursor-pointer">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-lg hover:bg-white transition pointer-events-none">
                      <span className="text-2xl">‹</span>
                    </button>
                  </div>

                  {/* RIGHT AREA */}
                  <div onClick={() => navigateAngle(1)} className="absolute -right-8 top-0 h-full w-24 z-20 flex items-center justify-center cursor-pointer">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-lg hover:bg-white transition pointer-events-none">
                      <span className="text-2xl">›</span>
                    </button>
                  </div>

                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                    {angleIndex + 1} / {activeColor.gallery.length}
                  </span>
                </div>

                <div className="space-y-3 p-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{product.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-rose-light px-3 py-1 text-xs font-semibold text-primary">{product.dims}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {product.colors.map((c, idx) => (
                        <button
                          key={idx}
                          onClick={() => pickColor(idx)}
                          aria-label={`Color ${c.name}`}
                          title={c.name}
                          className={`h-6 w-6 rounded-full border transition-all ${idx === activeColorIdx ? "scale-110 border-transparent ring-2 ring-primary ring-offset-2 ring-offset-card" : "border-border hover:scale-105"}`}
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{activeColor.name}</span>
                    <button
                      onClick={goToMaterials}
                      className="hidden ml-auto items-center gap-1.5 rounded-full border border-primary/30 bg-rose-light/60 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-rose-light hover:border-primary/60"
                    >
                      <Palette className="h-3.5 w-3.5" />
                      Mostrar más materiales
                    </button>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${colorPickerOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="border-t border-border/50 bg-background/60 backdrop-blur-sm px-5 py-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Elige un color</p>
                    <div className="grid grid-cols-3 gap-3">
                      {product.colors.map((c, idx) => (
                        <button
                          key={idx}
                          onClick={() => pickColor(idx)}
                          className={`group/swatch relative flex flex-col items-center gap-2 rounded-2xl border-2 p-3 transition-all duration-200 ${idx === activeColorIdx ? "border-primary bg-rose-light/80 shadow-soft" : "border-border/40 bg-white/50 hover:border-primary/40 hover:bg-rose-light/40"}`}
                        >
                          <div className="relative h-20 w-full overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,232,224,0.9)_60%)]">
                            <img src={c.gallery[0]} alt={c.name} className="h-full w-full object-contain p-1.5" />
                            {idx === activeColorIdx && <div className="absolute inset-0 rounded-xl ring-2 ring-inset ring-primary/40" />}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-3.5 w-3.5 rounded-full border border-white/80 shadow-sm flex-shrink-0" style={{ backgroundColor: c.hex }} />
                            <span className="text-xs font-medium text-foreground">{c.name}</span>
                          </div>
                          {idx === activeColorIdx && <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white text-[9px]">✓</div>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 px-5 pb-5 pt-1">
                  {activeColor.gallery.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAngleIndex(idx)}
                      title={ANGLE_LABELS[idx] ?? `Ángulo ${idx + 1}`}
                      className={`overflow-hidden rounded-xl border-2 transition-all ${idx === angleIndex ? "border-primary shadow-soft" : "border-transparent opacity-60 hover:opacity-100"}`}
                    >
                      <div className="relative h-16 w-16 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.94),rgba(245,232,224,0.84)_64%,rgba(235,216,207,0.68)_100%)]">
                        <img src={src} alt={ANGLE_LABELS[idx] ?? `Ángulo ${idx + 1}`} className="h-full w-full object-contain p-2" />
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* ── VISTA B: Materiales ──────────────────────────────────── */}
            {modalView === "materials" && (
              <>
                {/* Header */}
                <div className="flex items-center gap-2 px-5 pt-5 pb-3">
                  <button onClick={goBackToProduct} aria-label="Volver" className="rounded-full bg-background/80 p-2 text-foreground transition-colors hover:bg-background">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <h3 className="font-display text-lg font-semibold text-foreground flex-1">Mostrar más materiales</h3>
                  <button onClick={goBackToProduct} className="rounded-full bg-background/80 p-2 text-foreground transition-colors hover:bg-background">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Preview grande */}
                <div className="relative mx-5 mb-4 overflow-hidden rounded-2xl aspect-square bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,232,224,0.9)_60%,rgba(235,216,207,0.72)_100%)]">
                  {zoomedMaterial !== null ? (
                    <div className="w-full h-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: materialColors[zoomedMaterial].hex }}>
                      {/* Reemplazar con <img src={materialColors[zoomedMaterial].image} className="w-full h-full object-cover" /> cuando haya imágenes */}
                      <span className="text-white/90 text-2xl font-semibold">{materialColors[zoomedMaterial].name}</span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted-foreground text-sm px-8 text-center">Selecciona un material para previsualizarlo</span>
                    </div>
                  )}
                </div>

                {/* Swatches */}
                <div className="flex flex-wrap gap-4 px-5 pb-6">
                  {materialColors.map((m, idx) => {
                    const isActive = zoomedMaterial === idx;
                    return (
                      <button key={idx} onClick={() => pickMaterial(idx)} className="flex flex-col items-center gap-1.5 group/mat" aria-label={m.name} title={m.name}>
                        <div
                          className={`h-14 w-14 rounded-2xl transition-all duration-200 ${isActive ? "ring-[3px] ring-primary ring-offset-2 scale-110 shadow-soft" : "ring-1 ring-border/50 hover:scale-105 hover:ring-primary/40"}`}
                          style={{ backgroundColor: m.hex }}
                        />
                        <span className={`text-[11px] font-medium ${isActive ? "text-primary" : "text-muted-foreground group-hover/mat:text-foreground"}`}>{m.name}</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsSection;
