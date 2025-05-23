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
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setIsLoading(true);
    };
    const handleComplete = () => {
      NProgress.done();
      setIsLoading(false);
    };

    handleStart();

    const timer = setTimeout(() => {
      handleComplete();
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#023047] flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-0 h-2 bg-[#e9c46a] animate-border-top"></div>
          <div className="absolute top-0 right-0 w-2 h-0 bg-[#e9c46a] animate-border-right"></div>
          <div className="absolute bottom-0 right-0 w-0 h-2 bg-[#e9c46a] animate-border-bottom"></div>
          <div className="absolute bottom-0 left-0 w-2 h-0 bg-[#e9c46a] animate-border-left"></div>
          <span className="absolute inset-0 flex items-center justify-center">
            <img
              src="/off2worklogo.png"
              alt="Loading"
              width={160}
              height={80}
            />
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#6A3494] text-white p-2 cursor-pointer rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="animate-pulse size-6" />
        </motion.button>
      )}
    </>
  );
}

export default App;
