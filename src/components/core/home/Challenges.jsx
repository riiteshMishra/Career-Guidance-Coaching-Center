import React from "react";
import { Helmet } from "react-helmet";

const Challenges = () => {
  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>Score 98% & Earn Scholarships | Career Guidance Coaching</title>

        <meta
          name="description"
          content="Students scoring 98% or above receive scholarships, certificates of excellence, and exclusive rewards at Career Guidance Coaching Center."
        />

        <meta
          name="keywords"
          content="98 percent scholarship, board exam rewards, certificate of excellence, coaching center awards"
        />
      </Helmet>

      <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-500 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* 🔹 Heading */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Score 98% and Unlock Exclusive Rewards 🎯
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Students who achieve 98% or above receive special benefits and
              recognition from our coaching institute.
            </p>
          </header>

          {/* 🔹 Reward Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                Scholarship Opportunities
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Get special fee discounts or full scholarships for the next
                academic session.
              </p>
            </article>

            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                Certificate of Excellence
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Receive a special award certificate to boost your academic and
                career profile.
              </p>
            </article>

            <article className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                Exclusive Gifts & Recognition
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Top performers receive exciting gifts and public recognition.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenges;
