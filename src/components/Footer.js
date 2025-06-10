import HrCurve from "./HrCurve";

export default function Footer() {
  return (
    <div
      className="mt-4 
                bg-white/10 backdrop-blur-md 
                border border-white/20 shadow-lg 
                rounded-xl text-white px-8 py-4"
    >
      <ul className="text-center">
        <li>
          <a href="#home" className="hover:text-teal-400">
            Profile
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-teal-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#Projs" className="hover:text-teal-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#livestream" className="hover:text-teal-400">
            Livestream
          </a>
        </li>
        <li>
          <a href="#coaching" className="hover:text-teal-400">
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
