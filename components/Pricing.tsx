'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple &amp; Affordable Pricing</h2>
        <p className="text-gray-600 mb-10 sm:mb-12">Start free. Upgrade when you're ready to go unlimited.</p>

        <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-8">
          {/* Free Tier */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">Free Tier</h3>
            <p className="text-4xl sm:text-5xl font-bold mt-4">₦0</p>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#195682] shrink-0" /> 5 questions daily
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#195682] shrink-0" /> One subject at a time
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#195682] shrink-0" /> Basic streak tracking
              </li>
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block w-full py-4 border-2 border-[#195682] text-[#195682] rounded-3xl font-semibold hover:bg-[#195682] hover:text-white transition-all"
            >
              Start Free Now
            </a>
          </motion.div>

          {/* Paid Tier */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#195682] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 bg-white text-[#195682] text-xs font-bold px-5 py-1 rounded-full">
              RECOMMENDED
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold">Full Access</h3>
            <p className="text-4xl sm:text-5xl font-bold mt-4">₦2,000</p>
            <p className="opacity-80">per month</p>

            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 shrink-0" /> Unlimited questions
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 shrink-0" /> All subjects unlocked
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 shrink-0" /> Streak Shield + Leaderboard
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 shrink-0" /> Detailed weak topic analysis
              </li>
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block w-full py-4 bg-white text-[#195682] rounded-3xl font-semibold hover:bg-gray-100 transition-all"
            >
              Subscribe on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}