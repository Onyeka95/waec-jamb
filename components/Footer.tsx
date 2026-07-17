import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Target } from 'lucide-react';

// lucide-react dropped brand/logo icons (trademark reasons), so socials are inline SVGs
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

const socialLinks = [
  { name: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61590398102683', icon: FacebookIcon },
  { name: 'Instagram', href: 'https://instagram.com/prep_zora', icon: InstagramIcon },
  { name: 'TikTok', href: 'https://tiktok.com/@Prepzora', icon: TikTokIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prep-zora-305b98414/', icon: LinkedinIcon },
];

const quickLinks = [
  { label: 'How it Works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Gamification', href: '#gamification' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'For Schools', href: '#schools' },
  { label: 'Teacher/Affiliate Form', href: 'https://forms.gle/jHwBZprsAnFbYQJk6' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Data Deletion', href: '/data-deletion' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F3A57] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Pepzora_logo.png"
                alt="Prepzora logo"
                width={50}
                height={50}
                className="w-9 h-9 rounded-2xl object-contain"
              />
              <span className="font-bold text-xl">Prepzora</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              WAEC &amp; JAMB exam prep, delivered straight on WhatsApp. No app. No laptop. Just daily practice.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:hello@prepzora.com" className="hover:text-white transition-colors">
                  hello@prepzora.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+2348069036428" className="hover:text-white transition-colors">
                  +234 806 903 6428
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="https://forms.gle/6JzKj9nuoUVwTrnb9" className="hover:text-white transition-colors">
                  Feedback Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>© {year} Prepzora Technologies Limited. All rights reserved.</p>
          <p>CAC-registered in Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}