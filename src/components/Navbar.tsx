'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-10 w-[120px] relative">
          <Link href="/">
            <Image
              src="/merlin-ai-logo-full-colour-rgb.svg"
              alt="Merlin AI Logo"
              fill
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              priority
            />
          </Link>
        </div>
        {/* Centered pill nav */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 bg-white rounded-full px-6 py-2 text-base font-medium tracking-wide shadow-none" style={{ fontFamily: 'Geist, sans-serif' }}>
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="px-3 py-1 rounded-full uppercase tracking-wide text-gray-700 hover:text-blue-700 transition-colors duration-150 font-medium border-b-2 border-transparent hover:border-blue-600"
                  style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* CTA Button */}
        <div className="flex items-center">
          <Link
            href="/book-call"
            className="rounded-full border border-gray-300 bg-white text-blue-700 px-6 py-2 font-semibold shadow-sm hover:bg-blue-50 hover:text-blue-900 transition-all duration-150 text-base tracking-wide"
            style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.05em' }}
          >
            Book a Call
          </Link>
        </div>
      </nav>
    </header>
  )
}

