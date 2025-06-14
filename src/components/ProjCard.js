export default function ProjCard({ name, img, desc, github }) {
  return (
    <a href={img}>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        className="w-full h-full 
             bg-gradient-to-b from-white/10 backdrop-blur-md 
             border border-white/20 shadow-lg 
             rounded-xl py-4 px-4 
             hover:bg-white/20 transition duration-200"
      >
        <img src={img} className="h-56 mx-auto object-cover" alt={name} />
        <div className="mt-2">
          <h1 className="font-bold md:text-xl">{name}</h1>
          <p className="font-light md:text-md">{desc}</p>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light text-teal-400 transition duration-300 hover:drop-shadow-[0_0_6px_#2dd4bf]"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </a>
  );
}
