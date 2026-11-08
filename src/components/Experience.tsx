import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Stage ingénieur',
      company: 'Sofiatech',
      location: 'Tunis',
      year: '2026',
      description: 'Conception et déploiement automatisé d\'une solution IoT intelligente de prévision météorologique reposant sur les pratiques DevOps, MLOps et DevSecOps.',
      achievements: [
        'Développement avec Python, Flask et l\'API Open-Meteo',
        'Suivi et industrialisation du modèle avec MLflow',
        'Provisionnement de l\'infrastructure AWS avec Terraform',
        'Mise en place initiale du pipeline avec GitHub Actions',
        'Migration vers GitLab CI/CD',
        'Déploiement automatisé sur une passerelle IoT',
        'Conteneurisation avec Docker',
        'Analyse des images avec Trivy',
        'Contrôles SAST et détection des secrets',
        'Supervision avec Prometheus et Grafana',
      ],
      technologies: 'Python, Flask, Open-Meteo, MLflow, AWS, Terraform, Docker, GitHub Actions, GitLab CI/CD, Trivy, Prometheus, Grafana',
    },
    {
      title: 'Stage d\'initiation',
      company: 'Nexans Autoelectric Tunisia',
      location: 'Tunis',
      year: '2025',
      description: 'Découverte de l\'organisation, des outils et des processus techniques propres à un environnement informatique industriel.',
      achievements: [],
      technologies: '',
    },
    {
      title: 'Stage de fin d\'études en développement full-stack',
      company: '2B-Infosys Tunisia',
      location: 'Tunis',
      year: '2024',
      description: 'Conception et développement d\'une plateforme web de gestion des tickets destinée au suivi des demandes de maintenance d\'un parc informatique.',
      achievements: [
        'Développement de l\'interface avec Angular',
        'Développement du back-end avec Spring Boot',
        'Mise en place d\'API REST',
      ],
      technologies: 'Angular, Spring Boot, API REST',
    },
    {
      title: 'Stage en développement web',
      company: 'Aures Group',
      location: 'Tunis',
      year: '2023',
      description: 'Conception et développement d\'une application web intelligente de gestion des tâches.',
      achievements: [],
      technologies: 'React.js, Node.js',
    },
  ]

  return (
    <section id="experiences" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Expériences professionnelles
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-8 w-4 h-4 bg-primary rounded-full border-4 border-gray-900" />
              
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-gray-300 text-sm mb-2">
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">
                        Réalisations :
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.technologies && (
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold">Technologies : </span>
                        {exp.technologies}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
