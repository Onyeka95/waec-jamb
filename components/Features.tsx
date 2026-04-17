'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="bg-[#25D366] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Powerful Quiz Engine</h2>
            <ul className="space-y-6 text-lg">
              {[
                "One question at a time with instant correct/incorrect feedback",
                "Detailed explanations after every answer",
                "Weak topic identification after each session",
                "WAEC-style questions with 4 options",
                "Session timer and performance tracking"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/quiz-engine.jpeg" 
              alt="Quiz Interface"
              className="rounded-3xl shadow-2xl w-full "
              // onError={(e) => e.currentTarget.src = "https://picsum.photos/id/201/600/500"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}