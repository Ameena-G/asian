import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="reveal--float">
        <Hero />
      </section>
      <section id="about" className="reveal">
        <About />
      </section>
      <section id="why-choose-us" className="reveal">
        <WhyChooseUs />
      </section>
      <section id="products" className="reveal">
        <Products />
      </section>
      <section id="gallery" className="reveal">
        <Gallery />
      </section>
      <section id="reviews" className="reveal">
        <Testimonials />
      </section>
      <section id="contact" className="reveal">
        <Contact />
      </section>
      <section id="footer" className="reveal">
        <Footer />
      </section>
    </>
  );
};

export default Home;
