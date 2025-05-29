"use client";
import { useState } from 'react';
import { 
  Workflow, 
  Brain, 
  FileSearch, 
  Users, 
  CheckCircle2,
  ArrowRight,
  
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'automation',
    icon: Workflow,
    title: 'AI Workflow Automation',
    shortDesc: 'Transform manual processes into intelligent, scalable workflows',
    description: 'We design and implement end-to-end AI automation solutions that integrate seamlessly with your existing systems. From document processing to complex decision-making workflows, we help you achieve 10x efficiency gains.',
    features: [
      'Custom workflow design and implementation',
      'Integration with existing enterprise systems',
      'Real-time monitoring and optimization',
      'Scalable architecture for growth'
    ],
    stats: { metric: '85%', label: 'Average time saved' }
  },
  {
    id: 'llm',
    icon: Brain,
    title: 'Custom LLM Solutions',
    shortDesc: 'Purpose-built AI models tailored to your specific needs',
    description: 'Leverage the power of large language models with custom solutions designed for your unique business context. We fine-tune and deploy models that understand your industry, terminology, and specific requirements.',
    features: [
      'Custom model training and fine-tuning',
      'Secure on-premise or cloud deployment',
      'Domain-specific knowledge integration',
      'Continuous learning and improvement'
    ],
    stats: { metric: '3.2x', label: 'Accuracy improvement' }
  },
  {
    id: 'parsing',
    icon: FileSearch,
    title: 'Intelligent Document Processing',
    shortDesc: 'Extract insights from any document format at scale',
    description: 'Transform unstructured data into actionable insights with our advanced document parsing solutions. Handle millions of documents with high accuracy and speed.',
    features: [
      'Multi-format document processing',
      'Intelligent data extraction and validation',
      'Automated classification and routing',
      'Integration with data warehouses'
    ],
    stats: { metric: '99.2%', label: 'Extraction accuracy' }
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Strategic AI Consulting',
    shortDesc: 'Expert guidance for your AI transformation journey',
    description: 'Our team of AI experts works closely with your organization to identify opportunities, develop strategies, and ensure successful AI adoption across all levels.',
    features: [
      'AI readiness assessment',
      'Use case identification and prioritization',
      'Technology stack recommendations',
      'Change management and training'
    ],
    stats: { metric: '100+', label: 'Enterprises transformed' }
  }
];

const processSteps = [
  { 
    number: '01', 
    title: 'Discovery & Assessment',
    description: 'We analyze your current processes and identify high-impact AI opportunities'
  },
  { 
    number: '02', 
    title: 'Solution Design',
    description: 'Custom AI architecture tailored to your specific requirements and constraints'
  },
  { 
    number: '03', 
    title: 'Implementation',
    description: 'Rapid deployment with continuous testing and optimization'
  },
  { 
    number: '04', 
    title: 'Scale & Support',
    description: 'Ongoing support and scaling to maximize ROI'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to transform your business operations, 
              enhance decision-making, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Selector */}
            <div className="space-y-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    selectedService.id === service.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl'
                      : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <service.icon className={`w-8 h-8 ${
                      selectedService.id === service.id ? 'text-white' : 'text-blue-600'
                    }`} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className={`text-sm ${
                        selectedService.id === service.id ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {service.shortDesc}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 mt-1 transition-transform ${
                      selectedService.id === service.id ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-6">
                <selectedService.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedService.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedService.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {selectedService.stats.metric}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    {selectedService.stats.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI implementation that ensures success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
                )}
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let&apos;s discuss how AI can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}