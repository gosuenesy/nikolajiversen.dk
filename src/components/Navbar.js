import { useState, useEffect } from "react";
import logo from "../assets/atliens.jpg";
import resume from "../assets/CV2E.pdf";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const SECTIONS = [
  { id: "home", label: "Profile" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "coaching", label: "Coaching" },
  { id: "livestream", label: "Livestream" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(location.pathname === "/reviews" ? "reviews" : "");
      return;
    }
    setActive("home");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleSectionClick = (e, id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate(`/?to=${id}`);
    }
  };

  const linkClass = (id) =>
    `transition duration-300 hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf] ${
      active === id ? "text-teal-400" : "text-white"
    }`;

  return (
    <div
      className="fixed z-50 top-0 left-0 w-full
                bg-black/30 backdrop-blur-md
                border-b border-white/10
                shadow-md px-8 py-4 lg:px-20 xl:px-36"
    >
      <div className="flex justify-between items-center text-white">
        <a href="#home" onClick={(e) => handleSectionClick(e, "home")}>
          <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
        </a>

        <ul className="hidden md:flex">
          {SECTIONS.map(({ id, label }) => (
            <li key={id} className="p-4">
              <a
                href={`#${id}`}
                onClick={(e) => handleSectionClick(e, id)}
                className={linkClass(id)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="p-4">
            <Link to="/reviews" className={linkClass("reviews")}>
              Reviews
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            className="hidden md:flex bg-gradient-to-r from-teal-800 to-teal-600
               hover:from-teal-600 hover:to-teal-400
               text-white font-semibold rounded-full
               px-5 py-2 shadow-md border border-white/10
               items-center gap-2 transition duration-300
               hover:shadow-teal-400/30 hover:shadow-lg
               hover:-translate-y-0.5"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white transition hover:text-teal-400"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleSectionClick(e, id)}
                className={`block py-2 transition hover:text-teal-400 ${
                  active === id ? "text-teal-400" : "text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/reviews"
              onClick={() => setOpen(false)}
              className="block py-2 text-white transition hover:text-teal-400"
            >
              Reviews
            </Link>
          </li>
          <li className="pt-2">
            <a
              href={resume}
              rel="noreferrer"
              target="_blank"
              onClick={() => setOpen(false)}
              className="inline-block bg-gradient-to-r from-teal-800 to-teal-600
                 hover:from-teal-600 hover:to-teal-400
                 text-white font-semibold rounded-full
                 px-5 py-2 shadow-md border border-white/10 transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
