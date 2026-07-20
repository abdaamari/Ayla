import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24 pb-24"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-130 w-130 rounded-full bg-primary/20 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute -bottom-32 -left-32 h-105 w-105 rounded-full bg-primary/10 blur-[160px] pointer-events-none -z-10" />

      <div className="container-custom relative z-10 grid items-center gap-24 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Luxury Bridal Makeup Artist
          </p>

          <h1 className="heading-hero">
            Galeri
            <br />
            Ayla
            <br />
            Make Up
          </h1>

          <h2 className="mt-5 text-2xl font-(--font-heading) text-primary">
            MUA Jakarta Timur ✨ Bridal • Wisuda • Party • Certified by BNSP 🏅
          </h2>

          <p className="text-lead mt-8">
            Makeup natural, flawless, dan elegan untuk wedding,
            engagement, wisuda, photoshoot, hingga berbagai
            momen spesial lainnya dengan sentuhan profesional
            yang menonjolkan kecantikan alami Anda.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="https://wa.me/6285899504367"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3"
            >
              <FaWhatsapp size={20} />
              Book Appointment
            </a>

            <a
              href="#gallery"
              className="flex items-center gap-2 rounded-full border border-primary px-8 py-4 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              View Gallery
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6 text-center md:gap-10">

            <div className="flex flex-col items-center">
              <h3 className="font-(--font-heading) text-4xl md:text-5xl text-primary">
                250+
              </h3>

              <p className="mt-2 text-sm text-muted">
                Happy Clients
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="font-(--font-heading) text-4xl md:text-5xl text-primary">
                7+
              </h3>

              <p className="mt-2 text-sm text-muted">
                Years Experience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="font-(--font-heading) text-4xl md:text-5xl text-primary">
                100%
              </h3>

              <p className="mt-2 text-sm text-muted">
                Satisfaction
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center lg:pt-10">

          <div className="card-shadow relative h-180 w-full max-w-140 overflow-hidden rounded-[48px]">

            <Image
              src="/gallery/hero.jpg"
              alt="Ayla Makeup"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

          {/* Experience */}

          <div className="glass border-soft card-shadow absolute -right-5 top-16 rounded-3xl px-7 py-6">

            <h3 className="font-(--font-heading) text-5xl text-primary">
              7+
            </h3>

            <p className="mt-1 text-sm text-muted">
              Years Experience
            </p>

          </div>

          {/* Review */}

          <div className="glass border-soft card-shadow absolute -left-6 bottom-16 rounded-3xl px-7 py-6">

            <p className="text-lg text-yellow-500">
              ★★★★★
            </p>

            <h4 className="mt-2 font-semibold text-foreground">
              Trusted by
            </h4>

            <p className="text-sm text-muted">
              250+ Happy Clients
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}