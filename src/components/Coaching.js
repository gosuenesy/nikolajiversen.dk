import HrCurve from "./HrCurve";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Coaching() {
  return (
    <div
      className="cont mt-4 text-white"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
    >
      <a id="coaching" className="scroll-mt-32 anchor"></a>
      <h1 className="text-3xl font-bold text-center my-10">Coaching</h1>

      <div className="flex justify-center">
        <div
          className="w-128 
                bg-gradient-to-b from-white/10 backdrop-blur-md 
                border border-white/20 shadow-lg 
                rounded-xl py-4 px-4"
        >
          <h1 className="text-6xl font-bold text-center m-4">€35</h1>
          <p className="text-2xl font-light text-center m-4">per hour</p>
          <HrCurve />

          {[
            "Mechanical Skills",
            "Strategy",
            "Mentality",
            "Continuous Communication",
          ].map((item) => (
            <p key={item} className="text-2xl font-light text-center m-4">
              <FontAwesomeIcon size="1xl" color="#2dd4bf" icon={faCheck} />{" "}
              {item}
            </p>
          ))}
        </div>
      </div>

      <p className="text-xl font-light text-center my-6">
        I have played on a professional level in multiple FPS games with ~6000
        USD tournament earnings. Tournament results on my{" "}
        <a
          href="https://liquipedia.net/arenafps/Enesy"
          target="_blank"
          className="hover:text-teal-400 text-xl font-bold"
        >
          Liquipedia
        </a>
        .
      </p>

      <div className="text-xl font-light text-center my-6">
        I have reached the highest ranks and provide coaching in multiple games
        including:
        <div className="text-2xl font-bold mt-4">
          <p>
            Quake Champions{" "}
            <span className="text-xl font-light">Top 10 duel and 2v2</span>
          </p>
          <p>
            Quake Live{" "}
            <span className="text-xl font-light">Rank 1 CA, rank 3 CTF</span>
          </p>
          <p>
            Diabotical <span className="text-xl font-light">Rank 1</span>
          </p>
          <p>
            League of Legends{" "}
            <span className="text-xl font-light">Diamond 1</span>
          </p>
          <p>
            StarCraft II <span className="text-xl font-light">Grandmaster</span>
          </p>
          <p>
            Chess <span className="text-xl font-light">1900 elo</span>
          </p>
        </div>
      </div>

      <p className="text-xl font-light text-center my-6">
        I provide single or multiple hour one on one sessions that include VOD
        reviewing, live coaching, and providing a training regiment.
      </p>

      <p className="text-xl font-light text-center my-6">
        Message me on Discord: <span className="text-xl font-bold">enesy</span>
      </p>
    </div>
  );
}
