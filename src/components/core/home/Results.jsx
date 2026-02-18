import React from "react";
import { Helmet } from "react-helmet";

const toppers = [
  {
    name: "Rahul Sharma",
    marks: "98%",
    image:
      "https://images.unsplash.com/photo-1606080260383-aaeacb8de33e?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Anjali Verma",
    marks: "96%",
    image:
      "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Aman Singh",
    marks: "95%",
    image:
      "https://images.unsplash.com/photo-1577120321615-6a748c007151?w=500&auto=format&fit=crop&q=60",
  },
];

const Result = () => {
  return (
    <>
      {/* 🔹 SEO */}
      <Helmet>
        <title>Top Board Exam Performers | Career Coaching Center</title>
        <meta
          name="description"
          content="Meet our top-performing students who scored 95% and above in board examinations."
        />
      </Helmet>

      <div className="bg-[#68b1faf7] dark:bg-gray-900">
        <section className=" py-16 px-6 md:px-20 container mx-auto transition-colors duration-300">
          {/* Heading */}
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Top Board Exam Performers
            </h2>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Students who scored 95% and above in board examinations.
            </p>
          </header>

          {/* Toppers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {toppers.map((student, index) => (
              <article
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
              >
                <img
                  src={student.image}
                  alt={`${student.name} - Board Exam Topper with ${student.marks}`}
                  loading="lazy"
                  width="128"
                  height="128"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
                />

                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {student.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                  {student.marks}
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  Board Exam Result
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Result;
