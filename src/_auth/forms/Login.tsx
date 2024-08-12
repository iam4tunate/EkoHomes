import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { LoginValidation } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/shared/Loader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLoginUser } from "@/lib/react-query/queries";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuthUser } = useUserContext();
  const { mutateAsync: loginUser, isPending: isLogining } = useLoginUser();
  const from = location.state?.from?.pathname || "/";

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginValidation>) {
    await loginUser({
      email: values.email,
      password: values.password,
    });

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();
      navigate(from, { replace: true });
    }
  }

  return (
    <AuthLayout img="/images/login.jpg">
      <div className="padX padY sm:max-w-xl mx-auto w-full">
        <div className="text-center">
          <h4>
            Welcome back! Please enter your credentials to access your account
          </h4>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="pt-8 max-sm:pt-6 space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
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
            <Button disabled={isLogining} type="submit" className="w-full">
              {isLogining ? (
                <>
                  <Loader color="white" size={20} />
                  <span className="pl-1">Please wait...</span>
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>

        <p className="pt-3 text-sm">
          Don&apos;t have an account yet? Register
          <Link to="/register">
            <span className="pl-1 text-primary font-medium underline">
              here
            </span>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
