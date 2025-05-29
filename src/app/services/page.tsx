// src/app/services/page.tsx
export const metadata = {
  title: 'Services - Merlin AI',
  description: 'Discover how we can help elevate your business',
}

const services = [
  {
    title: 'Workflow Automation',
    desc: 'Streamline operations by automating repetitive tasks and integrating AI tools.',
  },
  {
    title: 'Custom LLM Development',
    desc: 'Build bespoke language model solutions tailored to your domain and data.',
  },
  {
    title: 'Data & Document Parsing',
    desc: 'Extract insights from unstructured content with scalable automation.',
  },
  {
    title: 'Technical Consulting',
    desc: 'Identify high-impact AI opportunities and craft an actionable roadmap.',
  },
]

export default function Services() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-lg bg-white shadow-md">
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-700 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
