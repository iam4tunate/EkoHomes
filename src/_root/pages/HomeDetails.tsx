import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteHome, useGetHomeById } from "@/lib/react-query/queries";
import { Loader } from "@/components/shared";
import { formatNumberWithCommas } from "@/lib/utils";
import { useUserContext } from "@/context/AuthContext";
import {
  Bath,
  Bed,
  Send,
  Sparkle,
  MapPin,
  FilePenLine,
  Trash2,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

export default function HomeDetails() {
  const { id } = useParams();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: home, isPending: isLoadingHome } = useGetHomeById(id || "");
  const {
    mutateAsync: deleteHome,
    isSuccess: homeDeleted,
    isPending: isDeleting,
  } = useDeleteHome();

  const handleClick = () => {
    if (home?.creator.$id !== user.id) {
      return toast({
        variant: "warning",
        description: "Sorry, you do not have access to delete this document.",
      });
    }
    deleteHome({ homeId: home?.$id, imageIds: home?.imageIds });
  };

  if (homeDeleted) navigate("/explore");

  return (
    <div className="container padY padX">
      {isLoadingHome ? (
        <div className="mt-16 flex items-center justify-center">
          <Loader color="green" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="">
            {home?.imageUrls.map((url: string) => (
              <img src={url} />
            ))}
          </div>
          <div className="">
            <div className="pb-8">
              <div className="flex flex-wrap gap-x-8 gap-y-1 items-center justify-between">
                <h4 className="capitalize">{home?.title}</h4>
                <p className="text-xl font-geist600">
                  {formatNumberWithCommas(home?.price)}
                </p>
              </div>
              <p className="flex items-start gap-x-1 pt-3 pb-3 text-sm">
                <MapPin size={15} className="text-primary mt-0.5" />
                <span>{home?.address}</span>
              </p>
              <p className="text-sm w-[90%] max-lg:w-full">
                {home?.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-4 pt-5">
                <div className="border rounded-lg py-2 px-4">
                  <div className="flex items-end gap-x-1 pb-1">
                    <Bed className="text-primary w-5 h-5" />
                    <span className="text-[13px]">Bedrooms</span>
                  </div>
                  <span className="font-geist500">{home?.bedrooms}</span>
                </div>
                <div className="border rounded-lg py-2 px-4">
                  <div className="flex items-end gap-x-1 pb-1">
                    <Bath className="text-primary w-5 h-5" />
                    <span className="text-[13px]">Bathrooms</span>
                  </div>
                  <span className="font-geist500">{home?.bathrooms}</span>
                </div>
                <div className="border rounded-lg py-2 px-4">
                  <div className="flex items-end gap-x-1 pb-1">
                    <Bath className="text-primary w-5 h-5" />
                    <span className="text-[13px]">Toilets</span>
                  </div>
                  <span className="font-geist500">{home?.toilets}</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="font-geist500 pb-1">Features & Amenities</div>
              <div className="space-y-3">
                {home?.features.map((feature: string) => (
                  <div className="flex items-center gap-x-2 bg-accent py-3 px-2">
                    <Sparkle
                      size={20}
                      className="text-xs fill-primary text-primary"
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center text-sm gap-x-5 pt-8">
              <Link
                to={`/update/${home?.$id}`}
                className={`${
                  user.id !== home?.creator.$id && "hidden"
                } flex items-center gap-x-1 rounded-full px-3 py-1 border hover:shadow cursor-pointer bg-primary bg-opacity-10 uppercase`}>
                <FilePenLine size={18} />
                <p>Update</p>
              </Link>
              {isDeleting ? (
                <div className="px-2">
                  <Loader color="green" size={20} />
                </div>
              ) : (
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div
                      className={`${
                        user.id !== home?.creator.$id && "hidden"
                      } flex items-center gap-x-1 rounded-full px-3 py-1 border hover:shadow cursor-pointer bg-red-100 text-destructive uppercase`}>
                      <Trash2 size={15} />
                      <p>Delete</p>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete remove this data from our server.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleClick}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="pt-14 grid grid-cols-[40%_60%] gap-x-12 gap-y-8 max-lg:grid-cols-1">
        <div className="max-lg:w-[70%] max-sm:w-full">
          <img
            src="/public/images/stars-green.svg"
            alt="stars"
            className="w-12 max-sm:w-10 mb-1 max-sm:mb-0.5"
          />
          <h3>Inquire about Seaside Serenity Villa.</h3>
          <p className="leading-snug pt-2 text-[15px]">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match.
          </p>
        </div>
        <div className="border-primary bg-accent rounded-xl px-12 max-md:px-8 max-sm:px-4 py-8">
          {/*//! default values will be inputed in almost all fields */}
          <form
            action=""
            className="grid grid-cols-2 max-sm:grid-cols-1 gap-y-6 gap-x-4">
            <div className="">
              <Label htmlFor="email">First Name</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Last Name</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Phone</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Selected Property</Label>
              <Input type="text" />
            </div>
            <div className="">
              <Label htmlFor="email">Location</Label>
              <Input type="text" />
            </div>
            <div className="col-span-2 max-sm:col-span-1">
              <Label htmlFor="email">Message</Label>
              <Textarea className="" />
            </div>
            <Button disabled size="lg" className="space-x-1">
              <Send size={17} />
              <span>Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
