import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      {/* Top gradient overlay for smooth transition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

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
                <Mail className="h-6 w-6 text-gold-400" />
              </div>
              <div className="section-title-text">Ready to Level Up Your GitOps?</div>
            </div>
          </div>
          <p className="section-description">
            Want to take your CD process to the next level with FluxCD and GitOps? Let's talk about how we can transform your infrastructure with production-grade open source solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12"
          >
            <a
              href="mailto:contact@gitopsnow.com"
              className="inline-flex items-center space-x-3 bg-gold-500 hover:bg-gold-600 text-slate-900 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span className="font-semibold">Contact Us</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}