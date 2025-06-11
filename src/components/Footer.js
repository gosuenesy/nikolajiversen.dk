import HrCurve from "./HrCurve";

export default function Footer() {
  return (
    <div
      className="mt-4 
                bg-gradient-to-b from-white/10 backdrop-blur-md 
                border border-white/20 shadow-lg 
                rounded-xl text-white px-8 py-4"
    >
      <ul className="text-center">
        <li>
          <a
            href="#home"
            className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projs"
            className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#livestream"
            className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
          >
            Livestream
          </a>
        </li>
        <li>
          <a
            href="#coaching"
            className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
          >
            Coaching
          </a>
        </li>
      </ul>
      <HrCurve />
      <p className="text-sm font-light text-center">
        Copyright © 2025 Nikolaj Skovgaard Iversen
      </p>
    </div>
  );
}
