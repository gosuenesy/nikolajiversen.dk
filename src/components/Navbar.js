import logo from "../assets/atliens.jpg";
import resume from "../assets/Cvefs.pdf";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-dark-300 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <a href="#home">
          <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
        </a>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:text-teal-400">
              Profile
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:text-teal-400">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#Projs" className="hover:text-teal-400">
              Projects
            </a>
          </li>
          <li className="p-4">
            <a href="#livestream" className="hover:text-teal-400">
              Livestream
            </a>
          </li>
          <li className="p-4">
            <a href="#coaching" className="hover:text-teal-400">
              Coaching
            </a>
          </li>
        </ul>
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="bg-teal-600 rounded-full px-4 py-1 border border-teal-800 border border-4"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
