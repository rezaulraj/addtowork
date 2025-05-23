import React, { useEffect } from "react";
import ServicesSection from "../home/ServicesSection";
import LogoGallery from "../home/LogoGallery";
import ContactSection from "../home/ContactSection";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

const ServiceItem = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center text-[#003459] hover:text-[#00A8E8] transition-colors cursor-pointer"
    >
      <ChevronRight className="mr-2 text-red-700" />
      <span className="font-medium">{service}</span>
    </motion.div>
  );
};

const ImageCard = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/3 h-[300px] md:h-auto relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </motion.div>
  );
};

const TextCard = ({ title, description, services }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <h2 className="text-3xl font-bold text-[#003459] mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const AeraOfWork = () => {
  const location = useLocation();
  const services = [
    "Skilled workers in agriculture and livestock farming.",
    "Drivers for various categories.",
    "Support staff to assist with daily operations.",
  ];
  const services2 = [
    "Sawmill workers",
    "Furniture manufacturing workers",
    "Warehouse workers and forklift operators",
  ];
  const services3 = [
    "Reinforcement workers, masons, roofers, waterproofers, and painters.",
    "Forklift drivers and warehouse staff.",
    "Construction machinery operators and drivers of all categories.",
  ];
  const services4 = [
    "Welders, locksmiths, metalworkers",
    "Maids and cleaning staff.",
    "Caregivers and support personnel.",
  ];
  const services5 = [
    "Chefs, baristas, and waiters",
    "Housekeepers, cleaners",
    "Caregivers, support staff",
  ];
  const services6 = [
    "Workers in food processing and manufacturing.",
    "Textile industry specialists.",
    "Forklift operators, warehouse staff, and delivery personnel.",
  ];

  useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [location.hash]);

  return (
    <div className="min-h-screen pt-5 overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: "url('/images/Off2work/1x/asset2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[500px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-screen-md mx-auto h-[400px] mt-8 p-4">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-[#023a51] my-4"
          >
            Industries We Serve
          </motion.p>
          <motion.h1
            id="services-area"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl text-[#023a51] font-bold my-4"
          >
            We specialize in finding the ideal staff for your business.
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-foreground-muted"
          >
            Trust us to search, select, and recruit qualified workers tailored
            to your industry's needs.
          </motion.p>
        </div>
      </motion.div>

      {/* Agriculture Section */}
      <div id="agriculture" className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-transparent gap-4 mt-2 md:mt-20 -mb-10">
        <TextCard
          title="Agriculture."
          description="We provide reliable and motivated foreign workers for agriculture, crop farming, and livestock farming, supporting both family farms and business owners."
          services={services}
        />
        <ImageCard
          src="/images/Off2work/Area-of-Work/agriculture.jpg"
          alt="Agriculture"
        />
      </div>

      <div className="bg-[#3E3F49] h-[180px]" />

      {/* Wood Industry Section */}
      <div id="wood" className="max-w-[1000px] mx-auto flex flex-col md:flex-row flex-col-reverse gap-4 -mt-10 mb-8 md:mb-30">
        <ImageCard
          src="/images/Off2work/Area-of-Work/wood-industry.jpg"
          alt="Apples in wooden box"
        />
        <TextCard
          title="Wood industry."
          description="Through our network of trusted partners, we supply qualified workers for wood processing and manufacturing plants."
          services={services2}
        />
      </div>

      {/* Construction Section */}
      <div id="construction" className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-transparent gap-4 mt-30 -mb-10">
        <TextCard
          title="Construction and industry."
          description="We provide skilled workers for construction and industrial projects, sourced from reliable partners in countries like Uzbekistan."
          services={services3}
        />
        <ImageCard
          src="/images/Off2work/Area-of-Work/construction-and-industry.jpg"
          alt="construction-and-industry"
        />
      </div>

      <div className="bg-[#3E3F49] h-[180px]" />

      {/* Shipbuilding Section */}
      <div id="shipbuilding" className="max-w-[1000px] mx-auto flex flex-col md:flex-row flex-col-reverse gap-4 -mt-10 mb-8 md:mb-30">
        <ImageCard
          src="/images/Off2work/Area-of-Work/shipbuilding.jpeg"
          alt="shipbuilding"
        />
        <TextCard
          title="Shipbuilding."
          description="We recruit experienced welders and motivated workers for the shipbuilding industry."
          services={services4}
        />
      </div>

      {/* Tourism Section */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-transparent gap-4 mt-8 md:mt-30 -mb-10">
        <TextCard
          title="Tourism and Hospitality"
          description="We supply qualified workers for all positions in tourism and catering."
          services={services5}
        />
        <ImageCard
          src="/images/Off2work/Area-of-Work/tourism-and-hospitality.jpg"
          alt="tourism-and-hospitality"
        />
      </div>

      <div className="bg-[#3E3F49] h-[180px]" />

      {/* Production Section */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row flex-col-reverse gap-4 -mt-10 mb-8 md:mb-30">
        <ImageCard
          src="/images/Off2work/Area-of-Work/Production.jpg"
          alt="Production"
        />
        <TextCard
          title="Production."
          description="With the help of our reliable partners, we recruit workers in the food and processing industry and agriculture from all the countries with which we cooperate."
          services={services6}
        />
      </div>

      {/* Footer Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#3E3F49] h-[100px] text-center text-white flex items-center justify-center"
      >
        Just some of the companies that have entrusted us with their trust:
      </motion.div>

      <ServicesSection />
      <LogoGallery />
      <ContactSection />
    </div>
  );
};

export default AeraOfWork;
