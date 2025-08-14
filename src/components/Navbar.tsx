import { useState } from 'react'
import { Briefcase, Layers, Mail, Menu, MessageSquare, Star, User, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Testimonials", href: "#testimonials", icon: Star },
  { label: "Contact", href: "#contact", icon: Mail }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full sticky top-0 z-40 bg-white/70 backdrop-blur-sm shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-heading font-bold text-lg text-primary-700">
          <span className="inline-block rounded-full bg-primary-500 p-2">
            <User className="text-white w-5 h-5" />
          </span>
          Seth Jensen
        </a>
        <div className="hidden md:flex items-center gap-5">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-primary-700 hover:text-primary-500 font-medium px-2 py-1 transition-colors"
              aria-label={label}
            >
              <Icon className="w-4 h-4" aria-hidden />
              {label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary-100 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {/* Mobile Nav */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-2 md:hidden animate-fade-in">
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 px-5 py-2 text-primary-700 hover:text-primary-500 font-medium"
                aria-label={label}
                onClick={() => setOpen(false)}
              >
                <Icon className="w-4 h-4" aria-hidden />
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}