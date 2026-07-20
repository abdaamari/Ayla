import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#C98E82] to-[#B97A6E] text-white">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-[150px]" />

      <div className="absolute -right-20 bottom-0 h-105 w-105 rounded-full bg-[#F8DDD4]/20 blur-[180px]" />

      <div className="relative z-10">

        {/* CTA */}

        <div className="mx-auto max-w-7xl px-6 pt-24">

          <div className="border-b border-white/15 pb-20 text-center">

            <div className="mb-8 text-white/50 tracking-[0.6em] uppercase text-sm">

              ✦ Lets Create Something Beautiful ✦

            </div>

            <h2 className="text-5xl leading-tight font-serif md:text-6xl">

              Every Beautiful Moment
              <br />
              Starts Here

            </h2>

            <p className="mx-auto mt-8 max-w-2xl leading-8 text-white/80">

              Percayakan riasan terbaik untuk hari spesial Anda
              bersama Ayla Make Up. Kami siap menemani setiap
              momen berharga dengan sentuhan makeup yang elegan,
              natural, dan berkelas.

            </p>

            <a
              href="https://wa.me/6285899504367"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-[#C98E82]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
              "
            >
              <FaWhatsapp size={20} />

              Book via WhatsApp

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </a>

          </div>

          {/* Content */}

          <div className="grid gap-14 py-20 md:grid-cols-3">

            {/* Brand */}

            <div>

              {/* Kalau pakai logo */}

              <Image
                src="/gallery/logoayla.png"
                alt="Ayla Make Up"
                width={220}
                height={80}
                className="
                  w-auto
                  h-40
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              {/* Kalau belum punya logo putih,
                  tinggal comment Image di atas
                  lalu pakai H3 ini

              <h3 className="text-3xl font-serif mb-5">
                AYLA MAKE UP
              </h3>

              */}

              <p className="mt-6 leading-8 text-white/75">

                Natural beauty with an elegant touch
                for every special moment.
                Wedding, engagement, graduation,
                photoshoot, and every unforgettable
                occasion.

              </p>

            </div>

            {/* Navigation */}

            <div>

              <h4 className="mb-6 text-xl font-semibold">

                Navigation

              </h4>

              <div className="space-y-4">

                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Services", "#services"],
                  ["Gallery", "#gallery"],
                  ["Packages", "#packages"],
                  ["FAQ", "#faq"],
                ].map(([title, href]) => (

                  <Link
                    key={title}
                    href={href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-white/75
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >

                    <ArrowRight
                      size={15}
                      className="
                        opacity-0
                        -translate-x-2
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    />

                    {title}

                  </Link>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div>

              <h4 className="mb-6 text-xl font-semibold">

                Contact

              </h4>

              <div className="space-y-5 text-white/75">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">

                    <Phone size={18} />

                  </div>

                  +62 858-9950-4367

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">

                    <MapPin size={18} />

                  </div>

                  Jakarta Timur, Indonesia

                </div>

              </div>

              {/* Social */}

              <div className="mt-10 flex gap-4">

                <a
                  href="https://wa.me/6285899504367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:text-[#C98E82]
                  "
                >
                  <FaWhatsapp size={20} />
                </a>

                <a
                  href="https://instagram.com/ayla76_mua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:text-[#C98E82]
                  "
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://tiktok.com/@ayla_MUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white
                    hover:text-[#C98E82]
                  "
                >
                  <FaTiktok size={20} />
                </a>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="border-t border-white/15 py-8">

            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

              <p className="text-sm text-white/60">

                © 2026 Ayla Make Up. All Rights Reserved.

              </p>

              <p className="text-sm text-white/60">

                Designed & Developed with ❤️ by <span className="font-semibold text-white">Abda Amari</span>

              </p>

            </div>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.5em] text-white/30">

              Beauty Begins With Confidence

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}