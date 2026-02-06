import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "SmileCare",
    subtitle: "Centre Dentaire",
    description: "Site web moderne avec interface responsive pour un centre dentaire.",
    features: ["Pages multiples", "Prise de rendez-vous", "Design accessible"],
    technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "from-primary to-cyan"
  },
  {
    title: "Allo Amego",
    subtitle: "Restaurant",
    description: "Site web du restaurant avec menu interactif et galerie.",
    features: ["Menu dynamique", "Galerie photos", "Responsive design"],
    technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "from-accent to-magenta"
  },
  {
    title: "Orientation",
    subtitle: "Étudiants",
    description: "Plateforme d'orientation avec calcul de score pondéré.",
    features: ["Recommandations", "Calcul automatique", "Interface intuitive"],
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    color: "from-secondary to-purple"
  }
];

const Projects = () => {
  return (
    <section id="projets" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Mes <span className="gradient-text">Projets</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute top-4 right-4">
                  <Folder size={32} className="text-white/50" />
                </div>
                <div className="absolute bottom-4 left-6">
                  <p className="text-white/70 text-sm">{project.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="text-xs text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;