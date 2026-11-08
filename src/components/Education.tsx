import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Cycle ingénieur en Informatique',
      school: 'ESPRIT - École Supérieure Privée d\'Ingénierie et de Technologies',
      specialization: 'Génie Logiciel',
      period: '2023 - 2026',
      location: 'Tunis, Tunisie',
    },
    {
      degree: 'Cycle préparatoire intégré',
      school: 'ESPRIT',
      specialization: 'Sciences et Technologies',
      period: '2021 - 2023',
      location: 'Tunis, Tunisie',
    },
    {
      degree: 'Baccalauréat',
      school: 'Lycée',
      specialization: 'Sciences Informatiques',
      period: '2021',
      location: 'Tunisie',
    },
  ]

  return (
    <section id="formation" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Formation
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold text-blue-400 mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-300 mb-3">
                    {edu.specialization}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
