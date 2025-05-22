import { Send } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import FAQSection from "./FAQSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
    workerCount: 1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSliderChange = (value) => {
    setFormData(prev => ({ ...prev, workerCount: value[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen pt-5 overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] w-full flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Off2work/1x/asset2.png')",
            transform: "translateZ(0)"
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <motion.div 
          className="text-start max-w-screen-md mx-auto p-4 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.p 
            className="text-4xl text-white my-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            Contact us
          </motion.p>
          <motion.p 
            className="text-5xl text-white font-bold my-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Let&apos;s Get to Know Each Other
          </motion.p>
          <motion.p 
            className="text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Reach out to our team of experts for a no-obligation consultation
            tailored to your business needs.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="bg-white rounded-xl py-10 px-6 md:px-12 space-y-3 max-w-[700px] mx-auto shadow-2xl -mt-16 relative z-20"
      >
        <motion.div 
          className="pb-4"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-center text-[#3D4147]">
            Get in Touch
          </h2>
        </motion.div>

        {submitSuccess ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center"
          >
            <p>Thank you for your inquiry! We'll contact you shortly.</p>
          </motion.div>
        ) : (
          <motion.form 
            className="space-y-6"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-gray-600 font-medium">
                  Name and Surname *
                </label>
                <input
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name and Surname *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-gray-600 font-medium">
                  Mobile Phone Number *
                </label>
                <input
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="091 234 5678*"
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-600 font-medium">
                  Email*
                </label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ime@mail.com*"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-gray-600 font-medium">
                  Company Name *
                </label>
                <input
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label className="text-gray-600 font-medium">Number of Workers Needed? *</label>
              <div className="flex items-center space-x-4">
                <span className="inline-block border px-4 py-2 border-gray-300 rounded-lg bg-gray-50 font-medium min-w-[60px] text-center">
                  {formData.workerCount}
                </span>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={formData.workerCount}
                  onChange={(e) => handleSliderChange([parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </motion.div>

            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label htmlFor="message" className="text-gray-600 font-medium">
                Send an inquiry
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I need help with..."
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`w-full bg-[#3D4147] text-white py-3 rounded-3xl font-medium flex items-center justify-center transition-all ${isSubmitting ? 'opacity-70' : 'hover:bg-blue-700 hover:shadow-md'}`}
              variants={itemVariants}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> 
                </>
              )}
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </motion.button>
          </motion.form>
        )}
      </motion.div>

      {/* Office Location Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="max-w-screen-xl mx-auto px-4 md:px-2 mt-16 mb-8"
      >
        <motion.h2 
          className="font-bold text-3xl md:text-5xl max-w-md border-b-4 pb-2 border-[#404049]"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Look For The <span className="text-blue-600">Office Near</span> You
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <ContactInfo />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="mt-16"
      >
        <FAQSection />
      </motion.div>
    </div>
  );
};

export default Contact;