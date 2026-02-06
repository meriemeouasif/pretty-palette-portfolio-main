import { Code, Database, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Langages",
    skills: ["Python", "PHP", "JavaScript", "HTML", "CSS", "TypeScript"],
    color: "from-primary to-cyan"
  },
  {
    icon: Database,
    title: "Frameworks",
    skills: ["Laravel", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
    color: "from-accent to-magenta"
  },
  
  {
    icon: Wrench,
    title: "Outils",
    skills: ["GitHub", "VSCode", "XAMPP", "WordPress"],
    color: "from-secondary to-purple"
  },
  {
    icon: Globe,
    title: "Langues",
    skills: ["Arabe (Maternelle)", "Français (Intermédiaire)", "Anglais (Intermédiaire)"],
    color: "from-green-400 to-emerald-500"
  }
];

const Skills = () => {
  return (
    <section id="competences" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-muted text-foreground rounded-xl text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;