/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Instagram, Twitter, Mail, ArrowRight, Menu, X, ChevronDown, MapPin, Coffee, Music, Heart, TrendingUp, Sparkles, Brain, Compass, Users, Code, Video, Layout, Table, Cpu, Dribbble, Zap, ExternalLink, Send, Globe, Upload, User, Image as ImageIcon } from 'lucide-react';

const BackgroundGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#D97706]/5 blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        x: [0, -50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#D97706]/3 blur-[120px]"
    />
  </div>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif tracking-widest uppercase text-[#D97706]"
        >
          Mr. Mark
        </motion.div>

        <div className="hidden md:flex space-x-12">
          {['About', 'Gallery', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#D97706] transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-serif italic"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroBackground = () => {
  const frames = [
    'qFnxCUQ', 'qFnxx5B', 'qFnxB0x', 'qFnxoJV', 'qFnxuzF', 'qFnxRsa', 'qFnxAWg',
    'qFnx7qJ', 'qFnxlJp', 'qFnx05N', 'qFnx1eI', 'qFnxEbt', 'qFnxVXn', 'qFnxj1f',
    'qFnxwg4', 'qFnxOdl', 'qFnxvm7', 'qFnxSI9', 'qFnxgLu', 'qFnxUXe', 'qFnx61j'
  ].map(id => `https://iili.io/${id}.png`);

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 100); // 10fps animation
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/40 z-10" />
      {frames.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Frame ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
            index === currentFrame ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};

const FogOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
        >
          <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[120px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <FogOverlay />

      <div className="relative z-20 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 text-[#D97706]"
        >
          Visual Storyteller & Designer
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-serif italic mb-8 tracking-tight"
        >
          Capturing <br />
          <span className="not-italic">The Moment</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-4 opacity-50">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} className="opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  const images = [
    { 
      url: 'https://iili.io/qFuajKx.png', 
      title: 'Urban Rhythm', 
      category: 'Street',
      location: 'Seville, Spain',
      settings: 'f/2.8, 1/500s, ISO 100'
    },
    { 
      url: 'https://iili.io/qFuawcQ.png', 
      title: 'Terracotta Dreams', 
      category: 'Architecture',
      location: 'Granada, Spain',
      settings: 'f/8.0, 1/125s, ISO 200'
    },
    { 
      url: 'https://iili.io/qFuaXPj.png', 
      title: 'Morning Glow', 
      category: 'Landscape',
      location: 'Toledo, Spain',
      settings: 'f/11, 1/60s, ISO 100'
    },
    { 
      url: 'https://iili.io/qFuaWMb.png', 
      title: 'Silent Stories', 
      category: 'Portrait',
      location: 'Madrid, Spain',
      settings: 'f/1.8, 1/1000s, ISO 400'
    },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">4-Photo Series Project</h2>
            <p className="text-white/50 max-w-xl leading-relaxed">
              A visual exploration of life in Spain, capturing the deep history and intricate architecture of this beautiful country. 
              These photographs focus on rhythmic patterns and the dramatic play of side lighting to bring awareness to the timeless beauty 
              and heritage found in every corner.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center space-x-4 group text-[#D97706]">
              <span className="text-xs uppercase tracking-widest">View Blog</span>
              <div className="w-12 h-[1px] bg-[#D97706]/40 group-hover:w-16 transition-all" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-serif italic">{img.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">{img.category} — {img.location}</p>
                </div>
                <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center" onClick={e => e.stopPropagation()}>
              <div className="lg:col-span-2 h-[70vh] flex items-center justify-center overflow-hidden rounded-sm">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#D97706] mb-4">{selectedImage.category}</p>
                  <h3 className="text-4xl md:text-6xl font-serif italic mb-2">{selectedImage.title}</h3>
                  <p className="text-xl text-white/60 italic">{selectedImage.location}</p>
                </div>
                <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-white/30">Camera Settings</span>
                    <Camera size={14} className="text-[#D97706]/40" />
                  </div>
                  <p className="text-lg font-mono tracking-tight text-white/80">{selectedImage.settings}</p>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Captured during an exploration of Spain's historic districts, focusing on the interplay between ancient architecture and the ephemeral quality of light.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const WorldMap = () => {
  const countries = [
    { name: 'England', x: '48.5%', y: '26%' },
    { name: 'France', x: '49%', y: '32%' },
    { name: 'Italy', x: '51.5%', y: '36%' },
    { name: 'Switzerland', x: '50.5%', y: '33.5%' },
    { name: 'Thailand', x: '76%', y: '56%' },
    { name: 'China', x: '78%', y: '40%' },
    { name: 'Indonesia', x: '79%', y: '66%' },
    { name: 'Australia', x: '86%', y: '82%' },
    { name: 'USA', x: '20%', y: '36%' },
    { name: 'Costa Rica', x: '26%', y: '52%' },
  ];

  return (
    <div className="relative w-full aspect-[2/1] bg-white/5 border border-white/10 rounded-sm overflow-hidden group/map">
      <div className="absolute inset-0 opacity-20 grayscale group-hover/map:grayscale-0 transition-all duration-1000">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
          alt="World Map Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-serif italic mb-2">Global Footprint</h4>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Places I have been</p>
        </div>
        <div className="relative flex-1 mt-4">
          {countries.map((country) => (
            <motion.div
              key={country.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute group/pin"
              style={{ left: country.x, top: country.y }}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-[#D97706] rounded-full animate-ping absolute inset-0" />
                <div className="w-2 h-2 bg-[#D97706] rounded-full relative z-10" />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-2 py-1 border border-white/10 rounded-sm opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  <span className="text-[8px] uppercase tracking-widest text-white">{country.name}</span>
                  {country.name === 'Indonesia' && <span className="ml-2 text-[#D97706] text-[8px] font-bold">(Home Base)</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <BackgroundGlow />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] overflow-hidden rounded-sm relative"
            >
              <img 
                src="https://iili.io/qFRi5q7.png" 
                alt="Mr. Mark - Professional Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm flex items-center space-x-3"
              >
                <MapPin size={14} className="text-[#D97706]" />
                <span className="text-[10px] uppercase tracking-widest text-white/80">Based in Indonesia</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="pt-10">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D97706]">The Visionary</span>
              <div className="h-[1px] w-12 bg-[#D97706]/40" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-10 leading-tight">Behind <br /> the Lens</h2>
            
            <div className="space-y-8 text-white/70 leading-relaxed text-lg">
              <p className="font-light italic">
                "Just a little about me: I'm an American who enjoys traveling and taking photos to communicate a message while meeting people and telling their stories."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <motion.div 
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-6 bg-white/5 border border-white/10 rounded-sm transition-colors"
                >
                  <Coffee className="mb-4 text-[#D97706]/60" size={20} />
                  <h4 className="text-xs uppercase tracking-widest mb-2 font-semibold">The Ritual</h4>
                  <p className="text-sm text-white/50">Sipping boba with chewy pearls—the ultimate recharge for my introspective energy.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-6 bg-white/5 border border-white/10 rounded-sm transition-colors"
                >
                  <Music className="mb-4 text-[#D97706]/60" size={20} />
                  <h4 className="text-xs uppercase tracking-widest mb-2 font-semibold">The Rhythm</h4>
                  <p className="text-sm text-white/50">Blasting Coldplay tracks during long runs to find my creative flow.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-6 bg-white/5 border border-white/10 rounded-sm transition-colors"
                >
                  <Dribbble className="mb-4 text-[#D97706]/60" size={20} />
                  <h4 className="text-xs uppercase tracking-widest mb-2 font-semibold">The Court</h4>
                  <p className="text-sm text-white/50">Finding competitive edge and physical flow through basketball.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-6 bg-white/5 border border-white/10 rounded-sm transition-colors"
                >
                  <Globe className="mb-4 text-[#D97706]/60" size={20} />
                  <h4 className="text-xs uppercase tracking-widest mb-2 font-semibold">Languages</h4>
                  <p className="text-sm text-white/50">Passionate about learning new languages, exploring diverse cultures, and the transformative power of travel.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Personality Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-12">
            <div className="flex items-baseline space-x-6">
              <h3 className="text-7xl md:text-9xl font-serif italic text-[#D97706]">INFP</h3>
              <div className="hidden md:block h-16 w-[1px] bg-white/10" />
              <div>
                <h4 className="text-2xl md:text-3xl font-serif italic">Personality Analysis</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] mt-2">The Mediator / Advocate Mindset</p>
              </div>
            </div>
            <a 
              href="https://drive.google.com/file/d/180GIW3HRisJcv8_BTS-EYFyVH97y8nlH/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#D97706] hover:text-[#F59E0B] transition-colors group bg-white/5 px-6 py-3 border border-white/10 rounded-sm"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">Learn More</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] overflow-hidden rounded-sm border border-white/5"
              >
                <img 
                  src="https://iili.io/qF5aqdv.png" 
                  alt="Personality Visualization"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { letter: 'I', trait: 'Introverted', strength: 'Deep Reflection', desc: 'Thrives in solitude to process complex ideas and find inner clarity.', icon: Brain, value: 60, color: '#D97706' },
                  { letter: 'N', trait: 'Intuitive', strength: 'Visionary Thinking', desc: 'Sees patterns and possibilities that others might miss, focusing on the big picture.', icon: Sparkles, value: 81, color: '#ffffff' },
                  { letter: 'F', trait: 'Feeling', strength: 'Radical Empathy', desc: 'Guided by a strong internal compass and a deep desire to help others authentically.', icon: Heart, value: 51, color: '#D97706' },
                  { letter: 'P', trait: 'Prospecting', strength: 'Creative Adaptability', desc: 'Remains open to new information and pivots gracefully when inspiration strikes.', icon: Compass, value: 69, color: '#ffffff' }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.letter}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`border border-white/5 p-8 group/box relative overflow-hidden transition-colors ${idx % 2 === 0 ? 'bg-white/5' : 'bg-[#D97706]/5'}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl font-serif italic" style={{ color: item.color }}>{item.letter}</span>
                        <div className="h-8 w-[1px] bg-white/10" />
                        <div>
                          <h5 className="text-xs font-semibold uppercase tracking-wider text-white/80">{item.trait}</h5>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.strength}</p>
                        </div>
                      </div>
                      <item.icon size={20} className="text-white/20 group-hover/box:text-[#D97706] transition-colors" />
                    </div>
                    
                    <p className="text-[11px] text-white/50 leading-relaxed mb-6 h-8 line-clamp-2">{item.desc}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{item.trait}</span>
                        <span className="text-sm font-mono text-[#D97706]">({item.value}%)</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-[#D97706]"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Pursuit Section */}
        <div className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <TrendingUp size={24} className="text-[#D97706]" />
            <h3 className="text-4xl md:text-5xl font-serif italic">Career Pursuit</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-4 relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] overflow-hidden rounded-sm border border-white/5"
              >
                <img 
                  src="https://iili.io/qF5Xuwb.png" 
                  alt="Career Pursuit"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-12 border border-white/5 flex flex-col group transition-all duration-500"
              >
                <div className="flex flex-col mb-16">
                  <h4 className="text-3xl font-serif italic mb-6">Financial Counseling</h4>
                  <p className="text-xl text-[#D97706]/80 italic font-light leading-relaxed max-w-3xl">
                    I am actively pursuing a career in financial counseling, where my INFP strengths of deep empathy and value-alignment perfectly complement the mission of helping others achieve financial peace.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-12">
                    <div className="flex items-start space-x-8">
                      <div className="w-14 h-14 rounded-full bg-[#D97706]/5 flex items-center justify-center shrink-0">
                        <Heart size={24} className="text-[#D97706]/60" />
                      </div>
                      <div>
                        <h4 className="text-sm uppercase tracking-widest mb-3 font-semibold text-white/80">Empathetic Alignment</h4>
                        <p className="text-base text-white/50 leading-relaxed">
                          My intuitive nature helps me understand clients' underlying motivations and long-term visions, aligning finances with personal values.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-8">
                      <div className="w-14 h-14 rounded-full bg-[#D97706]/5 flex items-center justify-center shrink-0">
                        <Compass size={24} className="text-[#D97706]/60" />
                      </div>
                      <div>
                        <h4 className="text-sm uppercase tracking-widest mb-3 font-semibold text-white/80">Adaptive Guidance</h4>
                        <p className="text-base text-white/50 leading-relaxed">
                          I favor flexibility over rigid structures, adapting creatively to guide individuals toward emotional fulfillment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-12">
                    <div className="flex items-start space-x-8">
                      <div className="w-14 h-14 rounded-full bg-[#D97706]/5 flex items-center justify-center shrink-0">
                        <Users size={24} className="text-[#D97706]/60" />
                      </div>
                      <div>
                        <h4 className="text-sm uppercase tracking-widest mb-3 font-semibold text-white/80">Authentic Connection</h4>
                        <p className="text-base text-white/50 leading-relaxed">
                          A career in financial counseling allows me to support people through challenges and foster authentic relationships—just as I do through my photography.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap gap-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Role</span>
                    <span className="text-lg font-serif italic text-white/80">Counselor & Advocate</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Focus</span>
                    <span className="text-lg font-serif italic text-white/80">Value-Aligned Finance</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Philosophy</span>
                    <span className="text-lg font-serif italic text-white/80">Compassionate Growth</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <WorldMap />
          </div>
          <div className="lg:col-span-1">
            {/* Hobbies Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full overflow-hidden rounded-sm relative group"
            >
              <img 
                src="https://iili.io/qF5plHB.png" 
                alt="Mr. Mark - Designer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Zap size={16} className="text-[#D97706]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Designer</span>
                </div>
                <h3 className="text-3xl font-serif italic">Creativity & Flow</h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, borderColor: "rgba(217, 119, 6, 0.2)" }}
          viewport={{ once: true }}
          className="bg-white/5 p-10 border border-white/5 group transition-all duration-500"
        >
          <div className="flex items-center space-x-4 mb-12">
            <Sparkles size={24} className="text-[#D97706]/60 group-hover:rotate-12 transition-transform" />
            <h3 className="text-3xl font-serif italic">Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { name: 'Programming', level: 6, icon: Code },
              { name: 'Video Editing', level: 8, icon: Video },
              { name: 'Design Layout', level: 7, icon: Layout },
              { name: 'Spreadsheet Data', level: 9, icon: Table },
              { name: 'AI Building', level: 7, icon: Cpu },
              { name: 'Languages', level: 5, icon: Globe },
            ].map((skill, i) => (
              <div key={skill.name} className="flex flex-col group/skill">
                <div className="flex items-center space-x-3 mb-4">
                  <skill.icon size={16} className="text-white/30 group-hover/skill:text-[#D97706] transition-colors" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold group-hover/skill:text-white transition-colors">{skill.name}</span>
                </div>
                <div className="flex items-end space-x-1 h-12">
                  {[...Array(10)].map((_, step) => (
                    <motion.div
                      key={step}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(step + 1) * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + step * 0.05, duration: 0.5 }}
                      className={`w-full rounded-t-sm transition-colors duration-500 ${step < skill.level ? 'bg-[#D97706]/60 group-hover/skill:bg-[#D97706]' : 'bg-white/5'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/4 w-full h-full bg-[#D97706]/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-sm overflow-hidden relative group"
          >
            <img 
              src="https://8upload.com/image/08fcef69e661f31c/Screenshot_2026-02-21_at_2.46.20___PM.png" 
              alt="Mr. Mark"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#D97706] mb-6">Contact me to collaborate</p>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-16 leading-[0.9]">
                Let's Create <br /> 
                <span className="text-[#D97706]">Something</span> <br />
                Iconic.
              </h2>
            </motion.div>
            
            <div className="group relative inline-block">
              <a 
                href="mailto:hello@mrmark.com" 
                className="text-2xl md:text-5xl font-light hover:text-[#D97706] transition-all duration-500 flex items-center space-x-6"
              >
                <span>hello@mrmark.com</span>
                <Send size={32} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D97706]" />
              </a>
              <div className="h-[1px] w-full bg-white/20 mt-4 group-hover:bg-[#D97706] transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2024 Mr. Mark. All Rights Reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-white/10" />
            <p className="text-[#D97706]/40 italic">Designed for the Visionaries.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
