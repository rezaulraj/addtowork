import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, File, Handshake, Users } from "lucide-react";
import { Link } from "react-router-dom";

const listData = [
  {
    listt: "Hire Talent-Trained Workers",
    lists: [
      {
        list: "We manage the entire process of recruiting and onboarding foreign workers, ensuring a seamless experience for your business.",
      },
      { list: "End-to-end management of hiring and administrative processes." },
      {
        list: "Access to a diverse pool of candidates across various industries.",
      },
      {
        list: "Recruitment of skilled, motivated professionals tailored to your needs.",
      },
    ],
  },
  {
    listt: "Flexible Workforce Solutions",
    lists: [
      {
        list: "Hire foreign workers for specific periods with ease and flexibility.",
      },
      {
        list: "Workers come pre-equipped with valid residence and work permits.",
      },
      {
        list: "Simplified employment process with minimal administrative hassle.",
      },
      {
        list: "A wide range of candidates available for multiple industries and roles.",
      },
    ],
  },
  {
    listt: "Work Permit and Immigration Support",
    lists: [
      {
        list: "Already found your ideal candidate? Let us handle the administrative heavy lifting.",
      },
      {
        list: "Comprehensive support for work permits, visas, and legal compliance.",
      },
      {
        list: "Streamlined processes managed by experienced immigration experts.",
      },
      { list: "Ongoing assistance throughout the employment lifecycle." },
    ],
  },
];

const Hires = () => {
  const services = [
    {
      title: "Flexible Workforce Solutions",
      description:
        "Hire workers for specific projects or timeframes with ease.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Work Permit and Immigration Support",
      description:
        "We handle all documentation for foreign workers, ensuring compliance and efficiency.",
      icon: <File className="w-8 h-8 text-green-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      title: "Long-Term Staffing Partnerships",
      description:
        "Build lasting relationships with reliable workers for ongoing business needs.",
      icon: <Handshake className="w-8 h-8 text-purple-600" />,
      buttonText: "Learn More",
      gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
  ];

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

  const cardHover = {
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
};

  return (
    <div className="min-h-screen">
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
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-start max-w-screen-md mx-auto h-[400px] mt-8 p-4"
        >
          <p className="text-2xl text-[#023a51] my-4">
            Hire Talent-Trained Workers
          </p>
          <p className="text-4xl md:text-5xl text-[#023a51] font-bold my-4">
            End-to-End Recruitment Solutions
          </p>
          <p className="text-xl text-gray-700">
            We manage the entire process of hiring foreign workers. Trust us to
            find, select, and recruit motivated, skilled professionals tailored
            to your business needs.
          </p>
        </motion.div>
      </motion.div>

      {/* When to Hire Section */}
      <div className="w-full bg-white max-w-screen-lg mx-auto my-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 p-4"
        >
          When is{" "}
          <span className="text-blue-600"> Hiring Talent-Trained Workers </span>{" "}
          the Best Choice?
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
              title: "We Handle the Entire Hiring Process",
              description:
                "From sourcing to onboarding, we take care of everything, ensuring you get the right talent for your business.",
            },
            {
              title: "Access a Diverse Talent Pool",
              description:
                "Our extensive network and collaboration with local partners allow us to provide candidates with the skills and qualifications you need, across various industries.",
            },
            {
              title: "End-to-End Administration and Logistics",
              description:
                "We manage all aspects of hiring, from work permits and visas to transportation and onboarding, so you can focus on your business.",
            },
            {
              title: "Reliable, Fast, and Efficient Solutions",
              description:
                "We deliver qualified, motivated staff who are ready to meet your challenges and contribute to your success.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="space-y-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <span className="flex items-center text-white gap-3 font-semibold text-xl">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                <h3>{item.title}</h3>
              </span>
              <p className="text-lg text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Tailored Section */}
      <div id="service-tailored" className="bg-gray-200 py-10">
        <div className="max-w-screen-lg mx-auto p-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto my-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Choose A <span className="text-blue-600"> Service Tailored </span>
              To Your Business.
            </h2>
            <p className="text-lg text-center text-gray-600">
              Discover the advantages of our specialized services designed to
              meet your unique needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2"
          >
            {listData.map((list, indx) => (
              <motion.div
                key={indx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-md flex flex-col items-center justify-center hover:shadow-xl shadow-gray-300 transition-all duration-300 cursor-pointer space-y-4 px-3 py-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-center border-b-2 border-blue-200 pb-2">
                  {list.listt}
                </h2>
                <ul className="space-y-3">
                  {list.lists.map((item, indx) => (
                    <li key={indx} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 hover:text-blue-800 transition-colors">
                        {item.list}
                      </p>
                    </li>
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
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Explore Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we can help you build a skilled and reliable
              workforce.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Link
                to="/en/industries#service"
                className="px-8 py-3 inline-block bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 mx-auto"
              >
                <span className="flex items-center justify-center">
                  See more <ArrowRight className="ml-2" />
                </span>
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
                whileHover={{ y: -10 }}
                className={`${service.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative border border-gray-100`}
              >
                {/* Animated border bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    {service.buttonText}
                    <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                  </div>
                </div>
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
              <div
                key={item}
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

export default Hires;
