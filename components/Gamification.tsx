'use client';
import { motion } from 'framer-motion';
import { Flame, Zap, Trophy, Shield, Award } from 'lucide-react';

export default function Gamification() {
  return (
    <section id="gamification" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Addictive Gamification System
          </motion.h2>
          <p className="text-gray-600 mt-3">Built to turn daily practice into a habit</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Flame,
              color: "text-orange-500",
              title: "Daily Streak 🔥",
              desc: "Build long streaks. Miss a day and it resets (Streak Shield available on paid plan)",
            },
            {
              icon: Zap,
              color: "text-yellow-500",
              title: "XP Points & Levels",
              desc: "Earn XP for every correct answer. Rise from Beginner → Legend",
            },
            {
              icon: Trophy,
              color: "text-amber-500",
              title: "Weekly Leaderboard",
              desc: "Top 10 students announced every Sunday. Compete with others",
            },
            {
              icon: Shield,
              color: "text-blue-500",
              title: "Streak Shield",
              desc: "Protect your streak once per week (Paid tier benefit)",
            },
            {
              icon: Award,
              color: "text-purple-500",
              title: "Badges & Achievements",
              desc: "Earn badges like 7-Day Streak, Subject Master, Perfect Score",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}