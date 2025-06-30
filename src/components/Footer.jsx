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
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" bg-gray-100 ">
      <div className="max-w-screen-2xl mx-auto  py-8 px-6 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to={"/"}>
              <img
                src="/images/off2worklogo.png"
                alt="Logo"
                width={140}
                height={40}
              />
            </Link>
            <div className="flex items-center gap-2 mt-3">
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
              <Link
                to={"https://x.com/off2_work"}
                className="  "
                target="_blank"
              >
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
            <p className="mt-4 text-xl text-[#262930]">
              {t("footer.footert1")}
            </p>
            <p className="mt-1 text-base text-[#262930]">
              {t("footer.footert2")}
            </p>
          </div>

          <div className="flex text-xl justify-evenly gap-4 space-y-2 text-[#063556]">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">
                {" "}
                {t("footer.fquilern")}
              </h2>

              <div className="flex flex-col space-y-4">
                <Link
                  to="/services/hires"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  {t("footer.service")}
                </Link>
                <Link
                  to="/areas-of-work"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  {t("footer.areow")}
                </Link>
                <Link
                  to="/client-success-stories"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  {t("footer.clents")}
                </Link>
                <Link
                  to="/about-us"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  {t("footer.abous")}
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold">{t("footer.support")}</h2>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/contact/#faq"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  {t("footer.faqs")}
                </Link>
                <Link
                  to="/contact"
                  className="hover:border-b-2 hover:border-[#063556]"
                >
                  {t("footer.cdum")}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl text-[#023a51] font-semibold">
              {t("footer.address")}
            </h3>
            <p className="text-lg font-bold text-[#555f70] flex items-center gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              Romania Office HQ
            </p>
            <Link href={""} className="text-base text-[#262930]">
              Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc C4, Ap. 71,
              Judet Prahova
            </Link>
            <p className="text-lg text-[#555f70] font-bold flex items-center mt-2 gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              New Zealand
            </p>
            <Link href={""} className="text-base text-[#262930]">
              Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037
            </Link>

            <p className="text-lg text-[#555f70] font-bold flex items-center mt-2 gap-3">
              <span>
                <MapPinCheckInside />
              </span>
              Australia
            </p>
            <Link href={""} className="text-base text-[#262930]">
              Level 25, 108 St Georges Terrace, PerthWA 6000
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-300 text-sm text-gray-500 pt-4">
          <p>©2025 • Powered by Off2 Work</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
