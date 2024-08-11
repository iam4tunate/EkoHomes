import HomeForm from "@/_auth/forms/HomeForm";
import { FilePlus2 } from "lucide-react";

export default function CreateHome() {
  return (
    <div className="max-w-screen-md mx-auto padY padX">
      <div className="w-[70%] max-sm:w-full pb-4 flex items-center gap-x-2 text-primary">
        <FilePlus2 className="w-9 max-sm:h-7 h-9 max-sm:w-7" />
        <div className="text-2xl font-geist600 max-sm:text-xl">
          Create New Home Listing
        </div>
      </div>
      <HomeForm action="Create" />
    </div>
  );
}
