import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
        </div>
        <h1 className="text-center text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
