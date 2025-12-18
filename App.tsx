import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/3D/ParticleBackground';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen text-white selection:bg-purple-500 selection:text-white">
        {/* Background 3D Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="portfolio">
              <Portfolio />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;