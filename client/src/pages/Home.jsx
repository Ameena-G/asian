import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <section id="home" data-reveal className="reveal--float">
        <Hero />
      </section>
      <section id="about" data-reveal className="reveal">
        <About />
      </section>
      <section id="why-choose-us" data-reveal className="reveal">
        <WhyChooseUs />
      </section>
      <section id="products" data-reveal className="reveal">
        <Products />
      </section>
      <section id="gallery" data-reveal className="reveal">
        <Gallery />
      </section>
      <section id="reviews" data-reveal className="reveal">
        <Testimonials />
      </section>
      <section id="contact" data-reveal className="reveal">
        <Contact />
      </section>
      <section id="footer" data-reveal className="reveal">
        <Footer />
      </section>
    </>
  );
};

export default Home;

