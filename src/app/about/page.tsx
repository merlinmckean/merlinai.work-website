// src/app/about/page.tsx
export const metadata = {
  title: 'About - Merlin AI',
  description: 'Learn more about our mission and team',
}

export default function About() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">About Merlin AI</h1>
      <p className="text-lg text-gray-700">
        Merlin AI is a boutique consultancy focused on helping organisations unlock intelligent capabilities through automation and custom AI tooling. We combine technical expertise with real-world experience to deliver impactful solutions.
      </p>
      <p className="text-lg text-gray-700">
        Our team is passionate about leveraging large language models, workflow automation and modern development practices to streamline business processes and uncover new opportunities.
      </p>
    </section>
  )
}
