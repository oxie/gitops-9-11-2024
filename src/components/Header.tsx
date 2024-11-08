import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, GitBranch } from 'lucide-react';
import { useThrottledCallback } from '../hooks/useThrottledCallback';

const MENU_ITEMS = [
  { label: 'HOME', sectionId: 'home' },
  { label: 'SOLUTIONS', sectionId: 'solutions' },
  { label: 'TECHNOLOGY', sectionId: 'technology' },
  { label: 'BENEFITS', sectionId: 'benefits' },
  { label: 'FAQ', sectionId: 'faq' },
  { label: 'GET STARTED', sectionId: 'contact', isButton: true }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = useThrottledCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = MENU_ITEMS.map(item => document.getElementById(item.sectionId));
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(MENU_ITEMS[i].sectionId);
        break;
      }
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      setIsMobileMenuOpen(false);
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-slate-900/90 backdrop-blur-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between relative z-50">
          <a 
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="group relative"
            aria-label="GitOpsNow Home"
          >
            <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-lg group-hover:bg-gold-500/30 transition-colors" />
            <div className="relative bg-slate-800/90 rounded-lg px-4 py-2 border border-gold-500/30 group-hover:border-gold-500/50 transition-colors">
              <div className="flex items-center space-x-3">
                <GitBranch className="h-5 w-5 text-gold-400" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center font-mono text-sm"
                >
                  <span className="text-gold-400">GitOps</span>
                  <span className="text-slate-300 mx-1.5">/</span>
                  <span className="text-gold-400">NOW</span>
                  <span className="text-slate-300 mx-1.5">/</span>
                  <span className={`inline-block w-2 h-4 bg-gold-400 ml-1 transition-opacity duration-200 ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  }`} />
                </motion.div>
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={`#${item.sectionId}`}
                onClick={(e) => scrollToSection(e, item.sectionId)}
                className={`
                  group flex items-center text-sm transition-all duration-200 font-mono
                  ${item.isButton 
                    ? 'bg-gold-500 px-6 py-2 rounded-lg text-slate-900 hover:scale-105' 
                    : 'text-slate-300 hover:text-gold-400'}
                  relative
                `}
              >
                {!item.isButton && (
                  <>
                    <span className="absolute left-0 -ml-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      $
                    </span>
                    <ChevronRight className={`h-4 w-4 mr-1 transition-all duration-200 ${
                      activeSection === item.sectionId 
                        ? 'text-gold-400' 
                        : 'text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1'
                    }`} />
                  </>
                )}
                <span className={`${
                  activeSection === item.sectionId && !item.isButton ? 'text-gold-400' : ''
                }`}>
                  {item.label}
                </span>
                {item.isButton && (
                  <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-slate-800/95 backdrop-blur-md rounded-lg overflow-hidden border border-slate-700"
            >
              <div className="py-2 space-y-1">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.sectionId}`}
                    onClick={(e) => scrollToSection(e, item.sectionId)}
                    className={`
                      flex items-center w-full px-4 py-3 font-mono transition-colors
                      ${item.isButton 
                        ? 'bg-gold-500 text-slate-900' 
                        : `${activeSection === item.sectionId 
                            ? 'text-gold-400 bg-slate-700/50' 
                            : 'text-slate-300 hover:text-gold-400 hover:bg-slate-700/50'
                          }`
                      }
                    `}
                  >
                    {!item.isButton && (
                      <span className="text-slate-500 mr-2">$</span>
                    )}
                    <ChevronRight className={`h-4 w-4 mr-2 ${
                      activeSection === item.sectionId ? 'text-gold-400' : 'text-slate-500'
                    } ${item.isButton ? '!text-slate-900' : ''}`} />
                    <span>
                      {item.label}
                    </span>
                    {item.isButton && (
                      <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
                    )}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}