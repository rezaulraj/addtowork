import { Routes, Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import Hires from "./pages/services/Hires";

import AeraOfWork from "./pages/industries/AeraOfWork";
import Referemces from "./pages/references/Referemces";
import AboutUpPage from "./pages/about/AboutUpPage";
import Contact from "./pages/contact/Contact";
import TrustedWorkForce from "./pages/services/TrustedWorkForce";
import WorkPermit from "./pages/services/WorkPermit";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval;

    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    };

    const handleComplete = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300); // Small delay for smooth transition
    };

    handleStart();
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-screen bg-white flex items-center justify-center">
  //       <div className="relative w-48 h-48">
  //         <svg className="w-full h-full" viewBox="0 0 100 100">
  //           <circle
  //             cx="50"
  //             cy="50"
  //             r="45"
  //             fill="none"
  //             stroke="#289fd7"
  //             strokeWidth="8"
  //           />
  //           <motion.circle
  //             cx="50"
  //             cy="50"
  //             r="45"
  //             fill="none"
  //             stroke="#fbb92e"
  //             strokeWidth="8"
  //             strokeLinecap="round"
  //             initial={{ strokeDashoffset: 283 }}
  //             animate={{
  //               strokeDashoffset: 283 - (283 * progress) / 100,
  //             }}
  //             transition={{ duration: 0.3 }}
  //             strokeDasharray="283"
  //             transform="rotate(-90 50 50)"
  //           />
  //         </svg>

  //         <div className="absolute inset-0 flex items-center justify-center">
  //           <motion.img
  //             src={logo}
  //             alt="Loading"
  //             width={130}
  //             height={60}
  //             initial={{ scale: 0.8, opacity: 0 }}
  //             animate={{ scale: 1, opacity: 1 }}
  //             transition={{
  //               type: "spring",
  //               stiffness: 100,
  //               damping: 10,
  //               delay: 0.1,
  //             }}
  //           />
  //         </div>
  //         <motion.div
  //           className="absolute bottom-0 left-0 right-0 text-center"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 0.2 }}
  //         >
  //           <span className="text-gray-900 font-medium">{progress}%</span>
  //         </motion.div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/hires" element={<Hires />} />
        <Route
          path="/services/trustedworkforce"
          element={<TrustedWorkForce />}
        />
        <Route path="/services/workpermit" element={<WorkPermit />} />
        <Route path="/areas-of-work" element={<AeraOfWork />} />
        <Route path="/client-success-stories" element={<Referemces />} />
        <Route path="/about-us" element={<AboutUpPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
