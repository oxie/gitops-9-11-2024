import React, { Suspense } from 'react';
import HomePage from './components/HomePage';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <ParticleBackground />
      <div className="relative">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <HomePage />
        </Suspense>
      </div>
      <ScrollToTop />
    </div>
  );
}