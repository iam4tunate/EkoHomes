import { Bath, Bed } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function HomeCard() {
  return (
    <div className="border rounded-lg w-full p-4 max-sm:p-2.5">
      <img
        src="/public/images/property2.png"
        alt="property"
        className="rounded-lg w-full cursor-pointer hover:scale-105 animate-in duration-200"
      />
      <div className="pt-4 font-geist500">Seaside Serenity Villa</div>
      <p className="text-sm leading-tight pt-2 pb-3">
        A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
        neighborhood...
      </p>
      <div className="flex items-center gap-x-4">
        <div className="border rounded-full flex items-center gap-x-2 py-1 px-2">
          <Bed size={15} />
          <span className="text-xs">4-Bedrooms</span>
        </div>
        <div className="border rounded-full flex items-center gap-x-2 py-1 px-2">
          <Bath size={15} />
          <span className="text-xs">4-Bathrooms</span>
        </div>
      </div>
      <div className="pt-6 flex items-center justify-between">
        <div className="">
          <span className="text-sm">Price:</span>
          <p className="text-lg font-geist600">500,000</p>
        </div>
        <Link to="/home/123">
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
}
