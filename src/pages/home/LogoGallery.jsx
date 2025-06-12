import React from "react";
import { motion } from "framer-motion";
const logos = [
  { src: "/images/logos/l1.png", alt: "Image" },
  { src: "/images/logos/l2.png", alt: "Image" },
  { src: "/images/logos/l3.png", alt: "Image" },
  { src: "/images/logos/l4.png", alt: "Image" },
  { src: "/images/logos/l5.png", alt: "Image" },
  { src: "/images/logos/l6.png", alt: "Image" },
  { src: "/images/logos/l7.png", alt: "Image" },
  { src: "/images/logos/l8.png", alt: "Image" },
  { src: "/images/logos/l9.png", alt: "Image" },
  { src: "/images/logos/l10.png", alt: "Image" },
  { src: "/images/logos/l11.png", alt: "Image" },
  { src: "/images/logos/l12.jpeg", alt: "Image" },
  { src: "/images/logos/l13.png", alt: "Image" },
  { src: "/images/logos/l14.png", alt: "Image" },
];
const LogoGallery = () => {
  return (
    <section className="max-w-[1250px] mx-auto px-1 py-8 lg:py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-4 md:grid-cols-7 gap-6 place-items-center"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="w-full max-w-[150px] h-20 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={70}
              className="object-contain  transition-all duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LogoGallery;
