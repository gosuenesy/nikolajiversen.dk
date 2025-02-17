import ProjCard from "./ProjCard.js";

import heatmap from "../assets/projs/heatmap.png";
import dbtstats from "../assets/projs/dbtstats.png";
import graph from "../assets/projs/graph.png";
import hamburgermenu from "../assets/projs/hamburgermenu.png";
import loginfirebase from "../assets/projs/loginfirebase.png";
import csgo from "../assets/projs/csgo.png";

export default function Projs() {
  return (
    <div id="Projs" className="mt-4 text-white">
      <h1
        className="text-3xl font-bold text-center"
        style={{ margin: "24px", marginTop: "40px" }}
      >
        Projects
      </h1>
      {/* <p className="font-light text-gray-400">
        Her er nogle af mine projekter. Koden til de fleste projekter findes på
        min GitHub
      </p> */}

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <ProjCard
          name="Heatmap for Seasony's app"
          img={heatmap}
          desc="Developed in React with heatmap.js. Shows data from a robots sensor, which i get from the API. My own design."
          date="August - October 2022"
        />
        <ProjCard
          name="Graphs for Seasony's app"
          img={graph}
          desc="Developed in React with Recharts. Shows data from a robots sensor, which i get from the API. My own design."
          date="August - October 2022"
        />
        <ProjCard
          name="Hamburger-menu for Seasony's app"
          img={hamburgermenu}
          desc="Developed in React. Made with animations in CSS. My own design."
          date="August - October 2022"
        />
        <ProjCard
          name="CSGO stats app"
          img={csgo}
          desc="Developed in React Native. Shows data from HLTV API. My own design."
          date="May 2022"
        />
        <ProjCard
          name="Login system with Firebase"
          img={loginfirebase}
          desc="Developed in React Native with Firebase. Uses account data saved in Firebase database. My own design."
          date="May 2022"
        />
        <ProjCard
          name="Diabotical stats app"
          img={dbtstats}
          desc="Hobby project developed in Vue.js. Shows data from Diabotical API. My own design."
          date="February 2022"
        />
      </div>
    </div>
  );
}
