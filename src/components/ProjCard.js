import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjCard({
  name,
  img,
  desc,
  github,
  link,
  linkDesc,
  tags,
}) {
  const href = link || github;
  const label = link ? linkDesc : github ? "Source code on GitHub" : null;

  const card = (
    <div
      className="group flex h-full flex-col
         bg-gradient-to-b from-white/10 backdrop-blur-md
         border border-white/20 shadow-lg
         rounded-xl p-4
         transition-all duration-300
         hover:shadow-[0_0_20px_rgba(45,212,191,0.45)] hover:-translate-y-0.5"
    >
      <img
        src={img}
        alt={name}
        className="h-48 w-full rounded-lg object-cover"
      />
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="font-bold md:text-xl">{name}</h3>
        <p className="mt-1 font-light text-gray-300">{desc}</p>

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-teal-400/15 px-2.5 py-0.5 text-xs font-medium text-teal-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {label && (
          <span className="mt-auto pt-3 inline-flex items-center gap-2 font-light text-teal-400 transition duration-300 group-hover:drop-shadow-[0_0_6px_#2dd4bf]">
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
