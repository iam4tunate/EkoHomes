import { Link } from "react-router-dom";

export default function Logo({ bg }: { bg?: boolean }) {
  return (
    <Link to="/" className="h-fit w-fit">
      <img
        src={`/public/images/${bg ? "logo-white" : "logo"}.png`}
        alt="logo"
        className={`${
          bg ? "w-[150px]" : "w-[120px]"
        } max-md:w-[120px] max-sm:w-[100px] object-cover`}
      />
    </Link>
  );
}
