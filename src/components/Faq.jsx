import Heading from "./Heading";
import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to use JOIN?",
    answer: "JOIN offers different pricing plans depending on your needs. Contact our sales team for more information.",
  },
  {
    question: "How can I set up my company account?",
    answer: "To set up a company account, go to the signup page and follow the instructions.",
  },
  {
    question: "How can I add new team members?",
    answer: "You can add team members by navigating to your account settings and clicking on 'Team Management'.",
  },
  {
    question: "How can I customize which person receives email notifications for new applications?",
    answer: "You can set the email preferences in the notifications section of your account settings.",
  },
  {
    question: "How can I adjust the subdomain of my company account?",
    answer: "To adjust the subdomain, contact support or go to the settings page and navigate to 'Subdomain Settings'.",
  },
];

const quadrantItems = [
  { id: 1, title: "Item 1", content: "Description for Item 1" },
  { id: 2, title: "Item 2", content: "Description for Item 2" },
  { id: 3, title: "Item 3", content: "Description for Item 3" },
  { id: 4, title: "Item 4", content: "Description for Item 4" },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-10">
      <div className="container mx-auto relative z-2 px-4">
        <Heading title="Frequently Asked Questions" />
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* FAQ Section */}
          <div className="flex flex-col gap-6 mb-10 max-w-2xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg text-n-5 font-medium">{faq.question}</span>
                  <span className="text-xl text-n-5">{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="pl-4 pr-2 pb-4 text-gray-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quadrant Section */}
          <div className="flex flex-wrap justify-between w-full max-w-lg h-auto">
            {quadrantItems.map((item) => (
              <div
                key={item.id}
                className="w-1/2 h-40 flex flex-col justify-center items-center text-center p-4"
              >
                <h4 className="font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;