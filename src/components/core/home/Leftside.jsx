import React from "react";
import { useSelector } from "react-redux";

const Leftside = () => {
  const theme = useSelector((state) => state.ui.theme);

  const isDark = theme === "dark";

  return (
    <div className="w-full md:w-1/2 py-10 px-4 sm:px-0">
      <h1
        className={`font-bold leading-tight mb-3 dynamic-text ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Career Coaching Center
      </h1>

      <h1
        className={`text-lg font-bold leading-tight dynamic-medium-text ${
          isDark ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Complete English Grammar & Full Book Coverage
      </h1>

      <p
        className={`mt-4 leading-tight max-w-xl dynamic-small-text text-justify ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        At our institute, we ensure 100% completion of the
        <span className="text-yellow-500 font-semibold text-[clamp(1rem,2vw,1.6rem)]">
          {" "}
          Class 9th and 10th English syllabus{" "}
        </span>
        with detailed explanations, regular practice tests, and exam-focused
        preparation.
      </p>

      <p
        className={`mt-4 text-lg dynamic-small-text max-w-xl text-justify ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        At our institute, even academically weak students receive individual
        attention, extra practice sessions, and continuous mentoring to ensure
        steady improvement.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Enroll Now
      </button>
    </div>
  );
};

export default Leftside;
