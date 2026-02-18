import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          About Our English Coaching Institute | Career Guidance Coaching
        </title>

        <meta
          name="description"
          content="Learn about our English coaching institute with 7+ years of experience, 1300+ students guided, and 98% board exam success rate."
        />

        <meta
          name="keywords"
          content="English coaching institute, best English classes, grammar coaching, board exam preparation, coaching center"
        />
      </Helmet>

      <div className="bg-white dark:bg-cyan-900">
        <section
          className=" py-10 px-6 md:px-20 container mx-auto transition-colors duration-300"
          id="about"
        >
          {/* Heading */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Our Coaching Institute
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dedicated to academic excellence and strong English foundation for
              over 7 years.
            </p>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <article className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow">
              <h2 className="text-4xl font-bold text-blue-600">7+</h2>
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Years of Teaching Experience
              </p>
            </article>

            <article className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow">
              <h2 className="text-4xl font-bold text-blue-600">1300+</h2>
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Students Successfully Guided
              </p>
            </article>

            <article className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow">
              <h2 className="text-4xl font-bold text-blue-600">98%</h2>
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Board Exam Success Rate
              </p>
            </article>
          </div>

          {/* Description */}
          <article className="mt-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg text-justify">
            <p>
              For the past 7+ years, our institute has been committed to
              providing complete English grammar coverage, full textbook
              explanation, and structured exam preparation. Our focused guidance
              and personal attention ensure that even academically weak students
              achieve remarkable improvement.
            </p>
          </article>
        </section>
      </div>
    </>
  );
};

export default About;
