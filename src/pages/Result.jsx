import React from "react";

const toppers = [
  {
    name: "Rahul Sharma",
    marks: "98%",
    image:
      "https://images.unsplash.com/photo-1606080260383-aaeacb8de33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVscyUyMHRlZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Anjali Verma",
    marks: "96%",
    image:
      "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Aman Singh",
    marks: "95%",
    image:
      "https://images.unsplash.com/photo-1577120321615-6a748c007151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVscyUyMHRlZW4lMjBib3l8ZW58MHx8MHx8fDA%3D",
  },
];

const Result = () => {
  return (
    <div className="bg-white">
      <section className="py-16 px-6 md:px-20 container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Our Top Performers</h2>
          <p className="mt-4 text-lg text-gray-600">
            Proud moments of our students who achieved excellence.
          </p>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {toppers.map((student, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
              />

              <h3 className="mt-4 text-xl font-bold">{student.name}</h3>

              <p className="mt-2 text-2xl font-bold text-blue-600">
                {student.marks}
              </p>

              <p className="text-gray-600">Board Exam Result</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Result;
