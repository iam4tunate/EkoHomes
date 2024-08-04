import starsGreen from "/public/images/stars-green.svg";
import starsWhite from "/public/images/stars-white.svg";

export default function SectionHeading({
  icon,
  title,
  paragraph,
}: {
  icon: "green" | "white";
  title: string;
  paragraph: string;
}) {
  return (
    <div className="w-[50%] max-lg:w-[70%] max-sm:w-full pb-8 max-sm:pb-4">
      <img
        src={icon === "white" ? starsWhite : starsGreen}
        alt="stars"
        className="w-12 max-sm:w-10 mb-1 max-sm:mb-0.5"
      />
      <h3>{title}</h3>
      <p className="leading-snug pt-2 text-[15px]">{paragraph}</p>
    </div>
  );
}
