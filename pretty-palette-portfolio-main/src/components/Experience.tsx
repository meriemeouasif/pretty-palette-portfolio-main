import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Stage en Site WordPress",
    company: "OneClick",
    location: "Marrakech",
    project: "Site web Labahia Store",
    tasks: [
      "Création et ajout d'articles de blog",
      "Intégration et mise à jour les produits du site",
      "Participation à la conception et à l'organisation des pages",
      "Amélioration de l'expérience utilisateur"
    ]
  },
  {
    title: "Stage en développement full-stack",
    company: "Amr Tech solution",
    location: "Casablanca",
    period: "Mai 2025",
    project: "Application web de gestion des chèques",
    tasks: [
      "Développement d'une application web de gestion des chèques",
      "Gestion des chèques émis et reçus",
      "Enregistrement des transactions et suivi des échéances",
      "Interface simple et intuitive"
    ],
    technologies: ["Laravel", "Bootstrap", "JavaScript", "MySQL"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Parcours</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Mon <span className="gradient-text">Expérience</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} className="text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    {exp.period && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-primary font-medium mb-1">{exp.company} — {exp.location}</p>
                  <p className="text-muted-foreground mb-4">Projet: {exp.project}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-foreground rounded-lg text-sm hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;