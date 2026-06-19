import img1 from "../assets/img1.jpeg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpeg";
import { Reveal, RevealItem } from "./Reveal";

const Gallery = () => {
  return (
    <section className="bg-white py-24">

      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <RevealItem direction="up" delay={0.05}>
            <p className="text-orange-600 uppercase tracking-[5px] font-semibold text-sm mb-4">
              Gallery
            </p>
          </RevealItem>

          <RevealItem direction="up" delay={0.12}>
            <h2
              className="text-[42px] md:text-[64px] font-black text-black leading-none"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              Inside Our Operations
            </h2>
          </RevealItem>

          <RevealItem direction="up" delay={0.18}>
            <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
              A glimpse into our inventory, partnerships, and the quality
              materials we deliver.
            </p>
          </RevealItem>

        </div>


        {/* Images */}

        <div className="grid md:grid-cols-3 gap-6">

          {/* Image 1 */}

          <RevealItem direction="up" delay={0.05}>
            <div
              className="
                h-[450px]
                rounded-3xl
                overflow-hidden
                bg-gray-200
                hover:-translate-y-2
                transition-all
                duration-300
                shadow-lg
              "
            >
              <img
                src={img1}
                alt="Gallery 1"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealItem>

          {/* Image 2 */}

          <RevealItem direction="up" delay={0.12}>
            <div
              className="
                h-[450px]
                rounded-3xl
                overflow-hidden
                bg-gray-200
                hover:-translate-y-2
                transition-all
                duration-300
                shadow-lg
              "
            >
              <img
                src={img3}
                alt="Gallery 2"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealItem>

          {/* Image 3 */}

          <RevealItem direction="up" delay={0.18}>
            <div
              className="
                h-[450px]
                rounded-3xl
                overflow-hidden
                bg-gray-200
                hover:-translate-y-2
                transition-all
                duration-300
                shadow-lg
              "
            >
              <img
                src={img4}
                alt="Gallery 3"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealItem>

        </div>


      </div>
    </section>
  );
};

export default Gallery;