import React from "react";

const Leftside = () => {
  return (
    <div className="w-full md:w-1/2 py-10 px-4 sm:px-0 ">
      <h1
        className="font-bold leading-tight dynamic-text text-(--secondary-color)
 mb-3"
      >
        Confuse in English ?
      </h1>
      <h1 className="text-lg font-bold leading-tight  text-(--primary-color) dynamic-medium-text">
        Complete English Grammar & Full Book Coverage
      </h1>

      <p className="mt-4 text-gray-300  leading-tite max-w-lg dynamic-small-text max-w-xl text-justify">
        At our institute, we ensure 100% completion of the
        <span className="text-yellow-400 font-semibold text-justify text-[clamp(1rem,2vw,1.6rem)]">
          {" "}
          Class 9th and 10th English syllabus{" "}
        </span>
        with detailed explanations, regular practice tests, and exam-focused
        preparation.
      </p>

      {/* 
      <p className="mt-4 text-gray-100 dynamic-small-text max-w-xl text-justify">
        Throughout the academic year, we guarantee complete English grammar
        mastery along with detailed explanation of every chapter from the
        prescribed textbook.
      </p> */}

      <p className="mt-4 text-lg text-gray-100 dynamic-small-text max-w-xl text-justify">
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
