import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "./staggerContainer";
import { useTranslation } from "react-i18next";

const WorkerSection = () => {
  const { t } = useTranslation();
  const features = [
    t("home.partnerl1"),
    t("home.partnerl2"),
    t("home.partnerl3"),
  ];

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src="/images/Off2work/1x/asset2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, x: Math.random() * 1000, opacity: 0 }}
              animate={{
                y: 1000,
                opacity: [0, 0.3, 0],
                transition: {
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                },
              }}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-[#3E3F48]/90 relative z-20 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-4xl font-bold mb-6"
          >
            {t("home.seasonalwh")}
          </motion.h2>
          <motion.p
            variants={textVariant(0.4)}
            className="mb-8 text-lg leading-relaxed"
          >
            {t("home.seasonalwp")}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#023a51] hover:bg-[#035b7a] text-xl cursor-pointer hover:shadow-xl transition-all duration-300 text-white px-8 py-4 rounded-lg uppercase font-medium tracking-wide shadow-lg"
            onClick={() => {
              const section = document.querySelector("#get-in-touch");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("home.seasonalwbtn")}
          </motion.button>
        </motion.div>

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-lg"></div>
            <img
              src="/images/Off2work/seasonal-workers-from-our-network.jpeg"
              alt="Seasonal Workers"
              width={500}
              height={300}
              className="rounded-lg shadow-2xl relative transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.section>

      <section className="relative z-20 py-16 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-evenly bg-white">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 left-20 w-40 h-40 bg-[#023a51]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <img
              src="/images/Off2work/your-partner-in-boosting-productivity-and-growth.jpg"
              alt="Productivity Partner"
              width={400}
              height={300}
              className="relative rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-[400px] text-center md:text-start mt-12 md:mt-0"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#023a51]">
            {t("home.partnerh")}
          </h2>
          <p className="mb-8 text-lg text-gray-700 bg-gray-100/50 rounded-md p-4 leading-relaxed">
            {t("home.partnerp")}
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle2 className="text-[#023a51] w-7 h-7 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-20 bg-gradient-to-r from-[#3E3F48] to-[#023a51] text-white py-16 px-6 md:px-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="md:w-2/3 text-center md:text-left mb-10 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-6">{t("home.liveInterh")}</h2>
            <p className="mb-8 text-lg leading-relaxed max-w-2xl">
              {t("home.liveInterp")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="md:w-1/3 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6"
          >
            <div className="">
              {/* <h3 className="text-2xl font-semibold mb-4">
                {t("home.liveInterc")}
              </h3> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#023a51] hover:bg-gray-100 px-8 py-3 uppercase rounded-lg font-bold tracking-wide shadow-md transition-all text-xl inline-block duration-300 cursor-pointer"
                onClick={() => {
                  const section = document.querySelector("#get-in-touch");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("home.getint")}
              </motion.button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-white/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <img
                src="/images/Off2work/live-interview-service.jpg"
                alt="Live Interview"
                width={200}
                height={150}
                className="relative rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-10 left-10 w-8 h-8 bg-blue-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="absolute top-1/4 right-20 w-6 h-6 bg-white rounded-full opacity-20"
        />
      </motion.section>
    </div>
  );
};

export default WorkerSection;
