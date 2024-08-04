import { Link } from "react-router-dom";

export default function Logo({ bg }: { bg?: React.ReactNode }) {
  return (
    <Link to="/" className="h-fit">
      {bg ? (
        <img
          src="/public/images/logo-white.png"
          alt=""
          className="w-[150px] max-md:w-[120px] max-sm:w-[100px] object-cover"
        />
      ) : (
        <img
          src="/public/images/logo.png"
          alt=""
          className="w-[120px] max-md:w-[120px] max-sm:w-[100px] object-cover"
        />
      )}
    </Link>
  );
}
