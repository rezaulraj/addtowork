import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

import {
  FaLinkedin,
  FaYoutube,
  FaSquareTwitter,
  FaSquarePinterest,
} from "react-icons/fa6";
import { ArrowUpToLine, MapPinCheckInside } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-gray-100 ">
      <div className="max-w-screen-2xl mx-auto  py-8 px-6 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <Link to={"/"}>
              <img
                src="/images/off2worklogo.png"
                alt="Logo"
                width={140}
                height={40}
              />
            </Link>
            <p className="mt-4 text-xl text-[#262930]">
              Trust Off2 Work to Optimize Your Workforce
            </p>
            <p className="mt-1 text-base text-[#262930]">
              Rely on our expertise to help you organize and manage foreign
              workers efficiently, ensuring your business thrives.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex text-xl justify-evenly gap-4 space-y-2 text-[#063556]">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">Quick Links</h2>

              <div className="flex flex-col space-y-4">
                <Link
                  to="/services/hires"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Services
                </Link>
                <Link
                  to="/areas-of-work"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Area Of Work
                </Link>
                <Link
                  to="/client-success-stories"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Client Success Stories
                </Link>
                <Link
                  to="/about-us"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">Support</h2>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/contact/#faq"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  FAQs
                </Link>
                <Link
                  to="/contact"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  Contact Information
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-2">
            <h3 className="text-2xl text-[#023a51] font-semibold">Addresses</h3>
            <p className="text-lg font-bold text-[#616e84] flex items-center gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              Romania Office:
            </p>
            <Link href={""} className="text-base text-[#262930]">
              HQ {">"} Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc
              C4, Ap. 71, Judet Prahova
            </Link>
            <p className="text-lg text-[#616e84] font-bold flex items-center mt-2 gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              New Zealand:
            </p>
            <Link href={""} className="text-base text-[#262930]">
              Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037
            </Link>

            <p className="text-lg text-[#616e84] font-bold flex items-center mt-2 gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              Australia:
            </p>
            <Link href={""} className="text-base text-[#262930]">
              Level 25, 108 St Georges Terrace, Perth WA 6000
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex items-center flex-col gap-4 md:flex-row justify-between text-center border-t border-gray-300 text-sm text-gray-500 pt-4">
          <p>©2025 • Powered by Off2 Work</p>
          <div className="flex items-center gap-2">
            <Link
              to={"https://www.facebook.com/off2work"}
              target="_blank"
              className="  "
            >
              <FaFacebookSquare className="w-8 h-8 p-1 bg-gray-600 text-white hover:bg-blue-900 rounded-md hover:text-white hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl shadow-gray-400" />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/off2-work"}
              className="  "
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8 p-1 bg-gray-600 text-white hover:bg-blue-900 rounded-md hover:text-white hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl shadow-gray-400" />
            </Link>
            <Link to={"https://x.com/off2_work"} className="  " target="_blank">
              <FaSquareTwitter className="w-8 h-8 p-1 bg-gray-600 text-white hover:bg-blue-900 rounded-md hover:text-white hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl shadow-gray-400" />
            </Link>
            <Link
              to={"https://in.pinterest.com/off_2_work"}
              className="  "
              target="_blank"
            >
              <FaSquarePinterest className="w-8 h-8 p-1 bg-gray-600 text-white hover:bg-blue-900 rounded-md hover:text-white hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl shadow-gray-400" />
            </Link>
            <Link
              to={"https://www.youtube.com/@Off2Work"}
              className="  "
              target="_blank"
            >
              <FaYoutube className="w-8 h-8 p-1 bg-gray-600 text-white hover:bg-blue-900 rounded-md hover:text-white hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl shadow-gray-400" />
            </Link>
            <Link
              to={"https://www.tiktok.com/@off2.work"}
              className="  "
              target="_blank"
            >
              <AiFillTikTok className="w-8 h-8 p-1 bg-gray-600 text-white hover:bg-blue-900 rounded-md hover:text-white hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl shadow-gray-400" />
            </Link>
          </div>
          <Link
            to={"https://off2.work/"}
            className="block text-[#063556] hover:underline flex items-center"
          >
            off2.work.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
