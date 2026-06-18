import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8FAFC]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="h-[88px] flex items-center justify-between">

          {/* Logo Section */}

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="Asian Steels Logo"
              className="w-[58px] h-[58px] object-cover rounded-xl"
            />

            <div>
              <h2
                className={`text-[18px] md:text-[20px] font-black leading-none transition-colors duration-300 ${
                  isScrolled ? "text-[#0B1220]" : "text-white"
                }`}
                style={{ fontFamily: "Montserrat" }}
              >
                ASIAN STEELS
              </h2>

              <p
                className={`text-[11px] tracking-[4px] mt-1 uppercase transition-colors duration-300 ${
                  isScrolled ? "text-[#6B7280]" : "text-[#C9CED8]"
                }`}
              >
                DAVANAGERE · SINCE 2007
              </p>
            </div>

          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-12">

            <a
              href="#home"
              className="relative text-[#F97316] font-semibold text-[18px]"
            >
              Home
              <span className="absolute left-0 -bottom-5 w-full h-[2px] bg-[#F97316]" />
            </a>

            <a
              href="#about"
              className={`font-semibold text-[18px] transition hover:text-[#F97316] ${
                isScrolled ? "text-[#0B1220]" : "text-white"
              }`}
            >
              About
            </a>

            <a
              href="#products"
              className={`font-semibold text-[18px] transition hover:text-[#F97316] ${
                isScrolled ? "text-[#0B1220]" : "text-white"
              }`}
            >
              Products
            </a>

            <a
              href="#gallery"
              className={`font-semibold text-[18px] transition hover:text-[#F97316] ${
                isScrolled ? "text-[#0B1220]" : "text-white"
              }`}
            >
              Gallery
            </a>

            <a
              href="#reviews"
              className={`font-semibold text-[18px] transition hover:text-[#F97316] ${
                isScrolled ? "text-[#0B1220]" : "text-white"
              }`}
            >
              Reviews
            </a>

            <a
              href="#contact"
              className={`font-semibold text-[18px] transition hover:text-[#F97316] ${
                isScrolled ? "text-[#0B1220]" : "text-white"
              }`}
            >
              Contact
            </a>

          </nav>

          {/* Desktop Button */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] transition px-8 h-[52px] rounded-xl text-white font-semibold text-[18px]"
          >
            <FaPhoneAlt size={14} />
            Get Quote
          </a>

          {/* Mobile Toggle */}

          <button
            className={`lg:hidden text-2xl ${
              isScrolled ? "text-[#0B1220]" : "text-white"
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu
            ? "max-h-[500px] bg-[#0B1220]/95 backdrop-blur-xl"
            : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">

          <a
            href="#home"
            className="text-white"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white"
            onClick={() => setMobileMenu(false)}
          >
            About
          </a>

          <a
            href="#products"
            className="text-white"
            onClick={() => setMobileMenu(false)}
          >
            Products
          </a>

          <a
            href="#gallery"
            className="text-white"
            onClick={() => setMobileMenu(false)}
          >
            Gallery
          </a>

          <a
            href="#reviews"
            className="text-white"
            onClick={() => setMobileMenu(false)}
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="text-white"
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </a>

          <a
            href="#contact"
            className="bg-[#F97316] py-3 rounded-lg text-white text-center font-semibold"
            onClick={() => setMobileMenu(false)}
          >
            Get Quote
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;