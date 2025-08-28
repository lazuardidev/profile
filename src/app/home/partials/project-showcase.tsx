"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolios = [
  {
    title: "Portofolio 1",
    category: "Landing Page",
    image: "/images/projects/porto1.png",
  },
  {
    title: "Portofolio 2",
    category: "Landing Page",
    image: "/images/projects/porto2.png",
  },
  {
    title: "Portofolio 3",
    category: "Landing Page",
    image: "/images/projects/porto3.png",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="bg-black text-white px-6 py-20 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolios.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <AspectRatio
                ratio={9 / 13}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
              <div className="text-left">
                <p className="text-sm text-orange-500 font-medium">
                  {item.category}
                </p>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
