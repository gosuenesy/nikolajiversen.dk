import logo from "../assets/atliens.jpg";
import resume from "../assets/cvefsf.pdf";

export default function Navbar() {
  return (
    <div
      className="fixed z-50 top-0 left-0 w-full 
                bg-black/30 backdrop-blur-md 
                border-b border-white/10 
                shadow-md px-8 py-4 lg:px-20 xl:px-36"
    >
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
