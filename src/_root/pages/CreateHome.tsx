import HomeForm from "@/_auth/forms/HomeForm";
import { HousePlus } from "lucide-react";

export default function CreateHome() {
  return (
    <div className="max-w-screen-md mx-auto padY padX">
      <div className="w-[70%] max-sm:w-full pb-4 flex items-center gap-x-2">
        <HousePlus className="w-8 h-8" />
        <h3>Create</h3>
      </div>
      <HomeForm action="Create"/>
    </div>
  );
}
