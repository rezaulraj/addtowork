import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
const FAQSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqData = [
    {
      question:
        "What are the obligations of an agency for the employment of foreign workers?",
      answer: (
        <ul className="list-disc pl-5">
          <li>
            Finding suitable workers based on your criteria, conducting
            selection procedures, and preparing necessary documentation.
          </li>
          <li>
            Submitting all required documents to obtain temporary residence and
            work permits for foreign workers.
          </li>
          <li>Covering travel insurance costs for workers.</li>
          <li>Assisting with visa applications for residence and work.</li>
          <li>
            Arranging and covering the cost of flight tickets for workers.
          </li>
        </ul>
      ),
    },
    {
      question: "What are my obligations as an employer?",
      answer: (
        <p>
          Provide accommodation and meals for workers upon their arrival.
          Accommodation must meet minimum living standards, and if meals are not
          provided, a food allowance must be paid. Register workers for pension
          and health insurance, just like local employees.
        </p>
      ),
    },
    {
      question:
        "What conditions must I meet to obtain a residence and work permit?",
      answer: (
        <ul className="list-disc pl-5">
          <li>
            Conduct economic activity in a field registered in the country.
          </li>
          <li>
            Employ at least 1/4 Croatian citizens compared to foreign workers,
            on a full-time and indefinite basis for the past 6 months.
          </li>
          <li>
            Provide a certificate from the Tax Administration confirming no
            outstanding public debts, dated no earlier than the permit
            application submission.
          </li>
          <li>
            Ensure no final convictions for labor-related or social security
            offenses.
          </li>
        </ul>
      ),
    },
    {
      question: "Can the worker come immediately?",
      answer: (
        <ul className="list-disc pl-5">
          <p>
            No. For third-country nationals, a work permit and visa are
            required, which can take 45 to 90 days depending on the efficiency
            of relevant institutions.
          </p>
          <li>Document preparation: 4–10 days (employer-dependent).</li>
          <li>
            Recruitment and selection: 1–30 days (up to 60 days for specialized
            roles).
          </li>
          <li>Labor market test (if applicable): 15 days.</li>
          <li>Work permit processing: 15–30 days.</li>
          <li>Visa processing: 15–30 days.</li>
          <li>Travel arrangements: 1–10 days.</li>
        </ul>
      ),
    },
  ];

  return (
    <div id="faq" className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#3D4147]">
        Most Common Questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => toggleSection(index)}
            >
              <span className="mr-4 text-white text-xl w-6 text-center border rounded bg-[#3D4147] hover:bg-red-500">
                {openSection === index ? <FaMinus className="p-1"/> : <FaPlus className="p-1"/>}
              </span>
              <h3
                className={`text-lg font-medium ${
                  openSection === index ? "" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h3>
            </div>
            {openSection === index && (
              <div className="mt-3 text-gray-700 pl-10">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection