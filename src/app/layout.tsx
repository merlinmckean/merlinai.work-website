// app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Merlin AI',
  description: 'AI automation, insights, and innovation',
  icons: {
    icon: '/merlin-ai-logo-mark-full-colour-rgb.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
