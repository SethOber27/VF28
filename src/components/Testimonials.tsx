import { Card } from './ui/Card'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Emily R.",
    role: "Director of Customer Success, Acme SaaS Co.",
    text: "Seth is a rare find—he brings empathy, business acumen, and leadership to every customer engagement. Our retention rates have never been higher.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=facearea"
  },
  {
    name: "Carlos T.",
    role: "VP of Product, BrightPath Software",
    text: "Working with Seth changed how our team thinks about customer experience. He built processes that scaled as we grew from 10 to 100+ clients.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=facearea"
  },
  {
    name: "Miriam S.",
    role: "Customer",
    text: "Seth made our onboarding seamless and was always there to answer questions. He genuinely cares about customer success.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=facearea"
  }
]

export function Testimonials() {
  return (
    <section className="py-10" id="testimonials">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-6 flex items-center gap-2">
        <Star className="w-6 h-6 text-primary-500" aria-hidden />
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="flex flex-col items-center text-center gap-3 h-full">
              <img
                src={t.avatar}
                alt={`Avatar of ${t.name}`}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary-100 shadow"
                onError={e => (e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%236366f1'/%3E%3Ctext x='32' y='40' font-family='Arial' font-size='20' fill='white' text-anchor='middle'%3E%3F%3C/text%3E%3C/svg%3E")}
              />
              <p className="text-primary-700 text-base">"{t.text}"</p>
              <div className="mt-2 flex flex-col items-center gap-1">
                <span className="font-semibold text-primary-900">{t.name}</span>
                <span className="text-primary-600 text-xs">{t.role}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}