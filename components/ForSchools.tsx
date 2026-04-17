'use client';
import { motion } from 'framer-motion';
import { Users, Award, BarChart3 } from 'lucide-react';

export default function ForSchools() {
  return (
    <section id="schools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Perfect for Schools & Tutorial Centers
          </motion.h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Bulk access, teacher dashboard, and student performance tracking
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Bulk Student Access",
              desc: "One coupon code for entire class or school",
              image: "https://images.unsplash.com/photo-1654626570355-52fd0e82d3c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1hbnklMjBuaWdlcmlhbiUyMHNlY29uZGFyeSUyMHNjaG9vbCUyMHN0dWRlbnRzfGVufDB8fDB8fHww"
            },
            {
              icon: BarChart3,
              title: "Teacher Dashboard",
              desc: "Monitor class performance, streaks & weak topics",
              image: "https://media.istockphoto.com/id/2172310454/photo/african-american-teacher-at-desk-using-laptop-in-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=DoEXijHcyVtaSEnWwU-ryNIwiao91_4vetIYCQuXtpA="
            },
            {
              icon: Award,
              title: "School Leaderboard",
              desc: "Motivate students with healthy competition",
              image: "https://media.istockphoto.com/id/1460973632/photo/very-bad-school-report-as-a-symbol-of-fear-of-bad-grades-in-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=PWg10zq3HDkDdJ2ZVxIYsWs4knhoWWq42MsRdhRkfzI="
            },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-8">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/234YOURNUMBER?text=Hi%20Coach%2C%20I%27m%20a%20teacher%2Fschool%20owner%20and%20I%20want%20a%20demo"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#128C7E] text-white px-10 py-4 rounded-3xl font-semibold hover:bg-[#25D366] transition-all"
          >
            Request School Demo / Bulk Pricing
          </a>
        </div>
      </div>
    </section>
  );
}