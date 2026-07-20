"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Berapa lama proses makeup?",
    answer: "Sekitar 1-2 jam tergantung jenis layanan.",
  },
  {
    question: "Apakah melayani home service?",
    answer: "Ya, tersedia layanan home service.",
  },
  {
    question: "Bagaimana cara booking?",
    answer: "Booking dapat dilakukan melalui WhatsApp.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-[#C98E82]">
            FAQ
          </p>

          <h2 className="text-5xl font-serif mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg mb-4"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full text-left p-5 font-semibold"
            >
              {faq.question}
            </button>

            {open === index && (
              <div className="px-5 pb-5 text-gray-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}