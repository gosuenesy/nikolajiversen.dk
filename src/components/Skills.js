import { SkillCard } from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import typescript from "../assets/skills/typescript.svg";
import reactIcon from "../assets/skills/react.svg";
import vue from "../assets/skills/vue.svg";
import csharp from "../assets/skills/csharp.svg";
import dotnetcore from "../assets/skills/dotnetcore.svg";
import nodejs from "../assets/skills/nodejs.svg";

const SKILLS = [
  { name: "JavaScript", img: javascript },
  { name: "TypeScript", img: typescript },
  { name: "React", img: reactIcon },
  { name: "React Native", img: reactIcon },
  { name: "Vue.js", img: vue },
  { name: "Node.js", img: nodejs },
  { name: "C#", img: csharp },
  { name: ".NET", img: dotnetcore },
];

export default function Skills() {
  return (
    <div className="text-white container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((s, i) => (
          <div
            key={s.name}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
            data-aos-delay={(i % 4) * 75}
          >
            <SkillCard name={s.name} img={s.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
