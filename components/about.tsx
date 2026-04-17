"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Hi! I'm a passionate full-stack developer with a love for creating 
              beautiful and functional web applications. With experience in modern 
              web technologies, I bring ideas to life through clean code and 
              intuitive design.
            </p>
          </div>
          
          <div className="relative h-80 w-80 rounded-lg overflow-hidden border border-neutral-800">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/20 to-neutral-900/30" />
            <img
              src="/profile.jpeg"
              alt="Portrait"
              className="h-115 w-full object-cover"
            />
          </div>
        </div>

        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "25+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy Clients", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-4 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-colors"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div> */}
      </motion.div>
    </section>
  );
};

export default About;

