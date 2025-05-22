import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#3E4247] uppercase mb-12"
      >
        All the services in one place
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-screen-lg mx-auto"
      >
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 border-b border-red-400 pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <FileText className="w-8 h-8 text-[#642D91]" />
              </div>
              <h3 className="text-xl font-bold text-[#023a51]">
                Hire Talent-Trained Workers
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Let us handle the search, selection, and recruitment of skilled,
                motivated professionals who align with your business goals and
                culture.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 border-b border-red-400 pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <TrendingUp className="w-8 h-8 text-[#642D91]" />
              </div>
              <h3 className="text-xl font-bold text-[#023a51]">
                Work Permit Assistance
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                We take care of the entire documentation process, including
                visas, work permits, residency permits, and employment
                contracts, ensuring full compliance with local laws.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4 border-b border-red-400 pb-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <ShieldCheck className="w-8 h-8 text-[#642D91]" />
              </div>
              <h3 className="text-xl font-bold text-[#023a51]">
                Your Trusted Workforce Partner
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                From talent sourcing to onboarding, our experts manage every
                step of the hiring process, so you can focus on growing your
                business.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex items-center justify-center mb-16">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/services"
            className="bg-[#3E4247] hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-medium transition-colors duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-lg p-8 text-center max-w-[600px] mx-auto"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-[#3E4247] mb-4">
          Your Trusted Partner in Workforce Solutions
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          Rely on our experts to manage the entire process—from selecting and
          recruiting to employing skilled foreign workers. We ensure seamless
          integration and compliance, so your business thrives.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/services"
            className="bg-[#3E4247] hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-medium transition-colors duration-300"
          >
            Discover Our Services
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
