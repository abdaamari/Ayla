import Image from "next/image";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Blur */}

      <div className="absolute -left-16 top-24 w-56 h-56 rounded-full bg-[#F8EAE5] blur-[100px] opacity-40" />
      <div className="absolute -right-20 bottom-20 w-64 h-64 rounded-full bg-[#FDF2EE] blur-[120px] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* FOTO */}

          <div className="flex justify-center">

            <div className="relative w-full max-w-65 sm:max-w-72.5 md:max-w-90 lg:max-w-90">

              {/* Foto Utama */}

              <div className="overflow-hidden rounded-4xl shadow-2xl">
                <Image
                  src="/gallery/about1.jpg"
                  alt="About Ayla"
                  width={420}
                  height={520}
                  className="
                    w-full
                    h-auto
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />
              </div>

              {/* Foto Kedua */}

                <div
                  className="
                    absolute
                    -bottom-6
                    -right-6

                    w-24
                    sm:w-28
                    md:w-32

                    overflow-hidden
                    rounded-3xl
                    shadow-2xl
                  "
                >

                  <Image
                    src="/gallery/about2.jpg"
                    alt="Client Makeup"
                    width={300}
                    height={400}
                    className="
                      w-full
                      h-auto
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-110
                    "
                  />

                </div>

            </div>

          </div>

          {/* TEXT */}

          <div>

            <p className="mb-4 text-sm uppercase tracking-[5px] text-[#C98E82]">
              About Ayla
            </p>

            <h2 className="mb-8 text-4xl leading-tight text-gray-800 md:text-6xl font-serif">
              Hi, Im Ayla
            </h2>

            <p className="leading-8 text-gray-500">
              Ayla Make Up hadir untuk membuat setiap momen
              berharga menjadi lebih istimewa dengan sentuhan
              makeup yang natural, elegan, dan menonjolkan
              kecantikan alami setiap individu.

              <br />
              <br />

              Dengan pengalaman di berbagai acara seperti
              wedding, engagement, wisuda, photoshoot,
              hingga event spesial lainnya, kami selalu
              memberikan pelayanan terbaik untuk setiap
              klien.
            </p>

            {/* Quote */}

            <div className="mt-10 flex gap-4">

              <Quote
                size={26}
                className="mt-1 shrink-0 text-[#C98E82]"
              />

              <div>

                <p className="italic leading-8 text-gray-500">
                  Setiap wajah memiliki kecantikan yang unik.
                  Tugas saya adalah menonjolkannya dengan
                  sentuhan yang elegan dan penuh percaya diri.
                </p>

                <p className="mt-5 text-sm font-medium tracking-wide text-[#C98E82]">
                  — Ayla Make Up
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}