import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-[#cacacb] py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-orange-600 uppercase tracking-[5px] font-semibold text-sm mb-4">
            Client Testimonials
          </p>

          <h2
            className="text-[42px] md:text-[64px] font-black text-black leading-none"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Customer Reviews
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Customer satisfaction is at the core of our business.
            Explore what our clients have to say about their experience
            with Asian Steels and how our products have contributed
            to the success of their projects.
          </p>

        </div>

        {/* Review Card */}

        <div
          className="
            max-w-5xl
            mx-auto
            bg-white
            rounded-[30px]
            shadow-lg
            border
            border-gray-100
            p-8
            md:p-14
            relative
          "
        >

          {/* Quote Symbol */}

          <div className="absolute top-6 left-10 text-[90px] font-black text-orange-600 leading-none">
            ”
          </div>

          {/* Stars */}

          <div className="flex gap-2 mt-10">

            <FaStar className="text-orange-600 text-xl" />
            <FaStar className="text-orange-600 text-xl" />
            <FaStar className="text-orange-600 text-xl" />
            <FaStar className="text-orange-600 text-xl" />
            <FaStar className="text-orange-600 text-xl" />

          </div>

          {/* Review */}

          <p
            className="
              text-black
              text-[24px]
              md:text-[32px]
              font-black
              leading-relaxed
              mt-8
            "
            style={{
              fontFamily: "Montserrat",
            }}
          >
            "Asian Steels provided top-notch products, and their
            attention to detail was remarkable. I highly recommend
            them for any iron and steel needs."
          </p>

          {/* Customer */}

          <div className="flex items-center gap-5 mt-12">

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-[#1E293B]
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-xl
              "
            >
              SJ
            </div>

            <div>

              <h4 className="text-black text-2xl font-semibold">
                Samantha Johnson
              </h4>

              <p className="uppercase tracking-[3px] text-sm text-gray-500 mt-1">
                Verified Customer
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;