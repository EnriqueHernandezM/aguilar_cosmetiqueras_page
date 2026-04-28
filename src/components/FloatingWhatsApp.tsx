import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/521234567890?text=Hola%2C%20me%20interesan%20sus%20cosmetiqueras";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-float hover:scale-110 transition-transform animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default FloatingWhatsApp;
