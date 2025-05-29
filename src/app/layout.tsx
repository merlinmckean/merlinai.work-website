import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Merlin AI - Enterprise AI Solutions',
  description: 'Transform your business with intelligent automation and custom AI solutions.',
  icons: {
    icon: '/merlin-ai-logo-mark-full-colour-rgb.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'purple' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}