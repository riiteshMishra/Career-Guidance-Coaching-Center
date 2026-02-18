import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Leftside = () => {
  const theme = useSelector((state) => state.ui.theme);
  const isDark = theme === "dark";

  return (
    <>
      {/* SEO META (Homepage Main Identity) */}
      <Helmet>
        <title>
          Best English Coaching for Class 9 & 10 | Career Coaching Center
        </title>

        <meta
          name="description"
          content="Expert English coaching for Class 9th and 10th students with full grammar coverage, textbook explanation, and exam-focused preparation."
        />

        <meta
          name="keywords"
          content="English coaching, Class 9 English, Class 10 English, grammar classes, board exam preparation"
        />
      </Helmet>

      <div className="w-full md:w-1/2 py-10 px-4 sm:px-0">
        {/* MAIN H1 (Only One H1 On Homepage) */}
        <h1
          className={`font-bold leading-tight mb-3 dynamic-text ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Best English Coaching for Class 9th & 10th Students
        </h1>

        {/* Sub Heading */}
        <h2
          className={`text-lg font-bold leading-tight dynamic-medium-text ${
            isDark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Complete English Grammar & Full Book Coverage
        </h2>

        {/* Description */}
        <p
          className={`mt-4 leading-tight max-w-xl dynamic-small-text text-justify ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We ensure 100% completion of the{" "}
          <span className="text-yellow-500 font-semibold">
            Class 9th and 10th English syllabus
          </span>{" "}
          with detailed explanations, regular practice tests, and exam-focused
          preparation.
        </p>

        <p
          className={`mt-4 max-w-xl text-justify ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Even academically weak students receive individual attention, extra
          practice sessions, and continuous mentoring to ensure steady
          improvement.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </div>
    </>
  );
};

export default Leftside;
