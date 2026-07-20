"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const gallery = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",

  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
  "/gallery/gallery11.jpg",
  "/gallery/gallery12.jpg",
  "/gallery/gallery13.jpg",
  "/gallery/gallery14.jpg",
  "/gallery/gallery15.jpg",
];

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);

  const previewImages = gallery.slice(0, 6);
  const moreImages = gallery.slice(6);

  return (
    <section
      id="gallery"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-primary text-sm">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-serif">
            Recent Makeup Works
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-muted">
            Beberapa Hasil Makeup & Busana Kami By @attire_ayla Yang Telah Kami Kerjakan
            Untuk Berbagai Acara Spesial.
          </p>

        </div>

        {/* Preview */}

        <div className="relative">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {previewImages.map((image, index) => (

              <motion.div
                whileHover={{ scale: 1.03 }}
                key={index}
                className="group overflow-hidden rounded-3xl shadow-xl"
              >

                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={650}
                  className="h-105 w-full object-cover duration-700 group-hover:scale-110"
                />

              </motion.div>

            ))}

          </div>

          {/* Overlay */}

          {!expanded && (

            <div className="pointer-events-none absolute bottom-0 left-0 flex h-60 w-full items-end justify-center bg-linier-to-t from-white via-white/90 to-transparent">

              <button
                onClick={() => setExpanded(true)}
                className="pointer-events-auto mb-6 flex items-center gap-2 rounded-full border border-primary bg-white px-8 py-4 font-medium text-primary shadow-xl transition hover:bg-primary hover:text-white"
              >

                Explore More

                <ChevronDown size={18} />

              </button>

            </div>

          )}

        </div>

        {/* Expanded */}

        <AnimatePresence>

          {expanded && (

            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: .7,
              }}
            >

              <div className="mt-10 columns-2 gap-6 md:columns-3 lg:columns-4">

                {moreImages.map((image, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * .05,
                    }}
                    className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl shadow-xl"
                  >

                    <Image
                      src={image}
                      alt=""
                      width={500}
                      height={700}
                      className="w-full object-cover duration-700 group-hover:scale-110"
                    />

                  </motion.div>

                ))}

              </div>

              <div className="mt-12 flex justify-center">

                <button
                  onClick={() => setExpanded(false)}
                  className="flex items-center gap-2 rounded-full border border-primary px-8 py-4 font-medium text-primary transition hover:bg-primary hover:text-white"
                >

                  Show Less

                  <ChevronUp size={18} />

                </button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}