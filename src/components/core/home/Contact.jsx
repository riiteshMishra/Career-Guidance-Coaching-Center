import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { handleSubmit, register } = useForm();

  // Handle form submission logic here
  const submitHandler = (data) => {
    console.log("Form Data:", data);
    // You can add your form submission logic here, such as sending the data to an API or displaying a success message.
  };
  return (
    <div className="bg-gray-300">
      <section className="py-16 px-6 md:px-20 container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch for admissions and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-(--secondary-color)" />
              <p className="text-lg text-gray-700">
                Near Main Market, Your City Name
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-(--secondary-color)" />
              <p className="text-lg text-gray-700">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl text-green-500" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--secondary-color)"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--secondary-color)"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                {...register("message")}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-(--secondary-color)"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-(--secondary-color) text-white py-3 rounded-lg hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
