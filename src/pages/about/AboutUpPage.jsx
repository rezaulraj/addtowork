import React, { useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import LogoGallery from "../home/LogoGallery";
import ImageShowCase from "./ImageShowCase";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const AboutUpPage = () => {
  const { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen pt-4 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] flex items-center justify-center overflow-hidden p-4"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Off2work/1x/asset2.png')",
            transform: "translateZ(0)",
          }}
        />

        <div className="absolute inset-0 bg-gray-700/10 z-0"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-screen-md mx-auto min-h-[400px] space-y-4 mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl relative z-20"
        >
          <motion.p
            className="text-2xl text-[#023a51] my-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            {t("aboutus.abouth")}
          </motion.p>
          <motion.p
            className="text-4xl md:text-5xl text-[#023a51] font-bold my-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t("aboutus.aboutsh")}
          </motion.p>
          <motion.p
            className="text-xl text-foreground-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {t("aboutus.aboutp")}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <ImageShowCase />
      </motion.div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 uppercase mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutus.absubh")}
          </motion.h2>

          <motion.div
            className="max-w-screen-md mx-auto space-y-6 rounded-md p-6 bg-white shadow-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-lg font-medium text-gray-700"
              variants={itemVariants}
            >
              {t("aboutus.absubp1")}
            </motion.p>

            <motion.p
              className="text-lg font-medium text-gray-700"
              variants={itemVariants}
            >
              {t("aboutus.absubp2")}
            </motion.p>

            <motion.div
              className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-8 h-8 text-[#673190] flex-shrink-0 mt-1" />
              <p className="text-lg font-medium text-gray-700">
                {t("aboutus.absubp3")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <LogoGallery />
      </motion.div>

      <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 py-16">
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 uppercase mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutus.mv")}
          </motion.h2>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="glassmorphism-card p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t("aboutus.misstionh")}
              </h2>
              <p className="text-gray-700 mb-6">{t("aboutus.missionp1")}</p>
              <div className="space-y-4">
                <motion.div
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t("aboutus.missionp2")}</p>
                </motion.div>
                <motion.div
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t("aboutus.missionp3")}</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glassmorphism-card p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t("aboutus.visstionh")}
              </h2>
              <p className="text-gray-700 mb-6">{t("aboutus.vissionp1")}</p>
              <div className="space-y-4">
                <motion.div
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t("aboutus.vissionp2")}</p>
                </motion.div>
                <motion.div
                  className="flex gap-3 items-start"
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#673190] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t("aboutus.vissionp3")}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUpPage;
