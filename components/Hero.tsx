'use client';
import { motion } from 'framer-motion';
import { Phone, Flame } from 'lucide-react';

export default function Hero({ whatsappLink }: { whatsappLink: string }) {
  return (
    <header className="bg-gradient-to-br from-white via-[#DCF8C6]/30 to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter">
            Pass WAEC &amp; JAMB<br />in <span className="text-[#25D366]">one sitting</span><br />using just WhatsApp.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-md">
            Daily gamified practice. Instant feedback. No app. No laptop needed.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              className="flex-1 md:flex-none whatsapp-btn px-10 py-5 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" /> Chat with Coach Now – Free
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm">
            <div>
              <p className="font-bold text-3xl text-[#25D366]">1.5M+</p>
              <p className="text-gray-500">WAEC candidates/year</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <p className="font-bold text-3xl text-[#25D366]">Target: 70%+</p>
              <p className="text-gray-500">quiz completion</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <div>
                <p className="font-bold">Goal: 4-day avg streak</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mock Phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-[320px]"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-4 border-8 border-[#25D366]">
            <div className="bg-[#DCF8C6] rounded-2xl h-96 flex flex-col overflow-hidden">
              <div className="bg-[#25D366] text-white p-3 text-center text-sm font-medium">WAEC Practice Coach</div>
              <div className="flex-1 p-4 space-y-6">
                <div className="bg-white rounded-2xl p-4 text-sm">Question 1 of 5 – Biology<br />Which organelle produces ATP?<br />A. Ribosome B. Mitochondria...</div>
                <div className="text-right"><div className="inline-block bg-[#25D366] text-white px-5 py-2 rounded-3xl">B</div></div>
                <div className="text-xs text-green-700">✅ Correct! Mitochondria is the powerhouse of the cell.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}