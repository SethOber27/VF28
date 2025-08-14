import { Card } from './ui/Card'
import { Info } from 'lucide-react'

export function About() {
  return (
    <section className="py-10" id="about">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-6 flex items-center gap-2">
        <Info className="w-6 h-6 text-primary-500" aria-hidden />
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold mb-2 text-lg text-primary-800">Hi, I'm Seth 👋</h3>
          <p className="text-primary-700 text-base">
            I am a results-driven Customer Success Manager with over 10 years of experience in SaaS, onboarding, training, and account management. My mission is to help businesses realize value from technology by ensuring clients reach their goals and have a remarkable experience.
          </p>
        </Card>
        <Card>
          <h3 className="font-semibold mb-2 text-lg text-primary-800">My Philosophy</h3>
          <ul className="list-disc pl-5 space-y-1 text-primary-700 text-base">
            <li>Customer obsession: every interaction is an opportunity to create impact.</li>
            <li>Continuous learning: embracing feedback and new challenges.</li>
            <li>Collaboration: success is a team sport.</li>
            <li>Clear communication: keeping things transparent builds trust.</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}