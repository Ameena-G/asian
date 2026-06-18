import { useEffect, useMemo, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const activeLabel = useMemo(() => {
    const found = NAV_SECTIONS.find((s) => s.id === activeId);
    return found?.label ?? "Home";
  }, [activeId]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionEls = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sectionEls.length) return;

    // Navbar is fixed with height ~72px.
    // rootMargin: move the top edge up so a section becomes active once it reaches under the navbar.


    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length) {
          setActiveId(visible[0].target.id);
          return;
        }

        // Fallback: if nothing is intersecting (fast scroll edge cases), keep current.
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        rootMargin: "-72px 0px -55% 0px",
      }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setActiveId(id);
    setMobileMenu(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkBase = "relative font-semibold text-[18px] transition";

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
        <div className="h-[72px] flex items-center justify-between">


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
            {NAV_SECTIONS.map((item) => {
              const isActive = activeId === item.id;
              const inactiveColor = isScrolled ? "text-[#0B1220]" : "text-white";
              const activeColor = "text-[#F97316]";

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  className={`${linkBase} ${
                    isActive
                      ? `${activeColor} font-semibold`
                      : `font-semibold ${inactiveColor} hover:text-[#F97316]`
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-5 w-full h-[2px] bg-[#F97316]" />
                  )}
                </a>
              );
            })}
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

          {NAV_SECTIONS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                handleNavClick(item.id)(e);
                setMobileMenu(false);
              }}
              className={`relative ${
                activeId === item.id
                  ? "text-[#F97316]"
                  : "text-white"
              } font-semibold`}
            >
              {item.label}
              {activeId === item.id && (
                <span className="absolute left-0 -bottom-5 w-full h-[2px] bg-[#F97316]" />
              )}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-[#F97316] py-3 rounded-lg text-white text-center font-semibold"
            onClick={(e) => {
              handleNavClick("contact")(e);
              setMobileMenu(false);
            }}
          >
            Get Quote
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;