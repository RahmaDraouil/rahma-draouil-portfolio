import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'rahmadraouil2020@gmail.com',
      link: 'mailto:rahmadraouil2020@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Téléphone',
      value: '+216 95 902 511',
      link: 'tel:+21695902511',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Localisation',
      value: 'Tunis, Tunisie',
      link: null,
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rahmadraouil',
      link: 'https://linkedin.com/in/rahmadraouil',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/RahmaDraouil',
      link: 'https://github.com/RahmaDraouil',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité de stage PFE ou pour discuter de projets intéressants.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">
                        {info.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-blue-400">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">
                        {info.label}
                      </p>
                      <p className="text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 bg-primary/10 rounded-2xl border border-primary/30">
              <p className="text-lg font-semibold text-white mb-2">
                À la recherche d'un stage PFE
              </p>
              <p className="text-gray-300">
                Disponible dès maintenant pour une durée de 4 à 6 mois
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
