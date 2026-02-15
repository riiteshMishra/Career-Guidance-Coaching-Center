import React from "react";

const Courses = () => {
  return (
    <div className="bg-(--secondary-color)">
      <section className="py-16 px-6 md:px-20 container mx-auto" id="courses">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Weekly Course Structure
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A balanced and structured weekly schedule designed for complete
            English mastery.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Days */}
          <div className="p-8 bg-white rounded-2xl shadow hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600">📘 3 Days</h3>
            <p className="mt-3 text-lg font-semibold">English Textbook</p>
            <p className="mt-2 text-gray-600">
              Detailed explanation of every chapter with important questions and
              answers.
            </p>
          </div>

          {/* Grammar Days */}
          <div className="p-8 bg-white rounded-2xl shadow hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600">📖 3 Days</h3>
            <p className="mt-3 text-lg font-semibold">English Grammar</p>
            <p className="mt-2 text-gray-600">
              Complete grammar coverage from basics to advanced with regular
              practice.
            </p>
          </div>

          {/* Conversation Day */}
          <div className="p-8 bg-white rounded-2xl shadow hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600">🗣 1 Day</h3>
            <p className="mt-3 text-lg font-semibold">English Conversation</p>
            <p className="mt-2 text-gray-600">
              Interactive speaking sessions to build confidence and fluency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
