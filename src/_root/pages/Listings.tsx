import { HomeCard, Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useGetRecentHomes } from "@/lib/react-query/queries";
import { Models } from "appwrite";
import { FilePlus2, HousePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Listings() {
  const { data: recentHomes, isPending: isLoadingHomes } = useGetRecentHomes();
  console.log(recentHomes);
  return (
    <div className="container padX padY">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 text-primary">
          <h4>Your Listings</h4>
        </div>
        <Link to="/create">
          <Button className="flex items-center gap-x-1">
            <HousePlus className="h-5 w-5" />
            Create Home
          </Button>
        </Link>
      </div>
      <div className="">
        {isLoadingHomes ? (
          <div className="mt-16 flex items-center justify-center">
            <Loader color="green" size={50} />
          </div>
        ) : (
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-8 pt-12">
            {recentHomes?.documents.map((home: Models.Document) => (
              <HomeCard key={home.$id} home={home} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
