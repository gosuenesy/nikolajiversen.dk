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
import bg from "./assets/bg.png";

function App() {
  useEffect(() => {
    document.title = "Nikolaj Skovgaard Iversen";
    AOS.init();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        {/* Image Layer */}
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center 
               opacity-60 brightness-50"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scaleX(-1) translateX(10%)",
            maskImage: "linear-gradient(to left, black 60%, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black 60%, transparent)",
          }}
        />
      </div>
      {/* <div className="blob blob1"></div> */}
      {/* <div className="blob blob2"></div> */}

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
