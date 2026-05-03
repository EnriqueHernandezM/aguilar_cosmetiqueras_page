export default function CatalogSection() {
  return (
    <section className="w-full flex justify-center py-6 bg-[#f8f5f2]">
      <div className="w-full max-w-5xl px-6">
        <div className="bg-gradient-to-br from-[#f3e7e4] to-[#f8f5f2] rounded-3xl p-10 text-center shadow-sm border border-[#eaded9]">
          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5a3e36] mb-3">¿Quieres ver todo el catálogo?</h2>

          {/* Descripción */}
          <p className="text-[#7a5c52] mb-6 text-sm md:text-base max-w-2xl mx-auto">Descarga nuestro catálogo completo con todos los modelos, colores y detalles disponibles.</p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Descargar PDF */}
            <a href="/catalogo.pdf" download className="px-6 py-3 rounded-xl bg-[#d89c8a] text-white font-medium hover:bg-[#c48776] transition-all duration-200">
              Descargar catálogo
            </a>

            {/* Ver online */}
            <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-[#d89c8a] text-[#d89c8a] font-medium hover:bg-[#f3e7e4] transition-all duration-200">
              Ver catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
