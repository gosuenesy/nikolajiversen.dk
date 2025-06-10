import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projs from "./components/Projs";
import Footer from "./components/Footer";
import Twitch from "./components/Twitch";
import Coaching from "./components/Coaching";
import AOS from "aos";
import "aos/dist/aos.css";
import HrCurve from "./components/HrCurve";

function App() {
  useEffect(() => {
    document.title = "Nikolaj Skovgaard Iversen";
    AOS.init();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="relative z-10 px-6 lg:px-20 xl:px-36">
        <Navbar />

        <Main />

        <div className="my-20">
          <HrCurve />
          <Skills />
        </div>

        <div className="my-20">
          <HrCurve />
          <Projs />
        </div>

        <div className="my-20">
          <HrCurve />
          <Twitch />
        </div>

        <div className="my-20">
          <HrCurve />
          <Coaching />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
