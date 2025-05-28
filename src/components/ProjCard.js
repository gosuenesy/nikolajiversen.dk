export default function ProjCard({ name, img, desc, github }) {
  return (
    <a href={img}>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4"
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
              className="font-light text-teal-400 hover:underline"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </a>
  );
}
