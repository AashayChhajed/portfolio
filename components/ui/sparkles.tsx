"use client";
import React, { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    className,
    particleColor = "#FFF",
  } = props;
  const [particles, setParticles] = useState<any[]>([]);
  const generatedId = useId();
  const effectId = id || generatedId;

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          duration: Math.random() * 2 + 1,
          delay: Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [maxSize, minSize, particleDensity]);

  return (
    <div className={className}>
      <svg className="w-full h-full absolute inset-0">
        <defs>
          <filter id={`blur-${effectId}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
        </defs>
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particleColor}
            filter={`url(#blur-${effectId})`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background }}
      />
    </div>
  );
};