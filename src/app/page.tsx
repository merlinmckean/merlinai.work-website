'use client'; 

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              opacity: 0.05 + Math.random() * 0.1,
              transform: `scale(${1 + Math.sin(Date.now() / (2000 + i * 500)) * 0.2})`,
              filter: 'blur(40px)',
              animation: `float-${i} ${20 + i * 5}s infinite linear`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
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
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
            <Link href="#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            Get Started
          </button>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center opacity-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
              Transforming Ideas with Artificial Intelligence
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Building next-generation AI solutions that empower businesses to achieve more. 
              Cutting-edge technology meets practical implementation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Explore Services
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 transition-all">
                View Projects
              </button>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="relative mt-20 h-80 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                {/* Main dashboard mockup */}
                <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
                  <div className="h-10 border-b border-slate-700 bg-slate-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 h-12 rounded-md bg-slate-700/50"></div>
                      <div className="h-12 rounded-md bg-blue-500/20"></div>
                      <div className="h-24 rounded-md bg-slate-700/30"></div>
                      <div className="col-span-2 h-24 rounded-md bg-gradient-to-r from-slate-700/40 to-slate-700/20"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-10 -left-10 w-40 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg p-4 text-left"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                >
                  <div className="text-xs font-medium mb-1">AI Performance</div>
                  <div className="text-xl font-bold">98.7%</div>
                  <div className="mt-2 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-48 h-28 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg p-4 text-left"
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-medium">Model Training</div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-end gap-1">
                    <div className="text-xl font-bold">2.4x</div>
                    <div className="text-xs text-white/70">faster</div>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {[40, 65, 45, 80, 60, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded-sm" style={{ height: `${h * 0.2}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">About <span className="text-blue-400">Merlin AI</span></h2>
            <p className="text-slate-300">Pioneering the intersection of artificial intelligence and practical business solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-100">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <div className="aspect-[4/3] bg-slate-900 flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-500">M</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Merlin McKean</h3>
                    <p className="text-slate-300 mb-4">AI Engineer & Consultant</p>
                    <p className="text-slate-400 text-sm">
                      Specializing in machine learning solutions that transform how businesses operate and make decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 opacity-100">
              <h3 className="text-2xl font-bold">Expertise in AI Implementation</h3>
              <p className="text-slate-300">
                With years of experience in developing and deploying AI solutions, I help businesses leverage cutting-edge technology to solve complex problems and create new opportunities.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Machine Learning", value: 95 },
                  { title: "Natural Language Processing", value: 90 },
                  { title: "Computer Vision", value: 85 },
                  { title: "Generative AI", value: 92 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.title}</span>
                      <span className="text-sm font-medium text-blue-400">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">AI <span className="text-blue-400">Services</span></h2>
            <p className="text-slate-300">Comprehensive AI solutions tailored to your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom AI Development",
                description: "Bespoke AI solutions designed and developed to address your specific business challenges.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                )
              },
              {
                title: "Machine Learning Implementation",
                description: "Implement machine learning models that learn from your data and improve over time.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                )
              },
              {
                title: "Natural Language Processing",
                description: "Build systems that understand, interpret, and generate human language with high accuracy.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                )
              },
              {
                title: "Computer Vision Solutions",
                description: "Develop systems that can interpret and understand visual information from the world.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M20 4v7.5L4 4v15.5L20 12v8"></path>
                  </svg>
                )
              },
              {
                title: "AI Strategy Consulting",
                description: "Strategic guidance on how to integrate AI into your business processes and products.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                )
              },
              {
                title: "Generative AI Applications",
                description: "Create applications that can generate new content, from text to images to code.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                )
              }
            ].map((service, index) => (
              <div key={index} className="group opacity-100">
                <div className="h-full p-8 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
            <p className="text-slate-300">Innovative AI solutions that deliver real business value</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Predictive Analytics Platform",
                category: "Machine Learning",
                description: "A comprehensive platform that predicts business outcomes based on historical data patterns.",
                image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Conversational AI Assistant",
                category: "Natural Language Processing",
                description: "An intelligent assistant that understands and responds to natural language queries with high accuracy.",
                image: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
              },
              {
                title: "Visual Recognition System",
                category: "Computer Vision",
                description: "A system that can identify and classify objects, people, and actions in images and video streams.",
                image: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
              },
              {
                title: "Content Generation Engine",
                category: "Generative AI",
                description: "An AI engine that creates high-quality, contextually relevant content for various applications.",
                image: "bg-gradient-to-br from-pink-500/20 to-purple-500/20"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer opacity-100">
                <div className="h-full rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-blue-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 opacity-100">
                <h2 className="text-3xl font-bold">Let&apos;s <span className="text-blue-400">Connect</span></h2>
                <p className="text-slate-300">
                  Ready to transform your business with AI? Get in touch to discuss how we can work together.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-slate-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-slate-400">contact@merlinai.work</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-slate-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-4">Connect on Social</h3>
                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'github', 'medium'].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {social === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>}
                          {social === 'linkedin' && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>}
                          {social === 'linkedin' && <rect x="2" y="9" width="4" height="12"></rect>}
                          {social === 'linkedin' && <circle cx="4" cy="4" r="2"></circle>}
                          {social === 'github' && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>}
                          {social === 'medium' && <path d="M18 13a5 5 0 0 0-5-5H4"></path>}
                          {social === 'medium' && <path d="M18 6H4"></path>}
                          {social === 'medium' && <path d="M18 20H4"></path>}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="opacity-100">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                  <div className="relative bg-slate-900 rounded-xl p-8 border border-slate-800">
                    <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="How can I help you?"
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-auto">
                  <Image 
                    src="/logo.svg" 
                    alt="Merlin AI Logo" 
                    width={100} 
                    height={40} 
                    className="h-full w-auto" 
                  />
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Building next-generation AI solutions that empower businesses to achieve more through cutting-edge technology and practical implementation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Services', 'Projects', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} MerlinAI. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-slate-500 text-sm">
                Designed by Merlin McKean
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
