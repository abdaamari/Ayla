"use client";

import { useState } from "react";
import {
  Sparkles,
  Heart,
  Camera,
  PartyPopper,
  ChevronDown,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Wedding Makeup",
    description:
      "Makeup elegan dan tahan lama untuk hari pernikahan Anda dengan sentuhan premium yang menonjolkan kecantikan alami.",
    features: [
      "Premium Makeup",
      "Hairdo Styling",
      "False Eyelash",
      "Touch Up",
    ],
    icon: Heart,
  },
  {
    title: "Graduation Makeup",
    description:
      "Tampil percaya diri di hari wisuda dengan makeup natural yang fresh dan tahan lama.",
    features: [
      "Natural Makeup",
      "Soft Hair Styling",
      "False Eyelash",
      "Long Lasting",
    ],
    icon: Sparkles,
  },
  {
    title: "Engagement Makeup",
    description:
      "Look anggun dan elegan untuk momen lamaran yang tak terlupakan.",
    features: [
      "Elegant Makeup",
      "Hairdo",
      "Premium Products",
      "Touch Up",
    ],
    icon: Camera,
  },
  {
    title: "Party Makeup",
    description:
      "Riasan glamor untuk pesta, ulang tahun, gala dinner, maupun event spesial lainnya.",
    features: [
      "Glam Makeup",
      "Hair Styling",
      "Eyelash",
      "Long Lasting",
    ],
    icon: PartyPopper,
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="py-24 bg-[#FFF9F6]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C98E82] text-sm">
            Our Services
          </p>

          <h2 className="text-5xl font-serif text-gray-800 mt-4">
            Beauty For Every Occasion
          </h2>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-8">
            Pilih layanan makeup terbaik sesuai kebutuhan Anda.
            Klik setiap layanan untuk melihat detailnya.
          </p>

        </div>

        <div className="space-y-5">

          {services.map((service, index) => {

            const Icon = service.icon;
            const isOpen = open === index;

            return (

              <div
                key={index}
                className="bg-white rounded-3xl border border-[#F1DDD6] overflow-hidden shadow-sm transition-all"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-8 py-7 text-left hover:bg-[#FFF5F1] transition"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-full bg-[#F8EAE5] flex items-center justify-center">

                      <Icon
                        size={24}
                        className="text-[#C98E82]"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold text-gray-800">
                        {service.title}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Click to view details
                      </p>

                    </div>

                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-8 pb-8">

                      <p className="text-gray-500 leading-8">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mt-6">

                        {service.features.map((item) => (

                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >

                            <Check
                              size={18}
                              className="text-[#C98E82]"
                            />

                            <span className="text-gray-700">
                              {item}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}