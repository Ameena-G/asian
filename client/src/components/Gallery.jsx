import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";

const Gallery = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-orange-600 uppercase tracking-[5px] font-semibold text-sm mb-4">
            Gallery
          </p>

          <h2
            className="text-[42px] md:text-[64px] font-black text-black leading-none"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Inside Our Operations
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            A glimpse into our inventory, partnerships, and the quality
            materials we deliver.
          </p>

        </div>

        {/* Images */}

        <div className="grid md:grid-cols-3 gap-6">

          {/* Image 1 */}

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

          {/* Image 2 */}

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
    src={img2}
    alt="Gallery 2"
    className="w-full h-full object-cover"
  />
          </div>

          {/* Image 3 */}

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
            {/* Replace with image */}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;