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
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Main />
      <HrCurve />
      <Skills />
      <HrCurve />
      <Projs />
      <HrCurve />
      <Twitch />
      <HrCurve />
      <Coaching />
      <Footer />
    </div>
  );
}

export default App;
