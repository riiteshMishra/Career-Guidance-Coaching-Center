import React from "react";

const About = () => {
  return (
    <div className="bg-white" id="about">
      <section className="py-10 px-6 md:px-20  text-gray-800 container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            About Our Coaching Institute
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to academic excellence and strong English foundation for
            over 7 years.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-blue-600">7+</h3>
            <p className="mt-2 text-lg font-medium">
              Years of Teaching Experience
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-blue-600">1300+</h3>
            <p className="mt-2 text-lg font-medium">
              Students Successfully Guided
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-blue-600">98%</h3>
            <p className="mt-2 text-lg font-medium">Board Exam Success Rate</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 max-w-3xl mx-auto text-gray-600 text-lg text-justify">
          <p>
            For the past 7+ years, our institute has been committed to providing
            complete English grammar coverage, full textbook explanation, and
            structured exam preparation. Our focused guidance and personal
            attention ensure that even academically weak students achieve
            remarkable improvement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
