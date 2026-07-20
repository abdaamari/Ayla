import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#C98E82] text-white">
      {/* CTA */}

      <div className="max-w-7xl mx-auto px-6 pt-20">

        <div className="border-b border-white/20 pb-16 text-center">

          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Ready For Your
            <br />
            Special Moment?
          </h2>

          <p className="mt-6 text-white/80 max-w-xl mx-auto leading-8">
            Percayakan riasan terbaik untuk hari spesial Anda bersama
            Ayla Make Up. Kami siap menemani setiap momen berharga
            dengan sentuhan makeup yang elegan dan natural.
          </p>

          <a
            href="https://wa.me/6285899504367"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-[#C98E82] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Book Appointment
          </a>

        </div>

        {/* Footer Content */}

        <div className="grid md:grid-cols-3 gap-12 py-16">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-serif mb-5">
              AYLA MAKE UP
            </h3>

            <p className="text-white/80 leading-8">
              Natural beauty with an elegant touch for every
              special moment. Wedding, engagement, graduation,
              photoshoot, and every unforgettable occasion.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="text-xl font-semibold mb-5">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-white/80">

              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <Link href="#about" className="hover:text-white transition">
                About
              </Link>

              <Link href="#services" className="hover:text-white transition">
                Services
              </Link>

              <Link href="#gallery" className="hover:text-white transition">
                Gallery
              </Link>

              <Link href="#packages" className="hover:text-white transition">
                Packages
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-5 text-white/80">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+62 858-9950-4367</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Jakarta Timur, Indonesia</span>
              </div>

              <a
                href="https://wa.me/6285899504367"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/ayla76_mua"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>

              <a
                href="https://tiktok.com/@ayla_MUA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaTiktok size={18} />
                <span>TikTok</span>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/20 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">

          <p>
            © 2026 Ayla Make Up. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Developed by Abdaamari
          </p>

        </div>

      </div>
    </footer>
  );
}