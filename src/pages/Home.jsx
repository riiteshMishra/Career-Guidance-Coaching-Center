import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/core/home/Hero";
import Instructor from "../components/core/home/Instructor";
import About from "../components/core/home/About";
import Courses from "../components/core/home/Courses";
import Result from "../components/core/home/Results";
import Contact from "../components/core/home/Contact";

const Home = () => {
  return (
    <>
      {/* MAIN PAGE SEO (Only Here) */}
      <Helmet>
        <title>
          Best English Coaching for Class 9 & 10 in Lucknow | Sivanand Sir
        </title>

        <meta
          name="description"
          content="Top English coaching in Lucknow for Class 9 and 10 students. Complete grammar coverage, full textbook explanation, and 98% board exam success rate."
        />

        <meta
          name="keywords"
          content="English coaching Lucknow, Class 9 English, Class 10 English, grammar classes, board exam preparation"
        />
      </Helmet>

      <main className="h-fit">
        <Hero /> {/* Contains 1 H1 */}
        <Instructor /> {/* H2 */}
        <About /> {/* H2 */}
        <Courses /> {/* H2 */}
        <Result /> {/* H2 */}
        <Contact /> {/* H2 */}
      </main>
    </>
  );
};

export default Home;
