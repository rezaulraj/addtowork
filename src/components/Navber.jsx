import React, { useState, useEffect } from "react";
import { ChevronDown, Phone, Menu, X, Mail, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const isScrolled = useIsScrolled();

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country === "HR" && i18n.language !== "hr") {
          i18n.changeLanguage("hr");
        }
      } catch (error) {
        console.error("Country detection failed, defaulting to English");
      }
    };

    detectCountry();
  }, [i18n]);

  const navItems = [
    { title: t("menu.home"), href: "/" },
    {
      title: t("menu.services"),
      href: "/services",
      children: [
        { title: t("services.hire_talent"), href: "/services/hires" },
        { title: t("services.work_permit"), href: "/services/workpermit" },
        { title: t("services.workforce"), href: "/services/trustedworkforce" },
      ],
    },
    { title: t("menu.areas"), href: "/areas-of-work" },
    { title: t("menu.success"), href: "/client-success-stories" },
    { title: t("menu.about"), href: "/about-us" },
  ];

  const currentPath = location.pathname;

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1250px] mx-auto py-2 px-4">
        <div className="flex flex-col lg:flex-row gap-14 lg:items-center">
          <div className="flex items-center justify-between py-2 lg:py-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/off2worklogo.png"
                alt="Logo"
                width={160}
                height={80}
              />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#0f2a47] hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`${isOpen ? "block" : "hidden lg:block"} w-full`}>
            
            {!isScrolled && (
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-2 ">
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 mb-2 lg:mb-0 border-b border-gray-200 py-3">
                  <Link
                    to="/contact/#location"
                    className="text-sm text-[#0f2a47] hover:underline"
                  >
                    {t("header.location")}
                  </Link>
                  <Link
                    to="/contact/#faqs"
                    className="text-sm text-[#0f2a47] hover:underline"
                  >
                    {t("header.faq")}
                  </Link>
                </div>

                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 border-b border-gray-200 py-3">
                  <Link
                    to="tel:094583948"
                    className="flex items-center text-sm text-[#0f2a47] hover:underline"
                  >
                    <Phone className="mr-1 h-4 w-4" />
                    {t("header.call_us")}
                  </Link>
                  <Link
                    to="mailto:info@thconsulting.hr"
                    className="flex items-center text-sm text-[#0f2a47] hover:underline"
                  >
                    <Mail className="mr-1 h-4 w-4" />
                    {t("header.contact")}
                  </Link>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => i18n.changeLanguage("en")}
                      className={`${
                        i18n.language === "en"
                          ? "border-b-2 border-[#0f2a47]"
                          : ""
                      }`}
                    >
                      <img
                        src="/images/en_GB.png"
                        alt="English"
                        width={28}
                        height={20}
                      />
                    </button>
                    <button
                      onClick={() => i18n.changeLanguage("hr")}
                      className={`${
                        i18n.language === "hr"
                          ? "border-b-2 border-[#0f2a47]"
                          : ""
                      }`}
                    >
                      <img
                        src="/images/hr.png"
                        alt="Hrvatski"
                        width={28}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            
            <nav className="bg-white py-2">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                {navItems.map((item, index) => (
                  <div key={item.title} className="relative">
                    {item.children ? (
                      <>
                       
                        <div className="hidden lg:block relative group">
                          <div className="flex items-center space-x-1 py-2 text-[#0f2a47] hover:text-blue-600 cursor-pointer">
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                          <div className="absolute left-0 mt-0 hidden group-hover:block w-[300px] bg-white shadow-lg z-50 border border-gray-200 rounded">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block px-4 py-2 text-[#0f2a47] hover:bg-gray-50 hover:text-blue-600"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                       
                        <div className="lg:hidden">
                          <button
                            onClick={() => toggleSubmenu(index)}
                            className={`flex items-center justify-between w-full py-3 text-[#0f2a47] hover:text-blue-600 ${
                              currentPath === item.href ||
                              item.children.some(
                                (child) => currentPath === child.href
                              )
                                ? "font-bold border-b-2 border-[#0f2a47]"
                                : ""
                            }`}
                          >
                            <span>{item.title}</span>
                            <ChevronRight
                              className={`h-4 w-4 transition-transform ${
                                openSubmenu === index ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`${
                              openSubmenu === index ? "block" : "hidden"
                            } pl-4 space-y-2`}
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className={`block py-2 px-3 text-[#0f2a47] hover:bg-gray-100 rounded ${
                                  currentPath === child.href
                                    ? "font-medium bg-gray-100"
                                    : ""
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block py-2 text-[#0f2a47] hover:text-blue-600 ${
                          currentPath === item.href
                            ? "font-bold border-b-2 border-[#0f2a47]"
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="inline-block bg-[#0f2a47] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-2 lg:mt-0"
                  onClick={() => setIsOpen(false)}
                >
                  {t("header.contact_us")}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
