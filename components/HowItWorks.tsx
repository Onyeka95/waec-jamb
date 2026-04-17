'use client';
import { motion } from 'framer-motion';
import { MessageCircle, List, Play, Award } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold"
          >
            It only takes 3 minutes to start
          </motion.h2>
          <p className="text-gray-600 mt-3">No app download. No complicated registration.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: MessageCircle, title: "1. Message the Bot", desc: "Say 'Hi' on WhatsApp", color: "bg-[#25D366]" },
            { icon: List, title: "2. Choose Subject", desc: "English, Maths, Biology, etc.", color: "bg-blue-500" },
            { icon: Play, title: "3. Answer Questions", desc: "Get instant feedback + explanation", color: "bg-purple-500" },
            { icon: Award, title: "4. Build Streaks & Win", desc: "Earn XP, badges & climb leaderboard", color: "bg-orange-500" },
          ].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`${step.color} w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}