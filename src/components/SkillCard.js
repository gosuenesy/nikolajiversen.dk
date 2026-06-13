export function SkillCard({ name, img }) {
  return (
    <div
      className="flex h-36 w-full flex-col items-center justify-center gap-3
                 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-md
                 border border-white/20 shadow-lg rounded-xl"
    >
      <img src={img} alt={name} className="h-16 w-16 object-contain" />
      <h3 className="font-bold text-lg">{name}</h3>
    </div>
  );
}
