import ProjCard from "./ProjCard.js";

import heatmap from "../assets/projs/heatmap.png";
import dbtstats from "../assets/projs/dbtstats.png";
import graph from "../assets/projs/graph.png";
import hamburgermenu from "../assets/projs/hamburgermenu.png";
import loginfirebase from "../assets/projs/loginfirebase.png";
import csgo from "../assets/projs/csgo.png";
import quakeStats from "../assets/projs/quakeStats.png";
import supabaseLogin from "../assets/projs/supabaseLogin.png";
import dbtMapStats from "../assets/projs/dbtMapStats.png";

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
          name="Quake Stats app"
          img={quakeStats}
          desc="Developed in React with MUI and supabase"
          date="2025"
        />
        <ProjCard
          name="Login with supabase"
          img={supabaseLogin}
          desc="Developed in React with supabase"
          date="2024"
        />
        <ProjCard
          name="Heatmap for robot"
          img={heatmap}
          desc="Developed in React.js"
          date="2023"
        />
        <ProjCard
          name="Diabotical map stats app"
          img={dbtMapStats}
          desc="Developed with Vue.js"
          date="2023"
        />
        <ProjCard
          name="Diabotical player stats app"
          img={dbtstats}
          desc="Developed with Vue.js and Bootstrap"
          date="2022"
        />
        <ProjCard
          name="CSGO stats app"
          img={csgo}
          desc="Developed in React Native."
          date="2022"
        />
        <ProjCard
          name="Login system with Firebase"
          img={loginfirebase}
          desc="Developed in React Native with Firebase."
          date="2022"
        />
        <ProjCard
          name="Graphs"
          img={graph}
          desc="Developed in React.js."
          date="2022"
        />
      </div>
    </div>
  );
}
