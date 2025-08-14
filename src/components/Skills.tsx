import { Card } from './ui/Card'
import { Layers } from 'lucide-react'

const skills = [
  {
    category: "Customer Success",
    list: [
      "Onboarding & Training",
      "Renewals & Upsells",
      "Account Management",
      "QBRs & EBRs",
      "Customer Advocacy"
    ]
  },
  {
    category: "Business & Analytics",
    list: [
      "SaaS Metrics (NPS, Churn, Retention)",
      "Process Improvement",
      "Project Management",
      "Stakeholder Communication"
    ]
  },
  {
    category: "Tools",
    list: [
      "Salesforce",
      "Zendesk",
      "Gainsight",
      "HubSpot",
      "Jira",
      "Intercom"
    ]
  },
  {
    category: "Soft Skills",
    list: [
      "Empathy",
      "Active Listening",
      "Problem Solving",
      "Leadership",
      "Adaptability"
    ]
  }
]

export function Skills() {
  return (
    <section className="py-10" id="skills">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-6 flex items-center gap-2">
        <Layers className="w-6 h-6 text-primary-500" aria-hidden />
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((cat) => (
          <Card key={cat.category} className="flex flex-col gap-2">
            <h3 className="font-semibold text-primary-800 mb-1">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.list.map((skill) => (
                <li key={skill}>
                  <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}