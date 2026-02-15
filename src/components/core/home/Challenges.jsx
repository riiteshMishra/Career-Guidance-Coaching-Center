import React from "react";

const Challenges = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Score 98% and Unlock Exclusive Rewards 🎯
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          Students who achieve 98% or above receive special benefits and
          recognition from our coaching institute.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              💰 Scholarship Opportunities
            </h3>
            <p className="text-gray-600">
              Get special fee discounts or full scholarships for the next
              academic session.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🏆 Certificate of Excellence
            </h3>
            <p className="text-gray-600">
              Receive a special award certificate to boost your academic and
              career profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🎁 Exclusive Gifts & Recognition
            </h3>
            <p className="text-gray-600">
              Top performers receive exciting gifts and public recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
