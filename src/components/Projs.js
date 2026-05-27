import ProjCard from "./ProjCard.js";

//import dbtstats from "../assets/projs/dbtstats.png";
import personalwebsite from "../assets/projs/site.png";
import quakeStats from "../assets/projs/quakeStats.png";
//import dbtMapStats from "../assets/projs/dbtMapStats.png";
import dota2statsapp from "../assets/projs/dota2statsapp.png";
import itpkmemberapp from "../assets/projs/itpkmemberapp.png";
import tens from "../assets/tens_thumb.png";
import esportschoolThumb from "../assets/logo.png";

export default function Projs() {
  return (
    <div id="Projs" className="scroll-mt-32 mt-4 text-white">
      <h1
        className="text-3xl font-bold text-center"
        style={{ margin: "24px", marginTop: "40px" }}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <ProjCard
          name="esportschool.gg"
          img={esportschoolThumb}
          desc="Co-founder and lead developer of esports education platform. Built with React, JavaScript, Tailwind, and Supabase"
          link="https://www.esportschool.gg"
          linkDesc={"Visit esportschool.gg"}
        />
        <ProjCard
          name="Tens - Mobile Puzzle Game"
          img={tens}
          desc="Solo developed with Game Maker Studio 2"
          link="https://play.google.com/store/apps/details?id=com.nsigames.nsigames.tens"
          linkDesc={"View on Google Play"}
        />
        <ProjCard
          name="Dota 2 pro player stats app"
          img={dota2statsapp}
          desc="Developed with React and MUI"
          github="https://github.com/gosuenesy/dota2-stats-app"
        />
        <ProjCard
          name="Tennis club member app"
          img={itpkmemberapp}
          desc="Developed with React, MUI and Render as backend"
          github="https://github.com/gosuenesy/itpk-member-app"
        />
        <ProjCard
          name="Personal Quake stats app"
          img={quakeStats}
          desc="Developed with React, MUI and supabase backend"
          github="https://github.com/gosuenesy/quake-stats"
        />
        <ProjCard
          name="Personal website"
          img={personalwebsite}
          desc="Developed with React and Tailwind CSS"
          github="https://github.com/gosuenesy/nikolajiversen.dk"
        />
      </div>
    </div>
  );
}
