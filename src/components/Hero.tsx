import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projets')
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-accent/85 z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-accent/30 backdrop-blur-sm rounded-full text-sm font-medium"
            >
              À la recherche d'un stage PFE
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Rahma Draouil
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 text-blue-100">
              Élève ingénieure en génie logiciel
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Full-Stack • DevOps • Cloud • Intelligence artificielle
            </p>
            
            <p className="text-base md:text-lg mb-8 text-blue-50 max-w-2xl">
              Étudiante en 3e année du cycle ingénieur en informatique à ESPRIT, spécialisée en génie logiciel. 
              Passionnée par l'IA et maîtrisant le développement full-stack (Spring Boot, Node.js, Angular, React), 
              l'architecture microservices et les pratiques DevOps.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Voir mes projets
                <ArrowDown size={20} />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/documents/CV_Rahma_Draouil.pdf"
                download
                className="px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Télécharger mon CV
              </motion.a>
            </div>
            
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/RahmaDraouil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/rahmadraouil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl blur-2xl opacity-30" />
              <img
                src="/images/photo-rahma.png"
                alt="Photo professionnelle de Rahma Draouil"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  if (img.src.includes('.png')) {
                    img.src = '/images/photo-rahma.jpg'
                  } else {
                    img.src = '/images/profile-placeholder.svg'
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ArrowDown className="text-white" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero
