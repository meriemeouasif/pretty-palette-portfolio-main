import { Mail, MapPin, Phone, Github, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-600" />
        
        {/* Grid pattern */}
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img 
                    src={profilePhoto} 
                    alt="Merieme Ouasif"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-foreground">Disponible</span>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm animate-fade-in-up">
              Développeuse Full Stack
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Merieme{" "}
              <span className="gradient-text">Ouasif</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
             Développeuse Full Stack passionnée par le développement web et les nouvelles technologies.
Expérimentée dans la création de sites web dynamiques et d’applications web, avec une bonne
maîtrise du front-end et du back-end. Motivée, curieuse et rigoureuse, je cherche à contribuer à
des projets innovants et à développer mes compétences en environnement professionnel.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up animation-delay-400">
              {["React", "Laravel", "TypeScript", "Tailwind"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-sm text-foreground hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-600">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
              >
                Me Contacter
              </a>
              <a 
                href="https://github.com/meriemeouasif" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass rounded-full font-semibold flex items-center gap-2 hover:bg-primary/10 transition-all hover:-translate-y-1"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 animate-fade-in-up animation-delay-600">
              <a href="mailto:ouasifmerieme@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
                <span className="text-sm">ouasifmerieme@gmail.com</span>
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span className="text-sm">Casablanca, Maroc</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;