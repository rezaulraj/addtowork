import React from "react";
import { Clock, MapPinCheckInside } from "lucide-react";
const ContactInfo = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className=" rounded-lg overflow-hidden hover:scale-105 hover:shadow-md hover:translate-y-1 shadow-gray-300 transition-transform duration-500 border border-[#afb0b4]">
          <div className="h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.0421850710136!2d26.083187876096478!3d44.9428103680756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b235ee6192a277%3A0x638b818d90fe42de!2sBloc%20C4%2C%20Ap.%2071%2C%20Strada%20Mihai%20Bravu%20239%2C%20Ploie%C8%99ti%20100410%2C%20Romania!5e0!3m2!1sen!2sbd!4v1747725603564!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <div className=" text-start py-2 space-y-3">
              <div className="flex items-center gap-4">
                <MapPinCheckInside className="text-[#6587cf] size-5" />
                <p className="text-2xl font-bold text-[#6587cf] ">
                  Romania Office
                </p>
              </div>

              <p className="text-lg tracking-wider text-gray-500">
                HQ - Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc C4,
                Ap. 71, Judet Prahova
              </p>
              <hr />
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="bg-blue-50 rounded-full p-4 flex flex-col items-center justify-center w-16 h-16">
                    <Clock className="text-[#6587cf] w-8 h-8" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p className="font-bold">Monday – Friday</p>
                    <p>8:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg overflow-hidden hover:scale-105 hover:shadow-md hover:translate-y-1 shadow-gray-300 transition-transform duration-500 border border-[#afb0b4]">
          <div className="h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.844826053323!2d174.80450477623276!3d-41.225151936599566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38adc84ed527ed%3A0xe75c513a82f3c33a!2sLevel%201%2F3%20Johnsonville%20Road%2C%20Johnsonville%2C%20Wellington%206037%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1747725844128!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <div className=" text-start py-2 space-y-3">
              <div className="flex items-center gap-4">
                <MapPinCheckInside className="text-[#6587cf] size-5" />
                <p className="text-2xl font-bold text-[#6587cf] ">
                  New Zealand
                </p>
              </div>

              <p className="text-lg tracking-wider text-gray-500">
                Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037
              </p>
              <hr />
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="bg-blue-50 rounded-full p-4 flex flex-col items-center justify-center w-16 h-16">
                    <Clock className="text-[#6587cf] w-8 h-8" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p className="font-bold">Monday – Friday</p>
                    <p>8:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg overflow-hidden hover:scale-105 hover:shadow-md hover:translate-y-1 shadow-gray-300 transition-transform duration-500 border border-[#afb0b4]">
          <div className="h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2416664982293!2d115.85465307578193!3d-31.954339922463557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5de6852c1%3A0x2b092f23904c0a!2s100%20St%20Georges%20Terrace%2C%2025%2F108%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1747725932198!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <div className=" text-start py-2 space-y-3">
              <div className="flex items-center gap-4">
                <MapPinCheckInside className="text-[#6587cf] size-5" />
                <p className="text-2xl font-bold text-[#6587cf] ">Australia</p>
              </div>

              <p className="text-lg tracking-wider text-gray-500">
                Level 25, 108 St Georges Terrace, Perth WA 6000
              </p>
              <hr />
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="bg-blue-50 rounded-full p-4 flex flex-col items-center justify-center w-16 h-16">
                    <Clock className="text-[#6587cf] w-8 h-8" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p className="font-bold">Monday – Friday</p>
                    <p>8:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
