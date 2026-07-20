const packages = [
  {
    title: "Makeup Reguler",
    price: "Rp 400.000",
    description: "Cocok Untuk Makeup Wisuda, Briedsmaid, Party, Photoshoot, Sister & Mom, Dll.",
    features: [
      "Makeup Flawless",
      "Loonglasting",
      "Free Pemasangan Hijab",
    ],
    popular: false,
  },
  {
    title: "Paket Akad Nikah",
    price: "Rp 5.500.000",
    description: "Pilihan Yang Tepat Untuk Intimate Wedding.",
    features: [
      "Makeup akad nikah",
      "Busana akad nikah / modern",
      "Aksesoris adat / modern",
      "Makeup & busana orang tua 2 pasang",
      "Free henna & free softlens",
    ],
    popular: true,
  },
  {
    title: "Paket Akad Nikah & Resepsi",
    price: "Rp 10.000.000",
    description: "Paket lengkap dengan layanan eksklusif.",
    features: [
      "Makeup akad & retouch resepsi 1x",
      "Busana resepsi 1 pasang",
      "Busana akad nikah 1 pasang",
      "Aksesoris 2 Adat / Modern",
      "Makeup & Busana Orangtua 2 pasang",
      "Makeup & Busana Penerima Tamu 4 Orang",
      "Free henna & free softlens",
      "Free hand bouquet artificial",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-24 bg-[#FFF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C98E82] text-sm">
            Pricing
          </p>

          <h2 className="text-5xl font-serif mt-4 text-gray-800">
            Makeup Packages
          </h2>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan acara spesial Anda.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((item, index) => (

            <div
              key={index}
              className={`relative rounded-2xl p-8 shadow-lg bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                item.popular
                  ? "border-2 border-[#C98E82]"
                  : ""
              }`}
            >

              {item.popular && (
                <span
                  className="absolute top-4 right-4 bg-[#C98E82] text-white text-xs px-3 py-1 rounded-full"
                >
                  Most Popular
                </span>
              )}

              <h3 className="text-3xl font-serif text-gray-800">
                {item.title}
              </h3>

              <p className="text-[#C98E82] text-3xl font-bold mt-4">
                {item.price}
              </p>

              <p className="mt-4 text-gray-500">
                {item.description}
              </p>

              <ul className="mt-8 space-y-4">

                {item.features.map((feature, i) => (

                  <li
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-500">✔</span>

                    <span>{feature}</span>

                  </li>

                ))}

              </ul>

              <button
                className="w-full mt-10 bg-[#C98E82] hover:bg-[#B87A6F] text-white py-3 rounded-lg transition"
              >
                Book Now
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}