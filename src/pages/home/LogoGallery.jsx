import React from "react";
import { motion } from "framer-motion";
const logos = [
  { src: "/images/logos/AgroNeretva_Logo.png", alt: "Agro Nerevo" },
  { src: "/images/logos/dalisdoo.jpg", alt: "Dalis d.o.o." },
  { src: "/images/logos/dam_logotip.jpg", alt: "Dam" },
  { src: "/images/logos/demateh-reference.jpg", alt: "Demateh" },
  { src: "/images/logos/ekos_cakes-1.png", alt: "Ekos Cakes" },
  { src: "/images/logos/enna_fruit.png", alt: "Enna Fruit" },
  { src: "/images/logos/hotel_pinija.png", alt: "Hotel Pinija" },
  { src: "/images/logos/konzum.webp", alt: "Konzum" },
  { src: "/images/logos/logo_jasenska.png", alt: "Jasenska" },
  { src: "/images/logos/mirna_rovinj-2.png", alt: "Mirna Rovinj" },
  { src: "/images/logos/moslavina_voce.png", alt: "Moslavina Voce" },
  { src: "/images/logos/naturala.png", alt: "Naturala" },
  { src: "/images/logos/opgcajkulic.jpg", alt: "Dan" },
  { src: "/images/logos/pik-vrbovec.png", alt: "Pik Vrbovec" },
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
