import { useState } from "react";

import profile from "../assets/82447771.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import tensThumb from "../assets/tens_thumb.png";

export default function Main() {
  const [loaded, setLoaded] = useState(true);

  const linkStrong =
    "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400 " +
    "underline underline-offset-4 decoration-teal-400/40 hover:decoration-teal-200 " +
    "hover:drop-shadow-[0_0_6px_#2dd4bf] transition";

  const leadSpan =
    "font-semibold text-white tracking-wide drop-shadow-[0_0_6px_rgba(45,212,191,0.25)]";

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
            <h1 className="text-3xl font-bold">Nikolaj Skovgaard Iversen</h1>
            <p className="text-xl font-bold text-gray-300">
              Fullstack Frontend developer · Game developer · professional gamer
              and coach
            </p>

            <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Fullstack frontend developer</span>{" "}
              with a passion for creating visually appealing user interfaces. I
              excel in translating design concepts into responsive web apps or
              mobile apps and creating user-friendly solutions with backend API
              integration as well.
            </p>

            <p className="text-md font-light text-gray-400 mt-4">
              <span className={leadSpan}>Game developer</span> with a lot of
              experience in Unity and Game Maker Studio. Currently working on
              mobile games and small indie projects. Recently released a game on
              Google Play Store called{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.nsigames.nsigames.tens"
                target="_blank"
                className={linkStrong}
              >
                Tens
              </a>
              . I will be releasing more games in the near future.
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

          <a
            href="https://play.google.com/store/apps/details?id=com.nsigames.nsigames.tens"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Tens on Google Play"
            className="group mt-6 block"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-offset="80"
          >
            <div className="flex items-center gap-4 bg-gradient-to-b from-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-3 hover:bg-white/15 transition">
              <img
                src={tensThumb}
                alt="Tens game thumbnail"
                className="w-16 h-16 rounded-lg object-cover ring-1 ring-white/30"
              />

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Featured
                </p>
                <h3 className="font-semibold leading-tight">
                  Tens — Mobile Puzzle Game
                </h3>
                <p className="text-sm text-gray-400">
                  Tap to view on Google Play
                </p>
              </div>

              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-10 opacity-90 group-hover:opacity-100 transition"
                loading="lazy"
              />
            </div>
          </a>

          <ul className="flex mt-6 md:mt-8 gap-8 items-center">
            <li>
              <a
                href="https://github.com/gosuenesy"
                rel="noreferrer"
                target="_blank"
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#2dd4bf]"
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
                href="https://www.linkedin.com/in/nikolaj-iversen-525279224/"
                rel="noreferrer"
                target="_blank"
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#2dd4bf]"
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
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#2dd4bf]"
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
                className="transition duration-300 hover:drop-shadow-[0_0_6px_#2dd4bf]"
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
    </>
  );
}
