import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Merlin AI - Enterprise AI Solutions',
  description: 'Transform your business with intelligent automation and custom AI solutions.',
  icons: {
    icon: '/merlinai-logo.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
