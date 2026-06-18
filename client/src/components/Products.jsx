const products = [
  {
    title: "MS Pipes",
    description:
      "Mild steel pipes for structural & plumbing applications.",
  },
  {
    title: "TMT Bars",
    description:
      "High-strength TMT bars for RCC and infrastructure.",
  },
  {
    title: "Profile Sheets",
    description:
      "Roofing & cladding profile sheets in multiple gauges.",
  },
  {
    title: "Structural Steel",
    description:
      "Angles, channels, beams and joists for fabrication.",
  },
  {
    title: "GI & GP Sheets",
    description:
      "Galvanized sheets for industrial and home use.",
  },
  {
    title: "Tata Structura",
    description:
      "Authorized dealer for premium hollow sections.",
  },
];

const Products = () => {
  return (
    <section className="bg-[#081320] py-24 relative overflow-hidden">

      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:75px_75px]
        "
      />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          <div>

            <p className="text-orange-500 uppercase tracking-[5px] font-semibold text-sm mb-4">
              Products & Services
            </p>

            <h2
              className="text-white text-[42px] md:text-[64px] font-black leading-none"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              Our Offerings
            </h2>

          </div>

          <div className="flex items-center">
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              A complete range of iron and steel materials sourced
              from certified manufacturers and top brand partners.
            </p>
          </div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* Product Image */}

          <div
            className="
              bg-white/5
              backdrop-blur-sm
              rounded-3xl
              p-6
              border
              border-white/10
            "
          >
            <img
              src="/products-catalog.jpg"
              alt="Products"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Product Cards */}

          <div className="grid md:grid-cols-2 gap-5">

            {products.map((product, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-sm
                  border
                  border-white/10
                  rounded-2xl
                  p-8
                  hover:border-orange-500/30
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <h3
                  className="text-white text-[20px] md:text-[24px] font-black mb-4"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {product.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-8 h-[1px] bg-orange-500/60" />
              </div>
            ))}

          </div>

        </div>

        {/* Moving Brands */}

<div className="mt-20 overflow-hidden border-y border-white/10 py-8">

  <div className="marquee">

    <div className="marquee-content">

      <span>TATA STRUCTURA</span>
      <span>•</span>

      <span>JSW</span>
      <span>•</span>

      <span>VIZAG STEEL</span>
      <span>•</span>

      <span>SAIL</span>
      <span>•</span>

      <span>KAMDHENU</span>
      <span>•</span>

      <span>JINDAL</span>
      <span>•</span>

      <span>TATA STRUCTURA</span>
      <span>•</span>

      <span>JSW</span>
      <span>•</span>

      <span>VIZAG STEEL</span>
      <span>•</span>

      <span>SAIL</span>
      <span>•</span>

      <span>KAMDHENU</span>
      <span>•</span>

      <span>JINDAL</span>
      <span>•</span>

    </div>

  </div>

</div>

      </div>

    </section>
  );
};

export default Products;