import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({
  color,
  size,
}: {
  color: "green" | "white";
  size: number;
}) {
  return (
    <ClipLoader
      color={color === "green" ? "#04563B" : "#ffffff"}
      size={size}
      aria-label="Loading Spinner"
    />
  );
}
