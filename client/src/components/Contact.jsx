const API_URL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    productInterest: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      productInterest: form.productInterest.trim(),
      message: form.message.trim(),
    };

    // minimal required-field guard (backend also validates required)
    if (
      !payload.name ||
      !payload.phone ||
      !payload.email ||
      !payload.productInterest ||
      !payload.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill all fields before submitting.",
      });
      return;
    }

    try {
      setSubmitting(true);
      await axios.post(
  `${API_URL}/api/inquiries`,
  payload
);

      setStatus({
        type: "success",
        message: "Inquiry sent successfully. We will contact you soon.",
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        productInterest: "",
        message: "",
      });
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Failed to submit inquiry. Please try again.";
      setStatus({ type: "error", message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <p className="text-orange-600 uppercase tracking-[5px] font-semibold text-sm mb-4">
              Get In Touch
            </p>

            <h2
              className="text-[42px] md:text-[72px] font-black text-black leading-[1.05]"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              Request a Quote
              <br />
              or Visit Our Yard
            </h2>

            <p className="text-gray-600 text-xl mt-8 leading-relaxed max-w-xl">
              Talk to our team about your project requirements. We'll respond with
              availability, pricing, and dispatch timelines for branded steel
              materials.
            </p>

            {/* Contact Info */}
            <div className="mt-14 space-y-8">
              {/* Addresses */}
<div className="flex items-start gap-5">
  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
    <FaMapMarkerAlt className="text-black text-2xl" />
  </div>

  <div>
    <p className="uppercase tracking-[3px] text-sm text-gray-500">
      Addresses
    </p>

    <h4 className="text-black text-xl mt-1">
      1: K R Road, Doggalli Compound, 2nd Cross, Davanagere, Karnataka, India
    </h4>

    <h4 className="text-black text-xl mt-3">
      2: Chikkabudihal, Davanagere, Karnataka, India
    </h4>
  </div>
</div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FaPhoneAlt className="text-black text-xl" />
                </div>
                <div>
                  <p className="uppercase tracking-[3px] text-sm text-gray-500">
                    Phone
                  </p>
                  <h4 className="text-black text-2xl">
                    +91 9008999444
                  </h4>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FaEnvelope className="text-black text-xl" />
                </div>
                <div>
                  <p className="uppercase tracking-[3px] text-sm text-gray-500">
                    Email
                  </p>
                  <h4 className="text-black text-2xl break-all">
                    asiansteelsdvg@gmail.com
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block uppercase tracking-[3px] text-sm text-gray-600 mb-3">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full h-14 border border-gray-200 rounded-xl px-4 text-black outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-[3px] text-sm text-gray-600 mb-3">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="text"
                    className="w-full h-14 border border-gray-200 rounded-xl px-4 text-black outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block uppercase tracking-[3px] text-sm text-gray-600 mb-3">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full h-14 border border-gray-200 rounded-xl px-4 text-black outline-none focus:border-orange-500"
                  required
                />
              </div>

              {/* Product Interest */}
              <div>
                <label className="block uppercase tracking-[3px] text-sm text-gray-600 mb-3">
                  Product Interest
                </label>
                <input
                  name="productInterest"
                  value={form.productInterest}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. TMT Bars, MS Pipes"
                  className="w-full h-14 border border-gray-200 rounded-xl px-4 text-black outline-none focus:border-orange-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block uppercase tracking-[3px] text-sm text-gray-600 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full border border-gray-200 rounded-xl p-4 text-black outline-none focus:border-orange-500 resize-none"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={submitting}
                className="
                  w-full
                  bg-orange-600
                  hover:bg-orange-700
                  text-white
                  font-semibold
                  h-14
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {submitting ? "Sending..." : "Send Inquiry"}
                <FaPaperPlane />
              </button>

              {status.message ? (
                <p
                  className={`text-center text-sm ${
                    status.type === "success"
                      ? "text-green-600"
                      : status.type === "error"
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {status.message}
                </p>
              ) : (
                <p className="text-center text-gray-500 text-sm">
                  We typically respond within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

