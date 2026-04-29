'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Gamification from '@/components/Gamification';
import Pricing from '@/components/Pricing';
import ForSchools from '@/components/ForSchools';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const whatsappLink = "https://wa.me/2348069036428?text=Hi%20Coach%2C%20I%20want%20to%20start%20free%20WAEC%20practice%21"; // ← Change this

  return (
    <>
      <Navbar whatsappLink={whatsappLink} />
      <Hero whatsappLink={whatsappLink} />
      <Problem />
      <HowItWorks />
      <Features />
      <Gamification />
      <Pricing whatsappLink={whatsappLink} />
      <ForSchools />
      <FinalCTA whatsappLink={whatsappLink} />
      <Footer />
    </>
  );
}