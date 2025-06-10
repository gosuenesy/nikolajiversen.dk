export function SkillCard({ name, img, experience }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="p-4 mx-auto w-11/12 max-w-xs text-center 
                 bg-white/10 backdrop-blur-md 
                 border border-white/20 shadow-lg 
                 rounded-xl flex flex-col h-48 
                 transform transition-transform duration-300 
                 hover:scale-105"
    >
      <img src={img} className="w-20 max-h-40 mx-auto" alt={name} />
      <div className="mt-2">
        <h1 className="font-bold text-xl mb-1">{name}</h1>
        {experience && (
          <p className="font-light text-md text-gray-300">{experience}</p>
        )}
      </div>
    </div>
  );
}
