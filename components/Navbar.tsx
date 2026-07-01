'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ whatsappLink }: { whatsappLink: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#how', label: 'How it Works' },
    { href: '#features', label: 'Features' },
    { href: '#gamification', label: 'Gamification' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#schools', label: 'For Schools' },
  ];

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Image
            src="/Pepzora_logo.png"
            alt="Prepzora logo"
            width={40}
            height={40}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl object-contain"
            priority
          />
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#195682]">
            Prepzora
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#195682] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#195682] hover:bg-[#134566] text-white px-6 py-3 rounded-3xl font-semibold transition-colors"
        >
          <Phone className="w-5 h-5" />
          Start Free Practice
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#195682]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-700 hover:text-[#195682] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#195682] text-white text-center py-4 rounded-3xl font-semibold mt-4"
          >
            <Phone className="w-5 h-5" />
            Start Free Practice
          </a>
        </div>
      )}
    </nav>
  );
}