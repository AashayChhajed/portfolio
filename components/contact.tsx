"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/AashayChhajed",
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/aashay-chhajed",
      color: "hover:text-blue-400",
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 md:p-10 backdrop-blur-sm">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's work together
            </h3>
            <p className="text-neutral-300 leading-relaxed max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through email or connect with me on social media.
            </p>

            <motion.a
              href="mailto:chhajedaashay@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </motion.a>

            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold text-white">
                Connect with me
              </h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg border border-neutral-800 text-neutral-400 transition-all ${social.color} hover:border-neutral-600`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Aashay Chhajed. All rights reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
