import { useUserContext } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

type AuthLayoutProps = {
  img: string;
  children: React.ReactNode;
};

export default function AuthLayout({ img, children }: AuthLayoutProps) {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center max-md:items-start min-h-[calc(100vh-80px)] max-md:max-h-fit">
      {children}
      <div className="self-stretch relative max-lg:hidden">
        <div className="absolute top-0 w-full bottom-0 bg-primary bg-opacity-10" />
        <img src={img} alt="banner" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
