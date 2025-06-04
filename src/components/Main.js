import { useState } from "react";

import profile from "../assets/82447771.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      <div
        id="home"
        className="scroll-mt-32 flex w-full h-screen flex-col md:flex-row gap-20 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos-duration="1500"
            style={{
              float: "right",
              borderRadius: "50%",
              border: "3px solid #2dd4bf",
            }}
            rounded
            data-aos-offset="200"
            width={"55%"}
            height={"55%"}
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-3xl font-bold">Nikolaj Skovgaard Iversen</h1>
            <p class="text-xl font-bold text-gray-300">
              Fullstack Frontend developer, professional gamer and coach
            </p>
            <p className="text-md font-light text-gray-400 ">
              Fullstack frontend developer with a passion for creating visually
              appealing user interfaces. I excel in translating design concepts
              into responsive web apps or mobile apps and creating user-friendly
              solutions and backend development with API.
              <br />
              <br />
              Professional gamer in various FPS games such as Quake and
              Diabotical with ~6000 USD in tournament winnings. More info on my{" "}
              <a
                href="https://liquipedia.net/arenafps/Enesy"
                target="_blank"
                className="hover:text-teal-400 text-md font-bold text-center"
              >
                Liquipedia
              </a>
              .
              <br />I have coached multiple people up to a competitive level in
              multiple games. My coaching includes everything from in-game
              mechanics to strategy and mentality.
            </p>
          </div>
          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/gosuenesy"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} color="#2dd4bf" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikolaj-iversen-525279224/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  size="2xl"
                  icon={faLinkedinIn}
                  color="#2dd4bf"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitch.tv/enesy_"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faTwitch} color="#2dd4bf" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/gosuenesy"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faTwitter} color="#2dd4bf" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
