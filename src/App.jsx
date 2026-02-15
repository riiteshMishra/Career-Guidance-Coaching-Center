import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "./components/core/Footer/Index";
import Header from "./components/core/header/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed smoothness
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
        <Courses />
        <Result />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
