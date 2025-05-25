// src/components/Navbar.tsx
'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/merlin-ai-logo.jpg" alt="Merlin AI logo" className="h-8" />
        <div className="text-blue-600 text-xl font-bold tracking-tight">Merlin AI</div>
      </div>
      <div className="flex gap-6 text-blue-700 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}