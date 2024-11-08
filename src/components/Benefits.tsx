import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Shield, Workflow, Cloud, Lock, GitMerge, Terminal, Rocket } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Production Excellence",
      description: "Leverage proven open source tools like FluxCD, Crossplane, and Backstage for robust, scalable infrastructure",
      features: ["Version Control", "Zero Drift", "Instant Rollbacks"]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Military-grade security with automated compliance and continuous monitoring",
      features: ["SOC2 Compliant", "Zero-Trust", "RBAC Enabled"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Native",
      description: "Built for modern cloud infrastructure with multi-cloud support",
      features: ["Multi-Cloud", "Auto-Scaling", "High Availability"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Automated Operations",
      description: "End-to-end automation with self-healing systems and continuous delivery",
      features: ["99.99% Uptime", "24/7 Operations", "Auto Recovery"]
    }
  ];

  return (
    <section className="py-32 relative">
      {/* Top gradient overlay for smooth transition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="section-title">
            <div className="section-title-wrapper group">
              <div className="section-title-icon">
                <Rocket className="h-6 w-6 text-gold-400" />
              </div>
              <div className="section-title-text">Why Choose GitOps/NOW</div>
            </div>
          </div>
          <p className="section-description">
            Experience the future of infrastructure management with our platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative h-full p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-gold-500/50 transition-all duration-300 flex flex-col">
                {/* Icon Container - Fixed Height */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-gold-500/10 to-gold-600/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-gold-400">{benefit.icon}</div>
                </div>

                {/* Title - Fixed Height */}
                <h3 className="text-xl font-bold mb-4 min-h-[56px] flex items-center">
                  {benefit.title}
                </h3>

                {/* Description - Fixed Height */}
                <p className="text-slate-300 mb-6 min-h-[80px]">
                  {benefit.description}
                </p>

                {/* Features - Auto Height */}
                <div className="space-y-3 mt-auto">
                  {benefit.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <Terminal className="h-4 w-4 mr-2 text-gold-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}