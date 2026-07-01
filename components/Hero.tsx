'use client';
import { motion } from 'framer-motion';
import { Phone, Flame } from 'lucide-react';
import Image from 'next/image';

export default function Hero({ whatsappLink }: { whatsappLink: string }) {
  return (
    <header className="bg-gradient-to-br from-white via-[#195682]/5 to-white pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] md:leading-none tracking-tighter">
            Pass WAEC &amp; JAMB<br />in <span className="text-[#195682]">one sitting</span><br />using just WhatsApp.
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-md">
            Daily gamified practice. Instant feedback. No app. No laptop needed.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#195682] hover:bg-[#134566] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-3xl text-lg sm:text-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" /> Chat with Coach Now – Free
            </a>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
            <div>
              <p className="font-bold text-2xl sm:text-3xl text-[#195682]">1.5M+</p>
              <p className="text-gray-500">WAEC candidates/year</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div>
              <p className="font-bold text-2xl sm:text-3xl text-[#195682]">Target: 70%+</p>
              <p className="text-gray-500">quiz completion</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Flame className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
              <div>
                <p className="font-bold text-sm sm:text-base">Goal: 4-day avg streak</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mock Phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-[280px] sm:max-w-[320px] w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-4 border-8 border-[#195682]">
            <div className="bg-[#DCF8C6] rounded-2xl h-80 sm:h-96 overflow-hidden relative">
              <Image
                src="/quiz_one.jpeg"
                alt="WAEC Practice Coach quiz in action on WhatsApp"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 280px, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}