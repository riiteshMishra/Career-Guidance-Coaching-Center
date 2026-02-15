import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "./components/core/Footer/Index";
import Header from "./components/core/header/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Challenges from "./components/core/home/Challenges";

const App = () => {
  // LENIS SCROLLING EFFECT
  useEffect(() => {
    const lenis = new Lenis({
      duration: .5, // scroll speed smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen   text-gray-800">
      <Header />
      <main>
        <Home />
        <About />
        <Challenges />
        <Courses />
        <Result />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
