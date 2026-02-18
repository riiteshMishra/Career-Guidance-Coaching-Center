import { useEffect, useState } from "react";
import Lenis from "lenis";
import Footer from "./components/core/Footer/Index";
import Header from "./components/core/header/Index";
import Home from "./pages/Home";
import AppLoading from "./components/common/AppLoading";
import { useSelector } from "react-redux";

const App = () => {
  const { theme } = useSelector((state) => state.ui);
  const [appLoading, setAppLoading] = useState(true);

  // LENIS SCROLLING EFFECT
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [appLoading]);

  // GLOBLE APP LOADING
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // if (appLoading) {
  //   return <AppLoading />;
  // }

  return (
    <div className="min-h-screen   text-gray-800">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
