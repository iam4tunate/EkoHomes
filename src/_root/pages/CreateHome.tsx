import HomeForm from "@/_auth/forms/HomeForm";
import { FilePlus2 } from "lucide-react";

export default function CreateHome() {
  return (
    <div className="max-w-screen-md mx-auto padY padX">
      <div className="w-[70%] max-sm:w-full pb-4 flex items-center gap-x-2 text-primary">
        <FilePlus2 size={30} />
        <h4>Create Home</h4>
      </div>
      <HomeForm action="Create" />
    </div>
  );
}
