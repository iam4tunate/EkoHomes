export default function Logo({ bg }: { bg?: React.ReactNode }) {
  return (
    <div className="h-fit">
      {bg ? (
        <img
          src="/public/images/logo-white.png"
          alt=""
          className="w-[150px] object-cover"
        />
      ) : (
        <img
          src="/public/images/logo.png"
          alt=""
          className="w-[120px] object-cover"
        />
      )}
    </div>
  );
}
