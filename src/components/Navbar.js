import logo from "../assets/atliens.jpg";
import resume from "../assets/cvefsf.pdf";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Keep your anchors & classes; intercept clicks when not on "/"
  const handleSectionClick = (e, id) => {
    // If we're NOT on the home route, route to / with a query param so App.js can scroll
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate(`/?to=${id}`);
    }
    // If we ARE on "/", let the normal anchor behavior run (smooth-scroll etc.)
  };

  return (
    <div
      className="fixed z-50 top-0 left-0 w-full 
                bg-black/30 backdrop-blur-md 
                border-b border-white/10 
                shadow-md px-8 py-4 lg:px-20 xl:px-36"
    >
      <div className="flex justify-between items-center text-white">
        {/* Logo -> Home (same styling, intercept when off-home) */}
        <a
          href="#home"
          onClick={(e) => handleSectionClick(e, "home")}
        >
          <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
        </a>

        <ul className="hidden md:flex">
          <li className="p-4">
            <a
              href="#home"
              onClick={(e) => handleSectionClick(e, "home")}
              className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              Profile
            </a>
          </li>

          <li className="p-4">
            <a
              href="#skills"
              onClick={(e) => handleSectionClick(e, "skills")}
              className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              Skills
            </a>
          </li>

          <li className="p-4">
            <a
              href="#Projs"
              onClick={(e) => handleSectionClick(e, "Projs")}
              className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              Projects
            </a>
          </li>

          <li className="p-4">
            <a
              href="#livestream"
              onClick={(e) => handleSectionClick(e, "livestream")}
              className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              Livestream
            </a>
          </li>

          <li className="p-4">
            <a
              href="#coaching"
              onClick={(e) => handleSectionClick(e, "coaching")}
              className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              Coaching
            </a>
          </li>

          <li className="p-4">
            <Link
              to="/reviews"
              className="transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              Reviews
            </Link>
          </li>
        </ul>

        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="bg-gradient-to-r from-teal-800 to-teal-600 
             hover:from-teal-600 hover:to-teal-400 
             text-white font-semibold rounded-full 
             px-5 py-2 shadow-md border border-white/10 
             flex items-center gap-2 transition duration-300 
             hover:shadow-teal-400/30 hover:shadow-lg"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
