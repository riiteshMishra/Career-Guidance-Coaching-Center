import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { handleSubmit, register } = useForm();

  const submitHandler = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Career Coaching Center</title>
        <meta
          name="description"
          content="Contact Career Coaching Center for admissions, inquiries, and English coaching details."
        />
      </Helmet>

      <div className="bg-indigo-100 dark:bg-sky-950">
        <section className=" py-16 px-6 md:px-20 container mx-auto transition-colors duration-300">
          {/* Heading */}
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Get in touch for admissions and inquiries.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <address className="not-italic space-y-6 text-gray-800 dark:text-gray-300">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-[var(--secondary-color)]" />
                <p className="text-lg">Near Main Market, Your City Name</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl text-[var(--secondary-color)]" />
                <a href="tel:+919876543210" className="text-lg hover:underline">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-green-500" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-green-600 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </address>

            {/* Right Side - Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
              <form
                className="space-y-5"
                onSubmit={handleSubmit(submitHandler)}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  {...register("message")}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[var(--secondary-color)] text-white py-3 rounded-lg hover:opacity-90 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
