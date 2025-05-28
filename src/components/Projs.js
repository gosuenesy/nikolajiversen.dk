import ProjCard from "./ProjCard.js";

import heatmap from "../assets/projs/heatmap.png";
import dbtstats from "../assets/projs/dbtstats.png";
import personalwebsite from "../assets/projs/personalwebsite.png";
import quakeStats from "../assets/projs/quakeStats.png";
import supabaseLogin from "../assets/projs/supabaseLogin.png";
import dbtMapStats from "../assets/projs/dbtMapStats.png";
import dota2statsapp from "../assets/projs/dota2statsapp.png";

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
          name="Dota 2 pro player stats app"
          img={dota2statsapp}
          desc="Developed with React and MUI"
          github="https://github.com/gosuenesy/dota2-stats-app"
        />
        <ProjCard
          name="Personal Quake stats app"
          img={quakeStats}
          desc="Developed with React and MUI and supabase backend"
          github="https://github.com/gosuenesy/quake-stats"
        />
        <ProjCard
          name="Tennis club member app"
          img={supabaseLogin}
          desc="Developed with React and Render as backend"
          github="https://github.com/gosuenesy/itpk-member-app"
        />
        <ProjCard
          name="Current personal website you are viewing"
          img={personalwebsite}
          desc="Developed with React and Tailwind CSS"
          github="https://github.com/gosuenesy/nikolajiversen.dk"
        />
        <ProjCard
          name="Diabotical map stats app for my team"
          img={dbtMapStats}
          desc="Developed with Vue.js and Bootstrap"
        />
        <ProjCard
          name="Diabotical player stats app for my team"
          img={dbtstats}
          desc="Developed with Vue.js"
        />
      </div>
    </div>
  );
}
