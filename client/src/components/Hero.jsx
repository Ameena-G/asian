import { motion } from "framer-motion";
import { Reveal, RevealItem } from "./Reveal";
import {
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaCrown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/6f2d68_18172d2780624faa970e0847f8290a59~mv2.jpg/v1/fill/w_1600,h_1100,al_tl,q_85,enc_avif,quality_auto/6f2d68_18172d2780624faa970e0847f8290a59~mv2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081320]/95 via-[#081320]/70 to-transparent" />

      {/* Content */}

      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="max-w-[850px] pt-[170px] lg:pt-[190px] pb-[180px]">

            {/* Trusted Badge */}

            <RevealItem direction="up" delay={0.02}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-sm
                  rounded-full
                  px-7
                  py-3
                "
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />


              <span
                className="
                  uppercase
                  tracking-[6px]
                  text-[14px]
                  text-white
                  font-medium
                "
              >
                Trusted Since 2007
              </span>
              </motion.div>
            </RevealItem>

            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                mt-10
                leading-[0.9]
                font-black
                tracking-[-3px]
              "
              style={{
                fontFamily: "Montserrat",
              }}
            >
              <span className="block text-white text-[70px] md:text-[95px] lg:text-[110px]">
                Dealers in
              </span>

              <span className="block">
                <span className="text-orange-500 text-[70px] md:text-[95px] lg:text-[110px]">
                  Iron &
                </span>
              </span>

              <span className="block">
                <span className="text-orange-500 text-[70px] md:text-[95px] lg:text-[110px]">
                  Steel
                </span>

                <span className="text-white text-[70px] md:text-[95px] lg:text-[110px]">
                  {" "}Suppliers
                </span>
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-8
                max-w-[760px]
                text-[18px]
                md:text-[20px]
                text-gray-300
                leading-[1.7]
              "
            >
              Asian Steels Davanagere is your premier dealer and supplier
              of high-quality iron and steel products, essential for
              industrial, building, and home construction projects.
              We're committed to providing top-notch materials to meet
              all your construction needs.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5 mt-12"
            >
              <button
                className="
                  bg-[#F97316]
                  hover:bg-[#EA580C]
                  transition-all
                  duration-300
                  text-white
                  h-[64px]
                  px-10
                  rounded-xl
                  font-semibold
                  text-[18px]
                  flex
                  items-center
                  gap-3
                "
              >
                Request a Quote
                <FaArrowRight />
              </button>

              <button
                className="
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-sm
                  hover:bg-white/10
                  transition-all
                  duration-300
                  text-white
                  h-[64px]
                  px-10
                  rounded-xl
                  font-semibold
                  text-[18px]
                "
              >
                Explore Products
              </button>
            </motion.div>

            {/* Trust Badges */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
                flex
                flex-wrap
                items-center
                gap-10
                md:gap-14
                mt-14
              "
            >
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-orange-500 text-base" />

                <span className="text-[16px] font-semibold text-white">
                  Certified Quality
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaTruck className="text-orange-500 text-base" />

                <span className="text-[16px] font-semibold text-white">
                  Quick Dispatch
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCrown className="text-orange-500 text-base" />

                <span className="text-[16px] font-semibold text-white">
                  Top Brands
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-20
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          z-20
        "
      >
        <span
          className="
            text-[12px]
            uppercase
            tracking-[8px]
            text-white/80
            font-medium
          "
        >
          Scroll
        </span>

        <div className="w-[1px] h-16 bg-white/40 mt-4" />
      </div>

    </section>
  );
};

export default Hero;