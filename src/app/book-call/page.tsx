'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="h-10 w-auto">
                  <Image 
                    src="/logo.svg" 
                    alt="Merlin AI Logo" 
                    width={120} 
                    height={40} 
                    className="h-full w-auto" 
                  />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
            <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
            <Link href="/#projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <Link href="/" className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
                Schedule a Consultation
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Book a time to discuss how AI solutions can transform your business. 
                I&apos;m looking forward to understanding your needs and exploring how we can work together.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-20"></div>
              <div className="relative bg-slate-800 rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-semibold mb-6 text-center">Select a Time</h2>
                
                {/* Calendly Placeholder */}
                <div className="bg-slate-900 rounded-lg p-8 min-h-[400px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <p className="text-slate-400 text-center mb-6">
                    The calendar widget will appear here. Choose a time that works best for you.
                  </p>
                  <div className="text-sm text-slate-500">
                    {/* Calendly integration code would go here */}
                    {/* Example: <div className="calendly-inline-widget" data-url="https://calendly.com/yourusername" style={{ minWidth: '320px', height: '630px' }}></div> */}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-slate-400 mb-6">
                    Can&apos;t find a suitable time? Feel free to email me directly at <a href="mailto:contact@merlinai.work" className="text-blue-400 hover:underline">contact@merlinai.work</a>
                  </p>
                  <Link href="/#contact" className="px-6 py-3 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 transition-all">
                    Contact Me Instead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-auto">
                <Image 
                  src="/logo.svg" 
                  alt="Merlin AI Logo" 
                  width={80} 
                  height={32} 
                  className="h-full w-auto" 
                />
              </div>
            </div>
            
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} MerlinAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
