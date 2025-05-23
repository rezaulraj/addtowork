import { Routes, Route, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      setTimeout(() => setIsLoading(false), 300);
    };

    handleStart();
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="relative w-48 h-48">
          {/* Square outline */}
          <div className="absolute inset-0 border-4 border-gray-200"></div>

          {/* Animated progress square */}
          <motion.div
            className="absolute inset-0 border-4 border-primary"
            style={{
              clipPath: `polygon(0% 0%, ${progress}% 0%, ${progress}% 100%, 0% 100%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="/off2worklogo.png"
              alt="Loading"
              width={130}
              height={60}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.1,
              }}
            />
          </div>

          {/* Progress percentage */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gray-900 font-medium">{progress}%</span>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes location={location} key={location.pathname}>
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

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#6A3494] text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
        >
          <FaArrowUp className="animate-pulse size-6" />
        </button>
      )}
    </>
  );
}

export default App;
