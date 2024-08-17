import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerValidation } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateUser } from "@/lib/react-query/queries";
import { loginUser } from "@/lib/appwrite/api";
import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/shared/Loader";
import { useEffect } from "react";

export default function Register() {
  const navigate = useNavigate();
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  const { user, checkAuthUser } = useUserContext();

  const form = useForm<z.infer<typeof registerValidation>>({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: undefined,
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerValidation>) {
    await createUser(values);

    await loginUser({
      email: values.email,
      password: values.password,
    });

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();
      navigate("/");
    }
  }

  useEffect(() => {
    if (user.id) navigate("/");
  }, [navigate, user.id]);

  return (
    <AuthLayout img="/images/keys.jpg">
      <div className="padX padY sm:max-w-xl mx-auto w-full">
        <div className="text-center">
          <h4>Hello, valued client, please proceed to create your account.</h4>
          <p className="text-sm pt-1.5">
            Please verify you are submiting your correct details.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="pt-8 max-sm:pt-6 space-y-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="08123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isCreatingUser} type="submit" className="w-full">
              {isCreatingUser ? (
                <>
                  <Loader color="white" size={20} />
                  <span className="pl-1">Please wait...</span>
                </>
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </Form>
        <p className="pt-3 text-sm">
          Already have an account?
          <Link to="/login">
            <span className="pl-1 text-primary font-medium">Log in</span>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
