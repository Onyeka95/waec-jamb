'use client';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FinalCTA({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="bg-[#195682] py-16 sm:py-24 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Ready to Pass WAEC &amp; JAMB<br />in One Sitting?
          </h2>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Built for every WAEC &amp; JAMB candidate in Nigeria.{' '}
            <span className="font-semibold">Completely free to start.</span>
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 sm:mt-10 inline-flex items-center gap-3 sm:gap-4 bg-white text-[#195682] px-8 sm:px-12 py-5 sm:py-6 rounded-3xl text-lg sm:text-2xl font-bold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto justify-center"
          >
            <Phone className="w-7 h-7 sm:w-9 sm:h-9" />
            Start Free Practice on WhatsApp
          </motion.a>

          <p className="mt-6 text-sm opacity-75">Takes less than 10 seconds • No app required</p>
        </motion.div>
      </div>
    </section>
  );
}