'use client';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ whatsappLink }: { whatsappLink: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#25D366] rounded-2xl flex items-center justify-center text-white text-2xl">📚</div>
          <span className="font-bold text-2xl tracking-tight">WAEC/JAMB Coach</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#how" className="hover:text-[#25D366]">How it Works</a>
          <a href="#features" className="hover:text-[#25D366]">Features</a>
          <a href="#gamification" className="hover:text-[#25D366]">Gamification</a>
          <a href="#pricing" className="hover:text-[#25D366]">Pricing</a>
          <a href="#schools" className="hover:text-[#25D366]">For Schools</a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="hidden md:flex items-center gap-2 whatsapp-btn px-6 py-3 rounded-3xl font-semibold"
        >
          <Phone className="w-5 h-5" />
          Start Free Practice
        </a>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">
          <a href="#how" className="block py-2">How it Works</a>
          <a href="#features" className="block py-2">Features</a>
          <a href="#gamification" className="block py-2">Gamification</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#schools" className="block py-2">For Schools</a>
          <a href={whatsappLink} target="_blank" className="block whatsapp-btn text-center py-4 rounded-3xl font-semibold">
            Start Free Practice
          </a>
        </div>
      )}
    </nav>
  );
}