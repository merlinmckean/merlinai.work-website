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
      <body className="min-h-screen flex flex-col antialiased bg-background">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
