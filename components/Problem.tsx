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
              image: "https://media.istockphoto.com/id/1770690446/photo/smiling-schoolgirl-during-class-in-computer-lab.webp?a=1&b=1&s=612x612&w=0&k=20&c=FdKRR0vyGqZLZc7N4WeJ1inKVqhlaqmX9dQbgKrAq3E=" // Replace with your image
            },
            {
              icon: "📱",
              title: "Poor Internet / No Laptop",
              desc: "Most students only have basic Android phones with limited data",
              image: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBvb3IlMjBJbnRlcm5ldCUyMGluJTIwbmlnZXJpYSUyMHNlY29uZGFyeSUyMHNjaG9vbCUyMHN0dWRlbnRzfGVufDB8fDB8fHww"
            },
            {
              icon: "🎮",
              title: "Distractions & No Habit",
              desc: "Social media wins over static PDFs and random YouTube videos",
              image: "https://images.unsplash.com/photo-1694878982234-58d53e0d1655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlzdHJhY3Rpb25zJTIwJTI2JTIwTm8lMjBIYWJpdCUyMFNvY2lhbCUyMG1lZGlhJTIwd2lucyUyMG92ZXIlMjBzdGF0aWMlMjBQREZzJTIwYW5kJTIwcmFuZG9tJTIwWW91VHViZSUyMHZpZGVvc3xlbnwwfHwwfHx8MA%3D%3D"
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