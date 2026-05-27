import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/gosuenesy", icon: faGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikolaj-iversen-525279224/",
    icon: faLinkedinIn,
  },
  { label: "Twitch", href: "https://twitch.tv/enesy_", icon: faTwitch },
  { label: "Twitter", href: "https://twitter.com/gosuenesy", icon: faTwitter },
];

export default function Footer() {
  const socialLink =
    "inline-block text-gray-400 transition-all duration-300 " +
    "hover:text-teal-400 hover:drop-shadow-[0_0_6px_#2dd4bf] hover:-translate-y-0.5";

  return (
    <footer
      className="mt-20
                 bg-gradient-to-b from-white/10 backdrop-blur-md
                 border border-white/20 shadow-lg
                 rounded-xl text-white px-8 py-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
        <p className="font-light">
          © {new Date().getFullYear()} Nikolaj Skovgaard Iversen
        </p>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={socialLink}
            >
              <FontAwesomeIcon icon={s.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
