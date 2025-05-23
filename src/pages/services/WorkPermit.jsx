import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, File, Handshake, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// const cardHover = {
//   hover: {
//     y: -10,
//     boxShadow:
//       "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//   },
// };

const WorkPermit = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const listData = [
    {
      listt: t("service.servicetaiblh1"),

      lists: [
        {
          list: t("service.servicetaiblh1l1"),
        },
        {
          list: t("service.servicetaiblh1l2"),
        },
        {
          list: t("service.servicetaiblh1l3"),
        },
        {
          list: t("service.servicetaiblh1l4"),
        },
      ],
    },
    {
      listt: t("service.servicetaiblh2"),
      lists: [
        {
          list: t("service.servicetaiblh2l1"),
        },
        {
          list: t("service.servicetaiblh2l2"),
        },
        {
          list: t("service.servicetaiblh2l3"),
        },
        {
          list: t("service.servicetaiblh2l4"),
        },
      ],
    },
    {
      listt: t("service.servicetaiblh3"),
      lists: [
        {
          list: t("service.servicetaiblh3l1"),
        },
        {
          list: t("service.servicetaiblh3l2"),
        },
        {
          list: t("service.servicetaiblh3l3"),
        },
        {
          list: t("service.servicetaiblh3l4"),
        },
      ],
    },
  ];

  const services = [
    {
      title: t("service.serviceexplorelh1"),
      description: t("service.serviceexplorelp1"),
      icon: <Users className="w-8 h-8 text-blue-600" />,
      buttonText: t("service.serviceexplorelbtn"),
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
      link: "#flexable-worksolutaion",
    },
    {
      title: t("service.serviceexplorelh2"),
      description: t("service.serviceexplorelp2"),
      icon: <File className="w-8 h-8 text-green-600" />,
      buttonText: t("service.serviceexplorelbtn"),
      gradient: "bg-gradient-to-br from-green-50 to-green-100",
      link: "#flexable-worksolutaion",
    },
    {
      title: t("service.serviceexplorelh3"),
      description: t("service.serviceexplorelp3"),
      icon: <Handshake className="w-8 h-8 text-purple-600" />,
      buttonText: t("service.serviceexplorelbtn"),
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
      link: "/client-success-stories",
    },
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
    <div className="min-h-screen pt-5 overflow-hidden">
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
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div> */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-start max-w-screen-md mx-auto h-[400px] mt-8 p-4"
        >
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl text-[#023a51] my-4"
          >
            {t("service.serviceworkph")}
          </motion.p>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-4xl md:text-5xl text-[#023a51] font-bold my-4"
          >
            {t("service.serviceworkpsh")}
          </motion.h1>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl text-gray-700"
          >
            {t("service.serviceworkpp")}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* When to Hire Section */}
      <div className="w-full bg-white max-w-screen-lg mx-auto my-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 text-center"
        >
          {t("service.serviceworkpsubh")}
          <span className="text-blue-600">
            {t("service.serviceworkpsubhh")}
          </span>{" "}
          {t("service.serviceworkpsubhl")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-[#023a51] to-[#3E4048] p-8 rounded-2xl shadow-xl"
        >
          {[
            {
              title: t("service.serviceworkpsublh1"),
              description: t("service.serviceworkpsublh1p"),
            },
            {
              title: t("service.serviceworkpsublh2"),
              description: t("service.serviceworkpsublh2p"),
            },
            {
              title: t("service.serviceworkpsublh3"),
              description: t("service.serviceworkpsublh3p"),
            },
            {
              title: t("service.serviceworkpsublh4"),
              description: t("service.serviceworkpsublh4p"),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="space-y-3 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <span className="flex items-center text-white gap-3 font-semibold text-xl">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowRight className="w-6 h-6 text-blue-300" />
                </motion.div>
                <h3>{item.title}</h3>
              </span>
              <p className="text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Tailored Section */}
      <div
        id="services-tailored"
        className="bg-gradient-to-b from-gray-50 to-white py-16"
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <h2
              id="flexable-worksolutaion"
              className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4"
            >
              {t("service.serviceworkpth")}
              <span className="text-blue-600">
                {t("service.serviceworkpthh")}
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              {t("service.serviceworkpthp")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {listData.map((list, indx) => (
              <motion.div
                key={indx}
                variants={itemVariants}
                whileHover="hover"
                // variants={cardHover}
                className="bg-white rounded-xl shadow-lg flex flex-col p-6 transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <h2 className="text-xl font-bold text-center text-gray-800 border-b-2 border-blue-100 pb-3 mb-4 group-hover:border-blue-300 transition-colors">
                  {list.listt}
                </h2>
                <ul className="space-y-4">
                  {list.lists.map((item, indx) => (
                    <motion.li
                      key={indx}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{item.list}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Explore Services Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              {t("service.expoloserhf")}
              <span className="text-blue-600">{t("service.expoloserhh")}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("service.expoloserhf")}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block"
            >
              <Link
                to="/areas-of-work/#services-area"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
              >
                <span>See more</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                // variants={cardHover}
                className={`${service.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-gray-100 group`}
              >
                {/* Animated border bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Link
                  to={service.link}
                  className="relative z-10 h-full flex flex-col"
                >
                  <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                    <span>{service.buttonText}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center space-x-4"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: item * 0.2,
                }}
                className={`w-3 h-3 rounded-full ${
                  item === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkPermit;
