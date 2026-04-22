"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does AI interior design work?",
      answer:
        "Upload a photo of your room and choose a style. Our AI generates a redesigned interior based on your preferences.",
    },
    {
      question: "Is the design realistic?",
      answer:
        "Yes. The AI uses advanced generative models to produce realistic interior designs.",
    },
    {
      question: "Do I need design experience?",
      answer:
        "No. Anyone can use the tool. Just upload a photo and let AI generate ideas.",
    },
    {
      question: "Can I download the design?",
      answer:
        "Yes. You can download generated designs and use them for inspiration.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-white">
              <button
                className="w-full text-left px-6 py-4 font-semibold flex justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
