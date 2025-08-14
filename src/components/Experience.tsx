import { Card } from './ui/Card'
import { Briefcase } from 'lucide-react'

export interface ExperienceItem {
  company: string
  title: string
  period: string
  description: string
  logoUrl?: string
}

const experience: ExperienceItem[] = [
  {
    company: "Acme SaaS Co.",
    title: "Senior Customer Success Manager",
    period: "2021 – Present",
    description:
      "Own enterprise client relationships, drive expansion, and deliver onboarding programs. Led a team of 5 CSMs, improved NPS by 28%, and built QBR processes.",
    logoUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=60&h=60&fit=crop"
  },
  {
    company: "BrightPath Software",
    title: "Customer Success Manager",
    period: "2017 – 2021",
    description:
      "Managed portfolios of 60+ clients, increased retention by 12%, and launched new onboarding journey that reduced time-to-value by 20%.",
    logoUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop"
  },
  {
    company: "Cloudify Solutions",
    title: "Onboarding Specialist",
    period: "2014 – 2017",
    description:
      "Facilitated user training, created documentation, and provided technical support for 100+ SMB customers.",
    logoUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=60&h=60&fit=crop"
  }
]

export function Experience() {
  return (
    <section className="py-10" id="experience">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-primary-500" aria-hidden />
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experience.map((exp, i) => (
          <Card key={i} className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={exp.logoUrl}
              alt={`${exp.company} logo`}
              className="w-12 h-12 rounded-xl object-cover shadow"
              onError={e => (e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%236366f1'/%3E%3Ctext x='24' y='28' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3ELogo%3C/text%3E%3C/svg%3E")}
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-primary-800 text-lg">{exp.company}</h3>
                <span className="bg-primary-100 text-primary-700 text-xs px-2 py-0.5 rounded">{exp.period}</span>
              </div>
              <div className="font-medium text-primary-700">{exp.title}</div>
              <p className="text-primary-700 mt-1 text-base">{exp.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}