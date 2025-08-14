import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const AVATAR_URL =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center min-h-[60vh] py-12" id="#">
      <motion.img
        src={AVATAR_URL}
        alt="Seth Jensen portrait"
        className="w-32 h-32 rounded-full shadow-xl border-4 border-primary-200 object-cover mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        onError={e => (e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='64' fill='%236366f1'/%3E%3Ctext x='64' y='74' font-family='Arial' font-size='48' fill='white' text-anchor='middle' font-weight='bold'%3ESJ%3C/text%3E%3C/svg%3E")}
      />
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-3 flex items-center justify-center gap-2">
        <Sparkles className="w-7 h-7 text-primary-500 animate-bounce" />
        Seth Jensen
      </h1>
      <h2 className="text-lg md:text-xl font-medium text-primary-700 mb-4">
        Customer Success Manager | Enabling Business Growth through People & Process
      </h2>
      <p className="max-w-xl text-primary-800 mb-5 text-base md:text-lg">
        Passionate about building lasting customer relationships, driving adoption, and creating value at every touchpoint. With a decade of experience in SaaS, onboarding, and account management, I help companies succeed by championing both customers and teams.
      </p>
      <div className="flex gap-4 justify-center mt-2">
        <a
          href="https://www.linkedin.com/in/sethjensen27/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-full p-2 shadow transition"
        >
          <Linkedin className="w-5 h-5" aria-hidden />
        </a>
        <a
          href="https://github.com/SethJensen27"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-full p-2 shadow transition"
        >
          <Github className="w-5 h-5" aria-hidden />
        </a>
        <a
          href="#contact"
          aria-label="Email"
          className="inline-flex items-center justify-center bg-primary-100 hover:bg-primary-200 text-primary-800 rounded-full p-2 shadow transition"
        >
          <Mail className="w-5 h-5" aria-hidden />
        </a>
      </div>
    </section>
  )
}