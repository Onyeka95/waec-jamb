'use client';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FinalCTA({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="bg-[#25D366] py-24 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Ready to Pass WAEC & JAMB<br />in One Sitting?
          </h2>
          <p className="mt-6 text-xl opacity-90">
            Join thousands of students practicing daily on WhatsApp. 
            <span className="font-semibold">Completely free to start.</span>
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-4 bg-white text-[#25D366] px-12 py-6 rounded-3xl text-2xl font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            <Phone className="w-9 h-9" />
            Start Free Practice on WhatsApp
          </motion.a>

          <p className="mt-6 text-sm opacity-75">Takes less than 10 seconds • No app required</p>
        </motion.div>
      </div>
    </section>
  );
}