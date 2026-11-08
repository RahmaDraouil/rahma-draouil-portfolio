import { motion } from 'framer-motion'
import { Code2, Cloud, Brain, Network } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Développement full-stack',
      description: 'Spring Boot, Node.js, Angular, React.js, Flask et Symfony',
    },
    {
      icon: <Cloud size={32} />,
      title: 'DevOps et Cloud',
      description: 'Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI/CD, Terraform et AWS',
    },
    {
      icon: <Brain size={32} />,
      title: 'Intelligence artificielle et MLOps',
      description: 'TensorFlow/Keras, Scikit-learn, CNN 1D, MLflow, Machine Learning et Deep Learning',
    },
    {
      icon: <Network size={32} />,
      title: 'Microservices et IoT',
      description: 'Architecture microservices, API REST, passerelles IoT, Prometheus et Grafana',
    },
  ]

  return (
    <section id="a-propos" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            À propos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/about-illustration.svg"
              alt="Illustration développement logiciel"
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300">
              Étudiante en 3e année du cycle ingénieur en informatique à ESPRIT, spécialisée en génie logiciel. 
              Passionnée par l'IA et maîtrisant le développement full-stack (Spring Boot, Node.js, Angular, React), 
              l'architecture microservices et les pratiques DevOps.
            </p>
            <p className="text-lg text-gray-300">
              Actuellement à la recherche d'un stage PFE.
            </p>
            <div className="pt-4">
              <p className="text-white font-semibold mb-2">
                📍 Tunis, Tunisie
              </p>
              <p className="text-white font-semibold mb-2">
                📞 +216 95 902 511
              </p>
              <p className="text-white font-semibold">
                ✉️ rahmadraouil2020@gmail.com
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
