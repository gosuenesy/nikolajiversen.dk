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
      <a id="coaching" className="anchor"></a>
      <h1
        className="text-3xl font-bold text-center"
        style={{ margin: "24px", marginTop: "40px" }}
      >
        Coaching
      </h1>
      <div className="flex justify-center">
        <div className="w-128 bg-dark bg-dark-200 rounded-md py-4 px-4">
          <h1
            className="text-6xl font-bold text-center"
            style={{ margin: "24px" }}
          >
            €35
          </h1>
          <p
            className="text-2xl font-light text-center"
            style={{ margin: "24px" }}
          >
            per hour
          </p>
          <HrCurve />
          <p
            className="text-2xl font-light text-center"
            style={{ margin: "24px" }}
          >
            <FontAwesomeIcon size="1xl" color="#2dd4bf" icon={faCheck} />{" "}
            Mechanical Skills
          </p>
          <p
            className="text-2xl font-light text-center"
            style={{ margin: "24px" }}
          >
            <FontAwesomeIcon size="1xl" color="#2dd4bf" icon={faCheck} />{" "}
            Strategy
          </p>
          <p
            className="text-2xl font-light text-center"
            style={{ margin: "24px" }}
          >
            <FontAwesomeIcon size="1xl" color="#2dd4bf" icon={faCheck} />{" "}
            Mentality
          </p>
          <p
            className="text-2xl font-light text-center"
            style={{ margin: "24px" }}
          >
            <FontAwesomeIcon size="1xl" color="#2dd4bf" icon={faCheck} />{" "}
            Continuous Communication
          </p>
        </div>
      </div>
      <br />
      <p className="text-xl font-light text-center">
        I have played on a professional level in multiple FPS games with ~6000
        USD tournament earnings. Tournament results on my{" "}
        <a
          href="https://liquipedia.net/arenafps/Enesy"
          target="_blank"
          className="hover:text-teal-400 text-xl font-bold text-center"
        >
          Liquipedia
        </a>
      </p>
      <p className="text-xl font-light text-center" style={{ margin: "24px" }}>
        I have reached the highest ranks and provide coaching in multiple games
        including:
        <p className="text-2xl font-bold text-center">
          Quake Champions <p className="text-xl font-light inline">Rank 1</p>
          <br />
          Quake Live <p className="text-xl font-light inline">Rank 1</p>
          <br />
          Diabotical <p className="text-xl font-light inline">Rank 1</p>
          <br />
          League of Legends{" "}
          <p className="text-xl font-light inline">Diamond 1</p>
          <br />
          StarCraft II <p className="text-xl font-light inline">Grandmaster</p>
          <br />
          Chess <p className="text-xl font-light inline">1900 elo</p>
        </p>
      </p>
      <p className="text-xl font-light text-center" style={{ margin: "24px" }}>
        I provide single or multiple hour one on one sessions that includes vod
        reviewing, live coaching and providing a training regiment.
      </p>
      <p className="text-xl font-light text-center" style={{ margin: "24px" }}>
        Message me on Discord: <p className="text-xl font-bold inline">enesy</p>
      </p>
    </div>
  );
}
