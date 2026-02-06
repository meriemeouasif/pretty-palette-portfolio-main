import { Mail, Phone, MapPin, Github, Send, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a 
              href="tel:+212701758511"
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-white" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">Téléphone</p>
              <p className="font-semibold text-foreground">+212 701 758 511</p>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:ouasifmerieme@gmail.com"
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent to-magenta flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <p className="font-semibold text-foreground text-sm">ouasifmerieme@gmail.com</p>
            </a>
            
            {/* Location */}
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary to-purple flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">Adresse</p>
              <p className="font-semibold text-foreground">Casablanca, Maroc</p>
            </div>
          </div>
          
          {/* Social & CTA */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-6">Retrouvez-moi sur</h3>
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://github.com/meriemeouasif" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Github size={24} className="text-foreground" />
              </a>
              <a 
                href="mailto:ouasifmerieme@gmail.com"
                className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
              >
                <Mail size={24} className="text-foreground" />
              </a>
            </div>
            
            <a 
              href="mailto:ouasifmerieme@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
            >
              <Send size={18} />
              Envoyer un message
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Merieme Ouasif. Fait avec <Heart size={16} className="text-accent fill-accent" /> au Maroc
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;