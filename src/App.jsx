import { useEffect, useState } from "react";
import Lenis from "lenis";
import Footer from "./components/core/Footer/Index";
import Header from "./components/core/header/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Challenges from "./components/core/home/Challenges";
import AppLoading from "./components/common/AppLoading";

const App = () => {
  const [appLoading, setAppLoading] = useState(true);
  // LENIS SCROLLING EFFECT
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // scroll speed smoothness
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return <AppLoading />;
  }

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
