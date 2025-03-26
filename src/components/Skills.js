import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import typescript from "../assets/skills/typescript.svg";
import reactIcon from "../assets/skills/react.svg";
import vue from "../assets/skills/vue.svg";
import csharp from "../assets/skills/csharp.svg";
import dotnetcore from "../assets/skills/dotnetcore.svg";
import angular from "../assets/skills/angular.svg";

export default function Skills() {
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
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
  };
  const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
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
  };
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      id="skills"
      className="mt-6 text-white"
      style={{ justifyContent: "center" }}
    >
      <h1
        className="text-3xl font-bold text-center"
        style={{ margin: "24px", marginTop: "40px" }}
      >
        Skills
      </h1>
      {/* <p className="font-light text-gray-400">Her er nogle af mine kompetencer</p> */}

      <div className="mt-6">
        <Slider {...settings}>
          <SkillCard name="JavaScript" img={javascript} />
          <SkillCard
            name="TypeScript"
            experience="Education and internship"
            img={typescript}
          />
          <SkillCard
            name="React"
            experience="Education and internship"
            img={reactIcon}
          />
          <SkillCard name="Vue.js" experience="Education" img={vue} />
          {/* <SkillCard name="Angular" experience="Education" img={angular} /> */}
          <SkillCard
            name="React Native"
            experience="Education"
            img={reactIcon}
          />
          <SkillCard name="C#" experience="Education" img={csharp} />
          <SkillCard name=".NET" experience="Education" img={dotnetcore} />
        </Slider>
      </div>
      <br />
    </div>
  );
}
