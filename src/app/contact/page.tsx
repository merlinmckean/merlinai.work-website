// src/app/contact/page.tsx
import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact - Merlin AI',
  description: 'Get in touch with the Merlin AI team',
}

export default function Contact() {
  return (
    <section className="px-6 py-12 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Fill out the form below and we'll get back to you shortly.
      </p>
      <ContactForm />
    </section>
  )
}
