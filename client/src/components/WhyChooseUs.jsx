const strengths = [
  {
    number: "01",
    title: "Extensive Inventory",
    description:
      "From MS Pipes and TMT bars to profile sheets, we house a complete range of iron and steel materials under one roof.",
  },
  {
    number: "02",
    title: "Top Brand Partnerships",
    description:
      "Authorized dealers for major steel brands like Tata Structura, JSW, Vizag, and many more.",
  },
  {
    number: "03",
    title: "Quality First",
    description:
      "We never compromise on quality. All products meet industry standards and are sourced from certified manufacturers.",
  },
  {
    number: "04",
    title: "Customer-Centric Approach",
    description:
      "Every order, big or small, is handled with professionalism and care for long-term relationships.",
  },
  {
    number: "05",
    title: "Quick Dispatch & Support",
    description:
      "Efficient logistics and experienced staff ensure on-time delivery and consistent project support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-orange-600 uppercase tracking-[5px] font-semibold text-sm mb-3">
            Why Choose Us
          </p>

          <h2
            className="text-[34px] md:text-[48px] font-black text-black"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Our Strengths
          </h2>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

          {strengths.map((item) => (
            <div
              key={item.number}
              className="
                relative
                bg-white
                border
                border-gray-200
                rounded-xl
                p-6
                min-h-[220px]
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              {/* Background Number */}

              <span
                className="
                  absolute
                  top-3
                  right-4
                  text-[48px]
                  font-black
                  text-gray-100
                  select-none
                "
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {item.number}
              </span>

              {/* Title */}

              <h3
                className="
                  text-[18px]
                  leading-snug
                  font-black
                  text-black
                  mb-4
                  relative
                  z-10
                "
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 text-[15px] leading-7 relative z-10">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;