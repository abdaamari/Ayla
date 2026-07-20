"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import {
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Vina Yanti",
    service: "Wedding Makeup",
    photo: "/gallery/review1.jpg",
    review:
      "Saya sangat puas dengan hasil makeup dari Ayla MUA di hari spesial saya. Makeup-nya cantik, halus, dan terlihat natural, tapi tetap bikin wajah jadi manglingin dan lebih fresh. Hasilnya elegan tanpa terlihat berlebihan. Selain itu, makeup-nya tahan lama dan tidak luntur sampai acara selesai. Ayla MUA juga sangat ramah dan profesional. Sukses selalu untuk Ayla MUA, terima kasih sudah membuat hari special saya terasa begitu indah dan berkesan!💕",
  },
  {
    name: "Annisa Putri",
    service: "Wedding Makeup",
    photo: "/gallery/review2.jpg",
    review:
      "Sukaaaa bgttttttt sama make up nyaa 💕💕💕 kak Ayla nya sangat soft spoken sekaliiii. Make up ga luntur , bulu mata on point. Semua orang bilang pangling . Baju nya juga ga pasaran, sukaaaa bgtttt. Makasih kak aylaaaaaa sukses selalu🥹🙏🥹😁💕💕",
  },
  {
    name: "Ayu Kenyo Widyaningsih",
    service: "Party Makeup",
    photo: "/gallery/review3.jpg",
    review:
      "Sukaa banget sama hasil make upnya bener bener manglingi banget, untuk attireny juga baguss banyak pilihannya apalagi dengan harga yg terjangkau banget. Sempet mau booking untuk wisuda cuma belom jodoh, alhamdulillah jodoh di wedding aku. Cusss yg mau make up apapun bisa ke Ayla Makeup yaaaa!! ❤️😍",
  },
  {
    name: "Nur Anisya Amelia",
    service: "Engagement Makeup",
    photo: "/gallery/review4.jpg",
    review:
      "Sumpah tangannya ka Ayla ini magic bgt 🪄🪄. Dari awal fitting, tempatnya nyaman bgt, bajunya jg bagus bagus. Banyak pilihannya. Aku sendiri pake adat minang, pake suntiang yang gemes bgt warnanya rosegold. Dan ternyata suntiangnya gak yang di pasang satu satu, tapi udh jadi tinggal pake, Alhamdulillahh gak bikin pusing ✨. Make up nya cakep puoooolllll. Beneran bikin glow up, bikin pangling tapi ga bikin aku keliatan jadi org lain. Tetep aku cuma jadi tambah cantik🥰🥰 sampe tamu tamu yg dateng pas nikahan aku jg pada bilang make up nya bagus. Make up orang tuanya jg bagus. Mertua ku suka bgt sama make upnya sampe bikin temen temen mertuaku pangling.✨🫶🏻. Makasih ya ka Aylaaa. Beneran bikin aku happy bgttttt. Semoga makin banyak orderan ya kakk✨🫶🏻❤️",
  },
];
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-28 bg-linier-to-b from-white via-[#FFF8F6] to-white"
    >
      {/* Blur */}

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#F8EAE5] blur-[130px] opacity-50" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#FDF2EE] blur-[140px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-primary text-sm">
            Client Love
          </p>

          <h2 className="mt-4 text-5xl font-serif">
            What They Say
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#ead8d2] bg-white px-6 py-3 shadow-sm">

            <div className="flex text-yellow-500">

              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />

            </div>

            <span className="text-gray-700 font-medium">

              5.0 Rating • Based on Google Reviews

            </span>

          </div>

          <div className="mt-8">

            <Link
              href="https://maps.google.com/?q=Galeri+Ayla+Makeup"
              target="_blank"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 duration-300"
            >
              View All Reviews

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

        {/* Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides
          loop
          grabCursor
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2.6,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div
                className="
                group
                h-full
                rounded-[30px]
                border
                border-white/50
                bg-white/70
                backdrop-blur-xl
                shadow-lg
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
              >
                {/* Image */}

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Content */}

                <div className="relative p-8">

                  <Quote
                    size={80}
                    className="absolute right-6 top-2 text-primary/10"
                  />

                  <div className="flex text-yellow-500">

                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  <p className="mt-6 leading-8 italic text-gray-600">

                    {item.review}

                  </p>

                  <div className="mt-8">

                    <h3 className="font-semibold text-lg">

                      {item.name}

                    </h3>

                    <p className="text-sm text-gray-500">

                      {item.service}

                    </p>

                  </div>

                  <div className="mt-6 inline-flex rounded-full bg-[#EAF7ED] px-4 py-2 text-sm font-medium text-green-700">

                    ✓ Google Review

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swipe Hint */}

        <div className="mt-12 text-center">

          <p className="animate-pulse text-sm tracking-[0.3em] uppercase text-gray-400">

            ← Swipe Reviews →

          </p>

        </div>

      </div>
    </section>
  );
}