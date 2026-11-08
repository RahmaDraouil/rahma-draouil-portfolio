import { motion } from 'framer-motion'

const Skills = () => {
  const technicalSkills = {
    'Langages de programmation': ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'PHP', 'SQL'],
    'Frameworks & Libraries': ['Spring Boot', 'Node.js', 'Angular', 'React.js', 'Flask', 'Symfony', 'Express.js'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Terraform', 'AWS'],
    'Intelligence Artificielle': ['TensorFlow', 'Keras', 'Scikit-learn', 'CNN', 'Machine Learning', 'Deep Learning', 'MLflow'],
    'Bases de données': ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
    'Architecture': ['Microservices', 'API REST', 'IoT', 'Architecture distribuée'],
    'Monitoring & Sécurité': ['Prometheus', 'Grafana', 'Trivy', 'SAST', 'DevSecOps'],
    'Outils': ['Git', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Jira'],
  }

  const languages = [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ]

  const softSkills = [
    'Travail en équipe',
    'Résolution de problèmes',
    'Communication',
    'Adaptabilité',
    'Autonomie',
    'Créativité',
    'Gestion du temps',
    'Esprit d\'analyse',
  ]

  return (
    <section id="competences" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-8"
          >
            Compétences techniques
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-md shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Langues
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">
                      {lang.name}
                    </span>
                    <span className="text-sm text-gray-300">
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Compétences professionnelles
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-4 rounded-lg shadow-md text-center border border-gray-700"
                >
                  <span className="text-white font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
