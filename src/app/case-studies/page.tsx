'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="h-10 w-auto">
                <Image 
                  src="/logo.svg" 
                  alt="Merlin AI Logo" 
                  width={120} 
                  height={40} 
                  className="h-full w-auto" 
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
            <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
            <Link href="/case-studies" className="text-blue-400 hover:text-white transition-colors">Case Studies</Link>
            <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <Link href="/#contact" className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            Get Started
          </Link>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Real-world examples of how our AI solutions have transformed businesses and delivered measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-[4/3]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-64 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
                        <div className="h-10 border-b border-slate-700 bg-slate-800 flex items-center px-4">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-3 h-8 rounded-md bg-slate-700/50"></div>
                            <div className="col-span-2 h-24 rounded-md bg-blue-500/20"></div>
                            <div className="h-24 rounded-md bg-slate-700/30"></div>
                            <div className="col-span-3 h-8 rounded-md bg-gradient-to-r from-blue-500/40 to-purple-500/40"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -right-4 w-48 h-28 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg p-4 text-left">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs font-medium">Prediction Accuracy</div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex items-end gap-1">
                        <div className="text-xl font-bold">94.8%</div>
                        <div className="text-xs text-white/70">increase</div>
                      </div>
                      <div className="mt-2 flex gap-1">
                        {[40, 65, 45, 80, 60, 75, 90].map((h, i) => (
                          <div key={i} className="flex-1 bg-white/10 rounded-sm" style={{ height: `${h * 0.2}px` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-12">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                    Financial Services
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Global Bank Fraud Detection</h2>
                  <p className="text-slate-300 mb-6">
                    A leading global bank needed to improve their fraud detection system to reduce false positives while maintaining high security standards.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                      <p className="text-slate-400">
                        The bank&apos;s existing system flagged too many legitimate transactions as potentially fraudulent, creating customer friction and requiring extensive manual review.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Solution</h3>
                      <p className="text-slate-400">
                        We implemented a machine learning model that analyzed transaction patterns and customer behavior to more accurately identify truly suspicious activities.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                          <div className="text-2xl font-bold text-blue-400 mb-1">67%</div>
                          <div className="text-sm text-slate-400">Reduction in false positives</div>
                        </div>
                        <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                          <div className="text-2xl font-bold text-blue-400 mb-1">94.8%</div>
                          <div className="text-sm text-slate-400">Fraud detection accuracy</div>
                        </div>
                      </div>
                      <p className="text-slate-400">
                        The new system saved the bank an estimated $4.2M annually in operational costs while improving customer satisfaction scores by 23%.
                      </p>
                    </div>
                  </div>
                  
                  <Link href="/#contact" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">More <span className="text-blue-400">Success Stories</span></h2>
            <p className="text-slate-300">Explore how our AI solutions have delivered measurable results across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Inventory Optimization",
                industry: "Retail",
                description: "Reduced inventory costs by 31% while maintaining 99.2% product availability through predictive demand forecasting.",
                metrics: ["31% cost reduction", "99.2% availability", "$2.8M annual savings"],
                image: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
              },
              {
                title: "Healthcare Patient Outcomes",
                industry: "Healthcare",
                description: "Improved early diagnosis accuracy by 42% using computer vision analysis of medical imaging data.",
                metrics: ["42% improved accuracy", "28% faster diagnosis", "17% better outcomes"],
                image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
              },
              {
                title: "Manufacturing Predictive Maintenance",
                industry: "Manufacturing",
                description: "Reduced unplanned downtime by 78% through IoT sensor data analysis and predictive maintenance scheduling.",
                metrics: ["78% less downtime", "43% maintenance cost reduction", "22% productivity increase"],
                image: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
              },
              {
                title: "E-commerce Recommendation Engine",
                industry: "E-commerce",
                description: "Increased average order value by 34% with a personalized product recommendation system based on customer behavior.",
                metrics: ["34% higher AOV", "28% conversion increase", "47% repeat purchases"],
                image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Insurance Claims Processing",
                industry: "Insurance",
                description: "Automated 82% of claims processing, reducing processing time from 6 days to 4 hours while improving accuracy.",
                metrics: ["82% automation", "97% faster processing", "31% cost reduction"],
                image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
              },
              {
                title: "Logistics Route Optimization",
                industry: "Logistics",
                description: "Reduced delivery times by 23% and fuel costs by 18% through AI-powered route optimization and demand prediction.",
                metrics: ["23% faster delivery", "18% fuel savings", "34% capacity utilization"],
                image: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20"
              }
            ].map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-full rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`h-48 ${study.image} p-6 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-2">
                        {study.industry}
                      </div>
                      <h3 className="text-xl font-semibold">{study.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-400 mb-6">{study.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Results:</h4>
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-slate-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all text-sm">
                      View Full Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Before & After <span className="text-blue-400">Transformation</span></h2>
            <p className="text-slate-300">See the measurable impact our AI solutions have delivered</p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                title: "Customer Service Automation",
                industry: "Telecommunications",
                description: "A major telecom provider transformed their customer service operations with our conversational AI solution.",
                before: [
                  "Average wait time: 15 minutes",
                  "Resolution time: 24 hours",
                  "Customer satisfaction: 67%",
                  "Service cost: $12 per interaction"
                ],
                after: [
                  "Average wait time: <1 minute",
                  "Resolution time: 4 hours",
                  "Customer satisfaction: 92%",
                  "Service cost: $3.20 per interaction"
                ],
                image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
              },
              {
                title: "Supply Chain Optimization",
                industry: "Consumer Goods",
                description: "A global consumer goods manufacturer optimized their entire supply chain with our predictive analytics platform.",
                before: [
                  "Inventory turnover: 8 cycles/year",
                  "Stockout rate: 12%",
                  "Logistics costs: 14% of revenue",
                  "Forecast accuracy: 76%"
                ],
                after: [
                  "Inventory turnover: 14 cycles/year",
                  "Stockout rate: 2.3%",
                  "Logistics costs: 8.5% of revenue",
                  "Forecast accuracy: 94%"
                ],
                image: "bg-gradient-to-br from-teal-500/20 to-green-500/20"
              }
            ].map((comparison, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-10"></div>
                <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                      {comparison.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{comparison.title}</h3>
                    <p className="text-slate-300 mb-8 max-w-3xl">
                      {comparison.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-slate-900 rounded-xl p-6 border border-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="15" y1="9" x2="9" y2="15"></line>
                              <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold">Before</h4>
                        </div>
                        <ul className="space-y-3">
                          {comparison.before.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-slate-900 rounded-xl p-6 border border-green-500/20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold">After</h4>
                        </div>
                        <ul className="space-y-3">
                          {comparison.after.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Let&apos;s discuss how our AI solutions can deliver similar results for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Schedule a Consultation
              </Link>
              <Link href="/#services" className="px-8 py-4 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 transition-all">
                Explore Services
              </Link>
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
                {['About', 'Services', 'Case Studies', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link === 'Case Studies' ? '/case-studies' : `/#${link.toLowerCase()}`} 
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </Link>
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
                Designed with ♥ by Merlin McKean
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
