"use client";

import { useState } from "react";
import { Plus, X, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama proses makeup?",
    answer:
      "Durasi makeup berkisar antara 1-2 jam tergantung jenis layanan yang dipilih, seperti wedding, wisuda, engagement, atau party makeup.",
  },
  {
    question: "Apakah melayani home service?",
    answer:
      "Ya. Ayla Make Up menyediakan layanan home service untuk area Jakarta Timur dan sekitarnya. Biaya transportasi akan disesuaikan dengan lokasi.",
  },
  {
    question: "Bagaimana cara booking?",
    answer:
      "Booking dapat dilakukan melalui WhatsApp dengan mengirimkan tanggal acara, lokasi, jenis makeup yang diinginkan, dan jumlah orang yang akan dirias.",
  },
  {
    question: "Apakah harus DP terlebih dahulu?",
    answer:
      "Ya. Untuk mengamankan jadwal, booking akan diproses setelah pembayaran DP sesuai ketentuan yang berlaku.",
  },
  {
    question: "Bolehkah request style makeup tertentu?",
    answer:
      "Tentu. Kamu bisa mengirimkan referensi makeup yang diinginkan agar hasilnya sesuai dengan ekspektasi.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-linear-to-b from-white via-[#FFF8F6] to-white py-28"
    >
      {/* Background Blur */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#F8EAE5] blur-[120px] opacity-50" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#FDF2EE] blur-[130px] opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[5px] text-primary text-sm">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-serif">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Temukan jawaban dari beberapa pertanyaan yang paling sering
            ditanyakan sebelum melakukan booking layanan Ayla Make Up.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/60
                  bg-white/70
                  backdrop-blur-xl
                  shadow-md
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-8
                    py-6
                    text-left
                  "
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F8EAE5]
                        text-primary
                      "
                    >
                      ?
                    </div>

                    <h3 className="text-lg font-semibold">
                      {faq.question}
                    </h3>

                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F8EAE5]
                      text-primary
                    "
                  >
                    {isOpen ? (
                      <X size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>

                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ${
                      isOpen
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >

                  <div className="px-8 pb-8 pl-23 leading-8 text-gray-500">

                    {faq.answer}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* CTA */}

        <div
          className="
            mt-16
            rounded-4xl
            bg-[#FFF3EF]
            p-10
            text-center
          "
        >

          <MessageCircle
            size={40}
            className="mx-auto text-primary"
          />

          <h3 className="mt-5 text-3xl font-serif">
            Masih Ada Pertanyaan?
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-500">
            Jangan ragu untuk menghubungi kami melalui WhatsApp.
            Kami siap membantu memilih layanan makeup terbaik
            sesuai kebutuhanmu.
          </p>

          <a
            href="https://wa.me/6281282520195"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              rounded-full
              bg-primary
              px-8
              py-4
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Chat via WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}