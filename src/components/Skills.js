import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkillCard } from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import typescript from "../assets/skills/typescript.svg";
import reactIcon from "../assets/skills/react.svg";
import vue from "../assets/skills/vue.svg";
import csharp from "../assets/skills/csharp.svg";
import dotnetcore from "../assets/skills/dotnetcore.svg";

export default function Skills() {
  const PrevArrow = ({ onClick }) => (
    <div className="custom-prevArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="custom-nextArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      id="skills"
      className="scroll-mt-32 mt-10 text-white container mx-auto px-4"
    >
      <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <Slider {...settings}>
            <SkillCard
              name="JavaScript"
              experience="Professional"
              img={javascript}
            />
            <SkillCard
              name="TypeScript"
              experience="Professional"
              img={typescript}
            />
            <SkillCard name="React" experience="Professional" img={reactIcon} />
            <SkillCard name="Vue.js" experience="Education" img={vue} />
            <SkillCard
              name="React Native"
              experience="Professional"
              img={reactIcon}
            />
            <SkillCard name="C#" experience="Education" img={csharp} />
            <SkillCard name=".NET" experience="Education" img={dotnetcore} />
          </Slider>
        </div>
      </div>
    </div>
  );
}
