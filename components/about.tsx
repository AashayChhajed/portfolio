"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return <section id="about" className="section-rule scroll-mt-20 py-20 sm:py-28"><div className="grid gap-10 md:grid-cols-[180px_1fr]"><div><p className="eyebrow">01 / About</p></div><motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid items-start gap-9 lg:grid-cols-[1fr_240px]"><div><h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">I like turning complex workflows into clear, dependable experiences.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">My work sits across the full product stack—from responsive Next.js interfaces to durable APIs, databases, and automation. I care about the small details that make software feel calm, useful, and ready for real people.</p><a href="https://www.linkedin.com/in/aashay-chhajed" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 font-semibold transition hover:text-[var(--accent)] hover:border-[var(--accent)]">More about my journey <ArrowUpRight size={16} /></a></div><div className="relative"><div className="absolute -left-3 -top-3 h-full w-full border border-[var(--accent)]" /><img src="/assets/profile.jpeg" alt="Aashay Chhajed" className="relative aspect-square w-full object-cover grayscale transition duration-500 hover:grayscale-0" /></div></motion.div></div></section>;
}
