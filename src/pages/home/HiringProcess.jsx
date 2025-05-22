import React from "react";

const HiringProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Talent Recruitment",
      description:
        "We select candidates and only start the process of bringing them to Croatia when we are sure that we have found a suitable worker.",
      image: "/images/Off2work/talent-recruitment.jpg",
    },
    {
      id: 2,
      title: "Work Permits",
      description:
        "The process of bringing workers to your location typically takes around 90 days. While we handle the logistics, certain steps are managed by government authorities in compliance with local laws.",
      image: "/images/Off2work/work-permits.jpg",
    },
    {
      id: 3,
      title: "Employment and adaptation",
      description:
        "Our support doesn’t stop at hiring. We remain by your side throughout the entire process, acting as a bridge between you and your new employees to ensure a smooth transition and adaptation.",
      image: "/images/Off2work/employment-and-adaptation.jpg",
    },
  ];
  return (
    <section className="max-w-[1250px] mx-auto py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-[#3E4247] mb-12 max-w-[600px] mx-auto">
        We Guide You Through Every Step of the Hiring Process
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl max-w-[400px] mx-auto hover:translate-y-2 transition-transform duration-500 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-[#023a51] my-3">
              {step.title}
            </h3>
            <div className="relative">
              <img
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="border border-gray-400 mt-4"></div>

            <p className="text-gray-900 font-medium mt-2 text-base text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiringProcess;
