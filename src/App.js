// src/App.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projs from "./components/Projs";
import Footer from "./components/Footer";
import Twitch from "./components/Twitch";
import Coaching from "./components/Coaching";
import HrCurve from "./components/HrCurve";
import Reviews from "./components/Reviews";

import bg from "./assets/bg.png";
import "./App.css";

function ScrollAndAOS() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [location.pathname]);
  return null;
}

// Smooth scroll with a fixed-header offset
function scrollToIdWithOffset(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const target = window.scrollY + rect.top - offset;
  window.scrollTo({ top: target, behavior: "smooth" });
}

function HomeWrapper() {
  const location = useLocation();

  useEffect(() => {
    // support /?to=skills (or projects, twitch, coaching, etc.)
    const params = new URLSearchParams(location.search);
    const to = params.get("to");
    if (to) {
      // wait a tick to ensure the section is rendered
      setTimeout(() => scrollToIdWithOffset(to, 80), 0);
    }
  }, [location.search]);

  return (
    <>
      <Main />

      <div className="my-20" id="skills">
        <HrCurve />
        <Skills />
      </div>

      <div className="my-20" id="projects">
        <HrCurve />
        <Projs />
      </div>

      <div className="my-20" id="twitch">
        <HrCurve />
        <Twitch />
      </div>

      <div className="my-20" id="coaching">
        <HrCurve />
        <Coaching />
      </div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Nikolaj Skovgaard Iversen";
    AOS.init({ duration: 500, once: true, offset: 100 });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center opacity-60 brightness-50"
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

      {/* Foreground */}
      <div className="relative z-10 px-6 lg:px-20 xl:px-36">
        <Navbar />
        <ScrollAndAOS />

        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
