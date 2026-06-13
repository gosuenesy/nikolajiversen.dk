import Hr from "./Hr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const INCLUDES = [
  "Mechanical Skills",
  "Strategy",
  "Mentality",
  "Continuous Communication",
];

const GAMES = [
  { game: "Quake Champions", rank: "Top 10 duel & 2v2" },
  { game: "Quake Live", rank: "Rank 1 CA, Rank 3 CTF" },
  { game: "Diabotical", rank: "Rank 1" },
  { game: "League of Legends", rank: "Diamond 1" },
  { game: "StarCraft II", rank: "Grandmaster" },
  { game: "Chess", rank: "1900 Elo" },
];

export default function Coaching() {
  return (
    <div
      className="text-white"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
    >
      <h1 className="text-3xl font-bold text-center mb-10">Coaching</h1>

      <div className="flex justify-center">
        <div
          className="w-full max-w-md
                bg-gradient-to-b from-white/10 backdrop-blur-md
                border border-white/20 shadow-lg
                rounded-xl py-6 px-6"
        >
          <h2 className="text-6xl font-bold text-center">€35</h2>
          <p className="text-2xl font-light text-center mt-1">per hour</p>
          <Hr />
          <ul className="space-y-3">
            {INCLUDES.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-3 text-xl font-light"
              >
                <FontAwesomeIcon color="#2dd4bf" icon={faCheck} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-light text-gray-300">
        I've competed professionally across multiple FPS titles with ~$6000 in
        tournament earnings (
        <a
          href="https://liquipedia.net/arenafps/Enesy"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-teal-400 transition hover:text-teal-300"
        >
          Liquipedia
        </a>
        ) and reached top ranks in the games below. Sessions are 1-on-1 and
        include VOD review, live coaching, and a tailored training plan.
      </p>

      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">
        {GAMES.map((g) => (
          <div
            key={g.game}
            className="bg-gradient-to-b from-white/10 backdrop-blur-md
                       border border-white/20 shadow-lg rounded-xl p-4 text-center"
          >
            <h3 className="font-bold">{g.game}</h3>
            <p className="mt-2 inline-block rounded-full bg-teal-400/15 px-3 py-0.5 text-sm font-medium text-teal-300">
              {g.rank}
            </p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <p className="mt-10 text-center text-lg font-light">
        Interested? Message me on Discord:{" "}
        <span className="font-bold text-teal-400">enesy</span>
      </p>
    </div>
  );
}
