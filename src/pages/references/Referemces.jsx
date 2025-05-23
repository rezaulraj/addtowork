import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  File,
  HardHat,
  Leaf,
  Link,
  Quote,
  Ship,
  Trees,
  User,
  Users,
} from "lucide-react";
import LogoGallery from "../home/LogoGallery";
import { useInView } from "react-intersection-observer";

const References = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      id: 1,
      title: "Talent Recruitment",
      icon: <Users className="w-8 h-8" />,
      description:
        "We conduct detailed interviews and assessments to ensure we find the right candidates. Only when we're confident in a match do we proceed with the hiring process.",
    },
    {
      id: 2,
      title: "Employment and Onboarding",
      icon: <Clipboard className="w-8 h-8" />,
      description:
        "Our support doesn't end with hiring. We remain by your side, acting as a bridge between you and your new employees to ensure a smooth transition.",
    },
    {
      id: 3,
      title: "Work Permits and Compliance",
      icon: <File className="w-8 h-8" />,
      description:
        "The process of bringing workers typically takes around 90 days. While we handle the logistics, certain steps are managed by government authorities in compliance with local laws.",
    },
  ];

  const industries = [
    {
      id: 1,
      title: "Agriculture",
      icon: <Leaf className="w-8 h-8" />,
      description:
        "We provide reliable workers for agriculture, crop farming, and livestock farming, supporting both family farms and business owners.",
      color: "from-green-100 to-green-50",
      hoverColor: "hover:from-green-200 hover:to-green-100",
      link: "/areas-of-work/#agriculture",
    },
    {
      id: 2,
      title: "Construction and Industry",
      icon: <HardHat className="w-8 h-8" />,
      description:
        "From carpenters and bricklayers to drivers and machine operators, we supply skilled workers for construction and industrial projects.",
      color: "from-amber-100 to-amber-50",
      hoverColor: "hover:from-amber-200 hover:to-amber-100",
      link: "/areas-of-work/#construction",
    },
    {
      id: 3,
      title: "Wood Industry",
      icon: <Trees className="w-8 h-8" />,
      description:
        "We help wood processing and manufacturing plants find qualified workers to meet their production needs.",
      color: "from-brown-100 to-brown-50",
      hoverColor: "hover:from-brown-200 hover:to-brown-100",
      link: "/areas-of-work/#wood",
    },
    {
      id: 4,
      title: "Shipbuilding",
      icon: <Ship className="w-8 h-8" />,
      description:
        "We recruit experienced welders and motivated workers for the shipbuilding industry.",
      color: "from-blue-100 to-blue-50",
      hoverColor: "hover:from-blue-200 hover:to-blue-100",
      link: "/areas-of-work/#shipbuilding",
    },
  ];

  const testimonials = [
    {
      text: "Off2 Work's professional approach and expertise gave us the assurance we needed to confidently hire foreign workers for our business. We look forward to a long and fruitful collaboration.",
      name: "Marko Jurić",
      company: "ABC Solutions",
    },
    {
      text: "Our partnership with Off2 Work in hiring over 200 skilled workers from Nepal for our agricultural operations in 2022 was seamless and efficient. Their deep understanding of foreign employment processes made all the difference.",
      name: "Ana Petrović",
      company: "Green Harvest Ltd.",
    },
    {
      text: "Thanks to Off2 Work, we've resolved our staffing challenges with ease. After just one season, we're confident in their ability to consistently provide motivated and reliable workers.",
      name: "Ivana Novak",
      company: "Family Farm Novak",
    },
    {
      text: "Off2 Work's expertise simplified the recruitment process for us. Their professionalism and dedication make them stand out in this field.",
      name: "Hrvoje Kovačić",
      company: "Kovačić Orchards",
    },
    {
      text: "The workers we hired through Off2 Work were diligent, dependable, and hardworking. Their step-by-step guidance was invaluable to ensuring smooth operations.",
      name: "Zoran Horvat",
      company: "Horvat Farms",
    },
    {
      text: "Off2 Work supported us throughout the entire process—from selecting candidates to managing documentation and providing post-arrival assistance. They've proven to be exceptional partners, and we continue to work with them successfully.",
      name: "Filip Matić",
      company: "NutriGrow Ltd.",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const IndustryCard = ({ industry }) => {
    return (
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 h-full ${industry.hoverColor}`}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-90 transition-all duration-500`}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="mb-6 p-4 rounded-full bg-white w-16 h-16 flex items-center justify-center"
          >
            {industry.icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {industry.title}
          </h3>
          <p className="text-gray-700 mb-6 flex-grow">{industry.description}</p>
          <motion.div
            initial={{ width: 48 }}
            whileHover={{ width: 96 }}
            className="h-1 bg-blue-600 mb-6"
          ></motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
          >
            <a href={industry.link}>Learn more</a>
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-5 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
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
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl text-[#023a51] my-4"
          >
            Client Success Stories
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl text-[#023a51] font-bold my-4"
          >
            Just some of the companies that have trusted us.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-foreground-muted"
          >
            Partnering with Off2 Work offers a simple, fast, and efficient way
            to access quality staff, saving you time and resources while
            providing a diverse pool of skilled candidates.
          </motion.p>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Clients' <span className="text-blue-600">Experiences</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join the ranks of satisfied employers who have found success with
              Off2 Work
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <Quote className="absolute top-6 right-6 text-blue-100 text-6xl" />

                <div className="relative z-10">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <User />
                      </motion.span>
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-blue-600">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronLeft className="text-blue-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronRight className="text-blue-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-center mt-16"
          >
            <a
              href={"/contact"}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              Contact us!
            </a>
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              We Guide You Through Every Step of the
              <span className="text-blue-600"> Hiring Process</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-4 h-1 w-24 bg-[#023a51] mx-auto origin-left"
            ></motion.div>
          </motion.div>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Step Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
              className="flex lg:flex-col justify-center gap-4 mb-8 lg:mb-0"
            >
              {steps.map((step) => (
                <motion.button
                  key={step.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-[#3E4247] text-white transform scale-110 shadow-lg"
                      : "bg-white text-[#023a51] border-2 border-blue-200 hover:bg-blue-50"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {activeStep > step.id ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : (
                    step.icon
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Content */}
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="relative h-[500px] md:h-64">
                <AnimatePresence mode="wait">
                  {steps.map(
                    (step) =>
                      activeStep === step.id && (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-6 bg-white rounded-xl shadow-md"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-[#3E4247] mb-4">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 flex-1">
                              {step.description}
                            </p>
                            <div className="flex justify-end mt-4">
                              <span className="text-[#3E4247] font-medium">
                                Step {step.id}/3
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className={`px-6 py-2 rounded-lg ${
                    activeStep === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                  disabled={activeStep === 3}
                  className={`px-6 py-2 rounded-lg ${
                    activeStep === 3
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#3E4247] text-white hover:bg-[#3E4247]"
                  }`}
                >
                  Next
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              We Find the <span className="text-blue-600">Ideal Staff</span> for
              Your Business
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized workforce solutions tailored to your industry needs
            </p>
          </motion.div>

          {/* Industry Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-center mt-16"
          >
            <a
              href={"/areas-of-work"}
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Industries
            </a>
          </motion.div>
        </div>
      </div>

      <LogoGallery />
    </div>
  );
};

export default References;
