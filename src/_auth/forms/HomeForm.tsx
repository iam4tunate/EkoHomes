import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HomeValidation } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateHome } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Loader } from "@/components/shared";
import FileUploader from "@/components/shared/FileUploader";
import { Models } from "appwrite";

type PostFormProps = {
  home?: Models.Document;
  action: "Create" | "Update";
};

export default function HomeForm({ home, action }: PostFormProps) {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const { mutateAsync: createHome, isPending: isCreatingHome } =
    useCreateHome();

  const form = useForm<z.infer<typeof HomeValidation>>({
    resolver: zodResolver(HomeValidation),
    //! default values wil be done later
    defaultValues: {
      title: home ? home?.title : "",
      price: home ? home?.price : "",
      address: home ? home?.address : "",
      no_of_bathrooms: home ? home?.no_of_bathrooms : "",
      no_of_bedrooms: home ? home?.no_of_bedrooms : "",
      year_built: home ? home?.year_built : "",
      sqm: home ? home?.sqm : "",
      payment_method: home ? home?.payment_method : "",
      description: home ? home?.description : "",
      features: home ? home?.features : "",
      files: [],
    },
  });

  async function onSubmit(values: z.infer<typeof HomeValidation>) {
    //!shipped updating for now

    const newHome = await createHome({
      ...values,
      userId: user.id,
    });

    if (!newHome) throw Error;
    navigate("/explore");
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white px-6 max-md:px-4 max-sm:px-2 py-6 shadow rounded-lg">
          <div className="space-y-6 pb-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-2 gap-y-6">
              <FormField
                control={form.control}
                name="no_of_bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>No of Bathrooms</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="no_of_bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>No of Bedrooms</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-2 gap-y-6">
              <FormField
                control={form.control}
                name="year_built"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Built</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sqm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sqm</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="payment_method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="monthly or annually" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="monthly">Per Month</SelectItem>
                      <SelectItem value="yearly">Per Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Photos</FormLabel>
                  <FormControl>
                    <FileUploader
                      fieldChange={field.onChange}
                      mediaUrl={home?.imageUrl}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="maximum of 500 characters"
                      className="resize-none h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Features</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="add a full-stop . after each feature"
                      className="resize-none h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isCreatingHome} type="submit" className="w-full">
            {isCreatingHome ? (
              <>
                <Loader color="white" size={20} />
                <span className="pl-1">Please wait...</span>
              </>
            ) : (
              `${action} Home`
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
