import img2 from "../assets/img2.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import { Reveal, RevealItem } from "./Reveal";


const About = () => {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}

          <div>


            <RevealItem direction="up" delay={0.05}>
              <p className="text-orange-600 uppercase tracking-[5px] font-semibold mb-6">
                About Us
              </p>
            </RevealItem>

            <RevealItem direction="up" delay={0.12}>
              <h2
                className="text-[42px] md:text-[64px] leading-tight font-black"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                Your Trusted Partner in
                <br />
                Iron & Steel Since{" "}
                <span className="text-orange-600">2007</span>
              </h2>
            </RevealItem>

            <div className="relative mt-10">
              <Reveal
                className="block"
                delay={0.18}
              >
                <img
                  src={img2}
                  alt="Asian Steels"
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
              </Reveal>


              {/* Floating Card */}

              <RevealItem direction="right" delay={0.25}>
                <div
                  className="
                    absolute
                    -bottom-6
                    right-6
                    bg-orange-600
                    text-white
                    px-8
                    py-6
                    rounded-2xl
                    shadow-xl
                  "
                >
                  <h3 className="text-5xl font-black">18+</h3>

                  <p className="uppercase tracking-[2px] text-sm">
                    Years Of Trust
                  </p>
                </div>
              </RevealItem>


            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <RevealItem direction="up" delay={0.08}>
              <p className="text-[20px] leading-relaxed text-gray-600">
                Established in 2007 in Davangere, Asian Steels has grown
                from a small trading company into one of the region's most
                reputable and reliable iron and steel suppliers. With a
                strong foundation built on trust, transparency, and
                technical expertise, we have become a one-stop solution for
                all steel requirements across various industries—
                construction, infrastructure, fabrication, manufacturing, and
                agriculture.
              </p>
            </RevealItem>

            {/* Journey & Vision */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <RevealItem direction="up" delay={0.12}>
                <div className="border rounded-2xl p-8 bg-white shadow-sm">
                  <h3
                    className="text-3xl font-black mb-4"
                    style={{
                      fontFamily: "Montserrat",
                    }}
                  >
                    Our Journey
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    From humble beginnings to a key supplier of branded steel
                    products, our journey reflects our commitment to quality,
                    reliability, and customer satisfaction.
                  </p>
                </div>
              </RevealItem>

              <RevealItem direction="up" delay={0.18}>
                <div className="border-l-4 border-orange-600 rounded-2xl p-8 bg-gray-50">
                  <h3
                    className="text-3xl font-black mb-4"
                    style={{
                      fontFamily: "Montserrat",
                    }}
                  >
                    Vision
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    To become the most preferred and trusted supplier of iron
                    and steel materials in Karnataka and across India by
                    delivering exceptional quality and service.
                  </p>
                </div>
              </RevealItem>
            </div>

            {/* Mission */}

            <div className="mt-16">
              <RevealItem direction="up" delay={0.22}>
                <h3
                  className="text-4xl font-black mb-6"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  Mission
                </h3>
              </RevealItem>

              <RevealItem direction="up" delay={0.26}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our experienced team is focused on providing exceptional
                  service and superior products that exceed the expectations of
                  our clients. We are dedicated to offering a wide range of
                  reliable and efficient solutions to meet the diverse steel and
                  iron requirements of our customers.
                </p>
              </RevealItem>

              <div className="mt-8 space-y-5">
                <RevealItem direction="left" delay={0.30}>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-orange-600 text-xl mt-1" />
                    <p>
                      To supply top-grade steel materials to meet modern
                      infrastructure needs.
                    </p>
                  </div>
                </RevealItem>

                <RevealItem direction="left" delay={0.36}>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-orange-600 text-xl mt-1" />
                    <p>
                      To offer competitive pricing without compromising on
                      quality.
                    </p>
                  </div>
                </RevealItem>

                <RevealItem direction="left" delay={0.42}>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-orange-600 text-xl mt-1" />
                    <p>
                      To build long-term relationships based on integrity,
                      performance, and mutual growth.
                    </p>
                  </div>
                </RevealItem>
              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default About;