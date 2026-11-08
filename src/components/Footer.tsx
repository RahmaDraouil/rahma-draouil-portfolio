import { Github, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Rahma Draouil</p>
            <p className="text-sm text-blue-200">
              Élève ingénieure en génie logiciel
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RahmaDraouil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rahmadraouil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-blue-200">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Rahma Draouil. Tous droits réservés. 
            <span className="flex items-center gap-1">
              Créé avec <Heart size={14} className="text-accent" fill="currentColor" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
