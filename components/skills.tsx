"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Terminal,
  Palette,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
      icon: <Code2 className="h-6 w-6 text-neutral-500" />,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20" />
      ),
    },
    {
      title: "Backend Development",
      description: "Java, Spring Boot,Node.js, Express, REST APIs",
      icon: <Terminal className="h-6 w-6 text-neutral-500" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20" />
      ),
    },
    {
      title: "Database & Cloud",
      description: "MongoDB, PostgreSQL, Vercel",
      icon: <Database className="h-6 w-6 text-neutral-500" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20" />
      ),
    },
    // {
    //   title: "UI/UX Design",
    //   description: "Figma, Responsive Design, Accessibility",
    //   icon: <Palette className="h-6 w-6 text-neutral-500" />,
    //   className: "md:col-span-2",
    //   header: (
    //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20" />
    //   ),
    // },
    // {
    //   title: "Mobile Development",
    //   description: "React Native, Progressive Web Apps",
    //   icon: <Smartphone className="h-6 w-6 text-neutral-500" />,
    //   className: "md:col-span-1",
    //   header: (
    //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20" />
    //   ),
    // },
    {
      title: "Version Control",
      description: "Git, GitHub, CI/CD Pipelines",
      icon: <GitBranch className="h-6 w-6 text-neutral-500" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-500/10 to-gray-500/10 border border-slate-500/20" />
      ),
    },
    {
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript ES6+",
      icon: <Globe className="h-6 w-6 text-neutral-500" />,
      className: "md:col-span-1",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20" />
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Skills & Expertise
        </h2>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <BentoGridItem
              key={i}
              title={skill.title}
              description={skill.description}
              header={skill.header}
              icon={skill.icon}
              className={skill.className}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
};

export default Skills;