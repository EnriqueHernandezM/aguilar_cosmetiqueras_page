const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Aguilar Cosmetiqueras. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
