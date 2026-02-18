import React from "react";
import { Helmet } from "react-helmet";

const Courses = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Weekly English Course Structure | Career Guidance Coaching
        </title>

        <meta
          name="description"
          content="Structured weekly English course including textbook learning, grammar mastery, and spoken English sessions for complete language development."
        />

        <meta
          name="keywords"
          content="English course structure, grammar classes, spoken English, weekly English coaching"
        />
      </Helmet>

      <div className="bg-[var(--secondary-color)] dark:bg-pink-900">
        <section
          className=" py-16 px-6 md:px-20 container mx-auto transition-colors duration-300"
          id="courses"
        >
          {/* Heading */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Weekly English Course Structure
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A balanced and structured weekly schedule designed for complete
              English mastery.
            </p>
          </header>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 📘 Textbook */}
            <article className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-blue-600">
                3 Days – English Textbook
              </h2>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Detailed explanation of every chapter with important questions
                and answers for complete syllabus coverage.
              </p>
            </article>

            {/* 📖 Grammar */}
            <article className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-blue-600">
                3 Days – English Grammar
              </h2>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Complete grammar coverage from basics to advanced with
                structured practice and revision.
              </p>
            </article>

            {/* 🗣 Conversation */}
            <article className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-blue-600">
                1 Day – English Conversation
              </h2>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Interactive speaking sessions to build confidence, fluency, and
                real-world communication skills.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;
