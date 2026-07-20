import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 bg-[#FFF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C98E82] text-sm">
            Location
          </p>

          <h2 className="text-5xl font-serif text-gray-800 mt-4">
            Visit Our Studio
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-8">
            Kami siap menyambut Anda di studio Ayla Makeup.
            Datang langsung atau hubungi kami untuk reservasi
            terlebih dahulu.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Informasi */}

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-serif text-gray-800 mb-8">
              Galeri Ayla Makeup
            </h3>

            <div className="space-y-7">

              <div className="flex gap-4">

                <MapPin className="text-[#C98E82] mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Address
                  </h4>

                  <p className="text-gray-500 leading-7">
                    Galeri Ayla Makeup
                    <br />
                    JlN. SPG 7 NO.12 RT05 RW09 Gang Usaha, Lubang Buaya, Cipayung, Jakarta Timur 
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="text-[#C98E82] mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Opening Hours
                  </h4>

                  <p className="text-gray-500">
                    Every Day
                    <br />
                    08.00 - 20.00 WIB
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="text-[#C98E82] mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Contact
                  </h4>

                  <p className="text-gray-500">
                    +62 858-9950-4367
                  </p>

                </div>

              </div>

            </div>

            <a
              href="https://maps.google.com/?q=Galeri+Ayla+Makeup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-[#C98E82] text-white px-7 py-3 rounded-lg hover:bg-[#b67b6e] duration-300"
            >
              Open in Google Maps
            </a>

          </div>

          {/* Google Maps */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.653158941766!2d106.904757!3d-6.286513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3444f648495%3A0xf322a71ae8635823!2sGaleri%20Ayla%20Makeup!5e0!3m2!1sid!2sid!4v1784032892040!5m2!1sid!2sid"
            className="w-full h[550px] rounded-3xl shadow-lg border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>
    </section>
  );
}