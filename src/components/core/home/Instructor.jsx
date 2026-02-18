import InstructorImage from "/instructor.jpg";
import { Helmet } from "react-helmet";

const Instructor = () => {
  return (
    <>
      {/* 🔹 SEO META TAGS */}
      <Helmet>
        <title>
          Mr. Sivanand | English Instructor | Career Guidance Coaching
        </title>

        <meta
          name="description"
          content="Meet Mr. Sivanand, an experienced English instructor specializing in grammar, exam preparation, and concept clarity at Career Guidance Coaching Center."
        />

        <meta
          name="keywords"
          content="English teacher, English grammar classes, coaching center, exam preparation, Mr Sivanand coaching"
        />

        <meta name="author" content="Career Guidance Coaching Center" />

        {/* Open Graph (For Facebook & WhatsApp Sharing) */}
        <meta
          property="og:title"
          content="Meet Mr. Sivanand - English Instructor"
        />
        <meta
          property="og:description"
          content="Experienced English mentor helping students achieve academic excellence."
        />
        <meta property="og:image" content="/instructor.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-gray-900">
        <section className="py-16 px-4 text-white container mx-auto">
          <div className="flex justify-between items-center md:items-start gap-12 flex-col md:flex-row">
            {/* 🔹 Instructor Image */}
            <div className="w-full md:w-1/2 flex justify-center sm:justify-start">
              <img
                src={InstructorImage}
                alt="Mr. Sivanand - English Instructor"
                loading="lazy"
                className="min-w-72 h-fit max-h-100 object-cover rounded-2xl shadow-xl sm:scale-x-[-1]"
              />
            </div>

            {/* 🔹 Instructor Info */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Meet Your Instructor</h1>

              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                Mr. Sivanand
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                A passionate educator with years of experience in teaching
                English and mentoring students to achieve academic excellence.
              </p>

              {/* 🔹 Abilities */}
              <ul className="space-y-4">
                <li className="bg-gray-800 p-4 rounded-lg shadow-md">
                  📘 Expert in English Grammar
                </li>

                <li className="bg-gray-800 p-4 rounded-lg shadow-md">
                  🎯 Exam-Oriented Preparation
                </li>

                <li className="bg-gray-800 p-4 rounded-lg shadow-md">
                  🧠 Concept Clarity & Doubt Solving
                </li>

                <li className="bg-gray-800 p-4 rounded-lg shadow-md">
                  📝 Regular Tests & Performance Analysis
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Instructor;
