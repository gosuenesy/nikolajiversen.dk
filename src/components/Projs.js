import ProjCard from "./ProjCard.js";
import dota2statsapp from "../assets/projs/dota2statsapp.png";
import itpkmemberapp from "../assets/projs/itpkmemberapp.png";
import tens from "../assets/tens_thumb.png";
import esportschoolThumb from "../assets/logo.png";
import wins38 from "../assets/projs/38wins.png";
import ranked820 from "../assets/projs/ranked82-0.png";

export default function Projs() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <ProjCard
          name="esportschool.gg"
          img={esportschoolThumb}
          desc="Esports education platform I co-founded and lead the development of."
          tags={["React", "Tailwind", "Supabase"]}
          link="https://www.esportschool.gg"
          linkDesc={"Visit esportschool.gg"}
        />
        <ProjCard
          name="R82-0 — NBA Draft Game"
          img={ranked820}
          desc="NBA team-draft browser game. Go for a perfect 82-0 season and climb the ranked 1v1 ladder."
          tags={["React", "Tailwind", "Supabase"]}
          link="https://ranked82-0.com"
          linkDesc={"Play at ranked82-0.com"}
        />
        <ProjCard
          name="38wins — Football Season Game"
          img={wins38}
          desc="Football browser game. Draft an XI, simulate a season, go for 38-0, climb the ranked 1v1 ladder."
          tags={["React", "Tailwind", "Supabase"]}
          link="https://38wins.io"
          linkDesc={"Play at 38wins.io"}
        />
        <ProjCard
          name="Tens — Mobile Puzzle Game"
          img={tens}
          desc="Solo-developed mobile puzzle game, released on Google Play."
          tags={["Game Maker Studio 2"]}
          link="https://play.google.com/store/apps/details?id=com.nsigames.nsigames.tens"
          linkDesc={"View on Google Play"}
        />
        <ProjCard
          name="Dota 2 pro player stats app"
          img={dota2statsapp}
          desc="Explorer for professional Dota 2 player statistics."
          tags={["React", "MUI"]}
          github="https://github.com/gosuenesy/dota2-stats-app"
        />
        <ProjCard
          name="Tennis club member app"
          img={itpkmemberapp}
          desc="Membership management app built for a local tennis club."
          tags={["React", "MUI", "Render"]}
          github="https://github.com/gosuenesy/itpk-member-app"
        />
      </div>
    </div>
  );
}
