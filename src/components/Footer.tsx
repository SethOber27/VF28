import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-primary-100 bg-white/70 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-700">
        <div>
          <span className="font-bold">Seth Jensen</span> &mdash; Customer Success Manager
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sethjensen27/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-full p-2 transition"
          >
            <Linkedin className="w-5 h-5" aria-hidden />
          </a>
          <a
            href="https://github.com/SethJensen27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-full p-2 transition"
          >
            <Github className="w-5 h-5" aria-hidden />
          </a>
          <a
            href="#contact"
            aria-label="Email"
            className="inline-flex items-center justify-center bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-full p-2 transition"
          >
            <Mail className="w-5 h-5" aria-hidden />
          </a>
        </div>
        <div className="text-xs text-primary-400">
          &copy; {new Date().getFullYear()} Seth Jensen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}