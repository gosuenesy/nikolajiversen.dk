import { useState } from "react";

import profile from "../assets/82447771.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import tensThumb from "../assets/tens_thumb.png";
import esportschoolThumb from "../assets/logo.png";

export default function Main() {
  const [loaded, setLoaded] = useState(true);

  const linkStrong =
    "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400 " +
    "decoration-teal-400/40 hover:decoration-teal-200 " +
    "hover:drop-shadow-[0_0_6px_#2dd4bf] transition";

  const leadSpan =
    "font-semibold text-white tracking-wide drop-shadow-[0_0_6px_rgba(45,212,191,0.25)]";

  const socialLink =
    "inline-block text-gray-400 transition-all duration-300 " +
    "hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf] hover:-translate-y-0.5";

  return (
    <>
      <div
        id="home"
        className="scroll-mt-32 flex w-full h-screen flex-col md:flex-row gap-20 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 flex justify-center md:justify-end md:p-4">
          <div
            className="bg-gradient-to-r from-teal-800 to-teal-600 p-[2px] rounded-full inline-block"
            data-aos-duration="1500"
            data-aos-offset="200"
          >
            <img
              src={profile}
              alt="profile"
              onLoad={() => setLoaded(true)}
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover bg-dark-500"
            />
          </div>
        </div>

        <div
          className="md:w-3/6 
             bg-gradient-to-b from-white/10 backdrop-blur-md 
             border border-white/20 shadow-lg 
             rounded-xl p-6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full">
            <h1 className="text-3xl font-bold">Nikolaj Iversen</h1>
            <p className="text-xl font-bold text-gray-300">
              Fullstack frontend developer · Game developer · Pro gamer · Coach
            </p>

            <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Fullstack frontend developer</span>{" "}
              with professional experience with React, TypeScript and various
              backend technologies. Co-founder and lead developer of{" "}
              <a
                href="https://www.esportschool.gg"
                target="_blank"
                className={linkStrong}
              >
                esportschool.gg
              </a>
              , and creator of browser games like{" "}
              <a
                href="https://ranked82-0.com"
                target="_blank"
                className={linkStrong}
              >
                ranked82-0
              </a>{" "}
              and{" "}
              <a
                href="https://38wins.io"
                target="_blank"
                className={linkStrong}
              >
                38wins
              </a>
              .
            </p>

            {/* <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Co-Founder of esportschool.gg</span> —
              a competitive gaming education platform. Built with React,
              JavaScript, Tailwind, and Supabase.{" "}
              <a
                href="https://www.esportschool.gg"
                target="_blank"
                className={linkStrong}
              >
                Visit esportschool.gg
              </a>
              .
            </p> */}

            <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Game developer</span> with years of
              experience in Unity and Game Maker Studio. Recently released a
              game on Google Play Store called{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.nsigames.nsigames.tens"
                target="_blank"
                className={linkStrong}
              >
                Tens
              </a>
              .
            </p>

            <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Professional gamer</span> in various
              FPS games such as Quake and Diabotical with ~6000 USD in
              tournament winnings. More info on my{" "}
              <a
                href="https://liquipedia.net/arenafps/Enesy"
                target="_blank"
                className={linkStrong}
              >
                Liquipedia
              </a>
              .
            </p>

            <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Professional coach</span> - i have
              coached multiple people up to a competitive level in multiple
              games. My coaching includes everything from in-game mechanics to
              strategy and mentality.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-offset="80"
          >
            <a
              href="https://www.esportschool.gg"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit EsportSchool.gg"
              className="group block"
            >
              <div className="flex items-center gap-4 bg-gradient-to-b from-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-3 h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.45)] hover:-translate-y-0.5">
                <img
                  src={esportschoolThumb}
                  alt="EsportSchool.gg logo"
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Co-Founder
                  </p>
                  <h3 className="font-semibold leading-tight truncate">
                    esportschool.gg
                  </h3>
                  <p className="text-sm text-gray-400 truncate">
                    Esports education platform
                  </p>
                </div>

                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:text-teal-400 group-hover:translate-x-1"
                />
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.nsigames.nsigames.tens"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Tens on Google Play"
              className="group block"
            >
              <div className="flex items-center gap-4 bg-gradient-to-b from-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-3 h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.45)] hover:-translate-y-0.5">
                <img
                  src={tensThumb}
                  alt="Tens game thumbnail"
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Featured
                  </p>
                  <h3 className="font-semibold leading-tight truncate">
                    Tens — Mobile Puzzle Game
                  </h3>
                  <p className="text-sm text-gray-400 truncate">
                    Tap to view on Google Play
                  </p>
                </div>

                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:text-teal-400 group-hover:translate-x-1"
                />
              </div>
            </a>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-600 hover:to-emerald-500 text-white font-semibold rounded-full px-6 py-2.5 shadow-md border border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.45)] hover:-translate-y-0.5"
            >
              See my work
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </a>

            <ul className="flex gap-8 items-center">
            <li>
              <a
                href="https://github.com/gosuenesy"
                rel="noreferrer"
                target="_blank"
                className={socialLink}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    background: "linear-gradient(to right, #134e4a, #0f766e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2.5rem",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikolaj-iversen-dev/"
                rel="noreferrer"
                target="_blank"
                className={socialLink}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{
                    background: "linear-gradient(to right, #134e4a, #0f766e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2.5rem",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitch.tv/enesy_"
                rel="noreferrer"
                target="_blank"
                className={socialLink}
              >
                <FontAwesomeIcon
                  icon={faTwitch}
                  style={{
                    background: "linear-gradient(to right, #134e4a, #0f766e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2.5rem",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/gosuenesy"
                rel="noreferrer"
                target="_blank"
                className={socialLink}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    background: "linear-gradient(to right, #134e4a, #0f766e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "2.5rem",
                  }}
                />
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
