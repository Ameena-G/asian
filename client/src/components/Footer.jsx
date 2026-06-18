const Footer = () => {
  return (
    <footer className="bg-[#081320] text-white">

      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Company Info */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center">
                <span
                  className="text-white text-2xl font-black"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  AS
                </span>
              </div>

              <div>

                <h3
                  className="text-white text-[24px] font-black leading-none"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  ASIAN STEELS
                </h3>

                <p className="text-gray-400 text-sm uppercase tracking-[4px] mt-2">
                  Davanagere · Since 2007
                </p>

              </div>

            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Dealers and suppliers of high-quality iron and steel
              products for industrial, building, and home
              construction projects across Karnataka.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="text-orange-500 uppercase tracking-[4px] font-semibold text-sm mb-8">
              Navigate
            </h4>

            <ul className="space-y-4 text-gray-300 text-lg">

              <li>
                <a href="#home" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-orange-500 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-orange-500 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#testimonials" className="hover:text-orange-500 transition">
                  Reviews
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Brands */}

          <div>

            <h4 className="text-orange-500 uppercase tracking-[4px] font-semibold text-sm mb-8">
              Brands
            </h4>

            <ul className="space-y-4 text-gray-300 text-lg">

              <li>Apollo</li>
              <li>JSW</li>
              <li>Vizag Steel</li>
              <li>Jindal</li>
              <li>Kamdhenu</li>

            </ul>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-16 pt-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-lg">
              © 2026 Asian Steels Davanagere. All rights reserved.
            </p>

            <p className="text-gray-400 text-lg">
              Quality steel. Trusted service.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;