import InstructorImage from "/instructor.jpg";

const Instructor = () => {
  return (
    <div className=" bg-gray-900">
      <section className="py-16 px-4 text-white container mx-auto">
        <div className="flex  justify-between items-center md:items-start gap-12 flex-col md:flex-row">
          {/* 🔹 Instructor Image */}
          <div className="w-full md:w-1/2 flex justify-center sm:justify-start">
            <img
              src={InstructorImage}
              alt="Instructor image"
              loading="lazy"
              className="min-w-72 h-fit max-h-100 object-cover rounded-2xl shadow-xl sm:scale-x-[-1] "
            />
          </div>

          {/* 🔹 Instructor Info */}
          <div className="w-full md:w-1/2">
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
    </div>
  );
};

export default Instructor;
