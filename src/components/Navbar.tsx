'use client'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {

  return (
    <header className="bg-white/95 backdrop-blur border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
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
          <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide" style={{ fontFamily: 'Geist, sans-serif' }}>
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="px-3 py-1 rounded-full uppercase tracking-wide text-gray-700 hover:text-primary transition-colors duration-150 font-medium border-b-2 border-transparent hover:border-primary"
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
            className="rounded-full bg-primary text-white px-6 py-2 font-semibold shadow-sm hover:bg-primary-dark transition-all duration-150 text-base tracking-wide"
            style={{ fontFamily: 'Geist, sans-serif', letterSpacing: '0.05em' }}
          >
            Book a Call
          </Link>
        </div>
      </nav>
    </header>
  )
}

