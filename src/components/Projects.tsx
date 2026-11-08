import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Plateforme e-learning avec architecture microservices',
      description: 'Plateforme complète d\'apprentissage en ligne avec gestion des cours, événements et clubs, orchestrée avec Kubernetes et intégrant des recommandations intelligentes.',
      image: '/images/projects/microservices-elearning.svg',
      technologies: ['Microservices', 'Kubernetes', 'CI/CD', 'IA', 'API REST'],
      highlights: [
        'Architecture microservices',
        'Orchestration avec Kubernetes',
        'Pipeline CI/CD',
        'Système de recommandations IA',
        'Supervision Prometheus/Grafana',
      ],
    },
    {
      title: 'Analyse de signaux ECG',
      description: 'Application d\'analyse et de classification automatique de signaux ECG utilisant des réseaux de neurones convolutifs 1D pour la détection d\'anomalies cardiaques.',
      image: '/images/projects/ecg-analysis.svg',
      technologies: ['TensorFlow', 'CNN 1D', 'Python', 'Deep Learning', 'Keras'],
      highlights: [
        'Réseaux de neurones CNN 1D',
        'Classification automatique',
        'Détection d\'anomalies',
        'Visualisation des signaux',
        'Interface d\'analyse',
      ],
    },
    {
      title: 'Application mobile de recherche d\'emploi',
      description: 'Application mobile complète avec espace candidat pour la recherche d\'offres et espace recruteur pour la gestion des candidatures.',
      image: '/images/projects/job-search-mobile.svg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'API REST'],
      highlights: [
        'Interface candidat',
        'Espace recruteur',
        'Système de candidature',
        'Recherche d\'offres',
        'Gestion des profils',
      ],
    },
    {
      title: 'Makeria - Plateforme e-commerce',
      description: 'Plateforme e-commerce complète avec gestion des produits, panier d\'achat et intégration de paiement en ligne sécurisé.',
      image: '/images/projects/makeria-ecommerce.svg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      highlights: [
        'Catalogue de produits',
        'Panier d\'achat',
        'Paiement en ligne',
        'Gestion des commandes',
        'Interface responsive',
      ],
    },
  ]

  return (
    <section id="projets" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projets académiques
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/project-placeholder.svg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">
                    Points clés :
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
