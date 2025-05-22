import React from "react";
import HeroPage from "./HeroPage";
import ServicesSection from "./ServicesSection";
import LogoGallery from "./LogoGallery";
import WorkerSection from "./WorkerSection";
import HiringProcess from "./HiringProcess";
import ContactSection from "./ContactSection";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <ServicesSection />
      <LogoGallery />
      <WorkerSection />
      <HiringProcess />
      <ContactSection />
    </div>
  );
};

export default HomePage;
