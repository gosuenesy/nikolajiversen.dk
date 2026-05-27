import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjCard({ name, img, desc, github, link, linkDesc }) {
  const href = link || github;
  const label = link ? linkDesc : github ? "Source code on GitHub" : null;

  const card = (
    <div
      className="group w-full h-full
         bg-gradient-to-b from-white/10 backdrop-blur-md
         border border-white/20 shadow-lg
         rounded-xl py-4 px-4
         transition-all duration-300
         hover:shadow-[0_0_20px_rgba(45,212,191,0.45)] hover:-translate-y-0.5"
    >
      <img src={img} className="h-56 mx-auto object-cover" alt={name} />
      <div className="mt-2">
        <h1 className="font-bold md:text-xl">{name}</h1>
        <p className="font-light md:text-md">{desc}</p>
        {label && (
          <span className="inline-flex items-center gap-2 font-light text-teal-400 transition duration-300 group-hover:drop-shadow-[0_0_6px_#2dd4bf]">
            {label}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        className="block h-full"
      >
        {card}
      </a>
    );
  }
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="h-full"
    >
      {card}
    </div>
  );
}
