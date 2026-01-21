import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = [
  {
    period: "2023-2025",
    degree: "Diplôme de technicien spécialisé",
    field: "Développement Digital option Web Full Stack",
    school: "CFPMS Tit Mellil"
  },
  {
    period: "2022-2023",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    school: "Lycée Ibn Batuta"
  }
];

const certificates = [
  { title: "JavaScript Application Programming", issuer: "Alison" },
  { title: "Data Analytics - Mining and Analysis of Big Data", issuer: "Alison" },
  { title: "Diploma in Python Programming", issuer: "Alison" }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Parcours Académique</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Formation & <span className="gradient-text">Certificats</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Éducation</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group"
                >
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm font-medium mb-3">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-2">{edu.field}</p>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certificates */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-magenta flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certificats</h3>
            </div>
            
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1 text-sm">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;