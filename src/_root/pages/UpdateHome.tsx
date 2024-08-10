import HomeForm from "@/_auth/forms/HomeForm";
import { Loader } from "@/components/shared";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useGetHomeById } from "@/lib/react-query/queries";
import { FilePenLine } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateHome() {
  const { id } = useParams();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: home, isPending } = useGetHomeById(id || "");

  useEffect(() => {
    if (user?.id !== home?.creator.$id) {
      toast({
        variant: "warning",
        description: "Sorry, you do not have access to update this document.",
      });
      navigate(`/home/${id}`);
    }
  }, [home, user, navigate, toast, id]);

  if (isPending) {
    return (
      <div className="my-16 flex items-center justify-center">
        <Loader color="green" size={50} />
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto padY padX">
      <div className="w-[70%] max-sm:w-full pb-4 flex items-center gap-x-2 text-primary">
        <FilePenLine size={30} />
        <h4>Update Home Details</h4>
      </div>
      <HomeForm action="Update" home={home} />
    </div>
  );
}
