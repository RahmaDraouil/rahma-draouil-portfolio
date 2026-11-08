import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      image: '/images/certifications/aws-cloud.svg',
      description: 'Fondamentaux de l\'infrastructure Cloud AWS',
    },
    {
      title: 'Hedera Certified Developer Associate',
      issuer: 'Hedera',
      image: '/images/certifications/hedera-developer.svg',
      description: 'Développement sur la plateforme Hedera',
    },
    {
      title: 'Hedera Certified Foundations',
      issuer: 'Hedera',
      image: '/images/certifications/hedera-foundations.svg',
      description: 'Fondamentaux de la technologie Hedera',
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications et badges
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-700"
            >
              <div className="h-64 flex items-center justify-center p-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6 border-t border-gray-700">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-300">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400 italic">
            Note : Les illustrations sont des créations personnalisées représentant les domaines de certification
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
