import React, { useState } from "react";
import { Clock, Send, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./staggerContainer";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const [workerCount, setWorkerCount] = useState(1);
  const { t } = useTranslation();
  const handleSliderChange = (value) => {
    setWorkerCount(value[0]);
  };

  return (
    <section
      id="get-in-touch"
      className="bg-black bg-gradient-to-br from-[#063556] to-gray-900 overflow-hidden"
    >
      <div
        style={{
          backgroundImage: "url('/images/download.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-auto flex justify-center items-center py-16"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="max-w-7xl mx-auto bg-[#3E4247]/90 backdrop-blur-sm rounded-2xl px-6 md:px-20 mb-12 py-16 grid md:grid-cols-2 gap-12 shadow-2xl border border-gray-700/50"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-gray-200 space-y-8"
          >
            <motion.h2
              variants={textVariant(0.1)}
              className="text-4xl font-bold leading-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            >
              {t("contact.homelocationh")}
            </motion.h2>

            <div className="flex flex-col space-y-4">
              <p className="font-bold text-xl">{t("contact.officel")}</p>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <p className="text-lg font-bold text-gray-300 flex items-center gap-3">
                    <span className="text-blue-400">
                      <MapPin />
                    </span>
                    Romania Office HQ
                  </p>
                  <Link href={""} className="text-lg text-gray-400 ">
                    Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc C4,
                    Ap. 71, Judet Prahova
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <p className="text-lg text-gray-300 font-bold flex items-center gap-3">
                    <span className="text-blue-400">
                      <MapPin />
                    </span>
                    New Zealand
                  </p>
                  <Link href={""} className="text-lg text-gray-300 ">
                    Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <p className="text-lg text-gray-300 font-bold flex items-center gap-3">
                    <span className="text-blue-400">
                      <MapPin />
                    </span>
                    Australia
                  </p>
                  <Link href={""} className="text-lg text-gray-300 ">
                    Level 25, 108 St Georges Terrace, Perth WA 6000
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-lg bg-gray-800/50"
            >
              <p className="font-semibold text-xl mb-3">Contact Info:</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                  info@yourcompany.com
                </p>
                <p className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400" />
                  +123-456-7890
                </p>
              </div>
            </motion.div> */}

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-lg bg-gray-800/50"
            >
              <p className="font-semibold text-gray-300 text-xl mb-3">
                Working Hours
              </p>
              <div className="flex items-center gap-4 text-gray-200">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p>Monday - Friday</p>
                  <p>8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="bg-white rounded-xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full"></div>

            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 mb-5">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#063556] text-3xl font-bold"
                >
                  {t("contact.contactget")}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center font-medium text-[#063556]"
                >
                  {t("contact.hometouch")}
                </motion.p>
              </div>

              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-gray-700">
                      {t("contact.name")} *
                    </label>
                    <input
                      id="fullName"
                      placeholder={t("contact.name")}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-gray-700">
                      {t("contact.phone")} *
                    </label>
                    <input
                      id="mobile"
                      placeholder="091 234 5678*"
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      {t("contact.email")}*
                    </label>
                    <input
                      id="email"
                      placeholder="ime@mail.com*"
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-gray-700">
                      {t("contact.conpany")} *
                    </label>
                    <input
                      id="company"
                      placeholder={t("contact.conpany")}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700">
                    {t("contact.employee")} *
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-700 inline-block border px-4 py-2 border-gray-300 rounded-l-lg mr-0">
                      {workerCount}
                    </span>
                    <input
                      type="range"
                      min="1"
                      max="150"
                      value={workerCount}
                      onChange={(e) => setWorkerCount(e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-700">
                    {t("contact.textare")}
                  </label>
                  <textarea
                    id="message"
                    placeholder={t("contact.textare")}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#063556] to-[#0a5485] hover:from-[#0a5485] hover:to-[#063556] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" /> {t("contact.contactbtn")}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
