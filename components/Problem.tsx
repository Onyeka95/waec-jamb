'use client';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-12"
        >
          Why most students fail WAEC & JAMB
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💰",
              title: "Expensive Tutorials",
              desc: "₦30,000 – ₦100,000 per subject excludes millions of low-income students",
              image: "/expensive_tutorial.jpeg" // Replace with your image
            },
            {
              icon: "📱",
              title: "Poor Internet / No Laptop",
              desc: "Most students only have basic Android phones with limited data",
              image: "/poor_internet.jpeg"
            },
            {
              icon: "🎮",
              title: "Distractions & No Habit",
              desc: "Social media wins over static PDFs and random YouTube videos",
              image: "/social_media_addiction.jpeg"
            },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              
              {/* Image Placeholder */}
              <div className="mt-6 h-48 bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/id/${50 + index}/600/300`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}