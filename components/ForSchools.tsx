'use client';
import { motion } from 'framer-motion';
import { Users, Award, BarChart3 } from 'lucide-react';
import Image from 'next/image';

export default function ForSchools() {
  const cards = [
    {
      icon: Users,
      title: 'Bulk Student Access',
      desc: 'One coupon code for entire class or school',
      image: '/bulk_student_access.jpg',
    },
    {
      icon: BarChart3,
      title: 'Teacher Dashboard',
      desc: 'Monitor class performance, streaks & weak topics',
      image: '/teacher_dashboard.jpg',
    },
    {
      icon: Award,
      title: 'School Leaderboard',
      desc: 'Motivate students with healthy competition',
      image: '/student_celebrate.jpg',
    },
  ];

  return (
    <section id="schools" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Perfect for Schools &amp; Tutorial Centers
          </motion.h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Bulk access, teacher dashboard, and student performance tracking
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-48 sm:h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-[#195682] text-white rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="https://forms.gle/jHwBZprsAnFbYQJk6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#195682] text-white px-8 sm:px-10 py-4 rounded-3xl font-semibold hover:bg-[#134566] transition-all"
          >
            Teacher / Affiliate Registration Form
          </a>
        </div>
      </div>
    </section>
  );
}