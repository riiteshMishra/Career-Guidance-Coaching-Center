import InstructorImage from "/instructor.jpg";

const Instructor = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* 🔹 Instructor Image */}
        <div className="flex justify-center">
          <img
            src={InstructorImage}
            alt="Instructor image"
            loading="lazy"
            className="w-72 object-cover rounded-2xl shadow-xl scale-x-[-1] "
          />
        </div>

        {/* 🔹 Instructor Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Meet Your Instructor</h2>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Mr. Sivanand
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            A passionate educator with years of experience in teaching English
            and mentoring students to achieve academic excellence.
          </p>

          {/* 🔹 Abilities */}
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              📘 Expert in English Grammar
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              🎯 Exam-Oriented Preparation
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              🧠 Concept Clarity & Doubt Solving
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              📝 Regular Tests & Performance Analysis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
