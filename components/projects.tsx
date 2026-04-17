"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Transport Optimizer",
      description:
        "A full-stack logistics optimization platform that computes the most cost-effective, time-efficient, and eco-friendly delivery routes using multiple transportation modes ",
      tags: ["Next.js", "Spring Boot", "PostgreSQL"],
      githubLink: "https://github.com/AashayChhajed/multimodal-transport-optimizer",
    },
    {
      title: "Restaurant Food Ordering System",
      description:
        "A full-stack food ordering system built using PHP & MySQL with: Customer menu + cart + multi-item checkout Order storage with relational tables Live updating kitchen dashboard Order status controls Admin panel for managing orders",
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      githubLink: "https://github.com/AashayChhajed/Restaurant-Food-Ordering-System",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var h-full" containerClassName="h-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full min-h-[18rem] rounded-xl p-6 border flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <CardItem
                        key={i}
                        translateZ="50"
                        as="span"
                        className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300"
                      >
                        {tag}
                      </CardItem>
                    ))}
                  </div>
                  <div className="flex justify-end items-center mt-auto pt-6">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-white dark:bg-white text-black text-xs font-bold flex items-center gap-2 hover:bg-neutral-200 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;