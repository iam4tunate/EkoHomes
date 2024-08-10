import {
  BookMarked,
  Dot,
  HousePlus,
  LogIn,
  LogOut,
  MenuIcon,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { useLogoutUuser } from "@/lib/react-query/queries";
import Logo from "./Logo";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isLoading: isUserLoadng } = useUserContext();
  const { mutate: logout, isSuccess } = useLogoutUuser();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [navigate, isSuccess]);

  return (
    <div className="flex items-center justify-between container padX h-20 border-b">
      <Logo />
      <ul className="max-lg:hidden ml-auto flex items-center gap-x-12 text-[15px] pr-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
      <div className="flex items-center gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-x-2 rounded-full px-3 py-1 border hover:shadow cursor-pointer">
              <MenuIcon />
              <img
                src={user.imageUrl || "/public/images/user-placeholder.png"}
                alt=""
                className="rounded-full w-8 h-8"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            {!user.id && (
              <>
                <Link to="/login">
                  <DropdownMenuItem className="text-primary bg-primary bg-opacity-10">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Log in</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuGroup>
              <Link to="/">
                <DropdownMenuItem>
                  <Dot className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </DropdownMenuItem>
              </Link>
              <Link to="/about">
                <DropdownMenuItem>
                  <Dot className="mr-2 h-4 w-4" />
                  <span>About</span>
                </DropdownMenuItem>
              </Link>
              <Link to="/services">
                <DropdownMenuItem>
                  <Dot className="mr-2 h-4 w-4" />
                  <span>Services</span>
                </DropdownMenuItem>
              </Link>
              <Link to="/explore">
                <DropdownMenuItem>
                  <Dot className="mr-2 h-4 w-4" />
                  <span>Explore</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Account</span>
              </DropdownMenuItem>
              <Link to="/create">
                <DropdownMenuItem>
                  <HousePlus className="mr-2 h-4 w-4" />
                  <span>Create</span>
                </DropdownMenuItem>
              </Link>
              <Link to="/create">
                <DropdownMenuItem>
                  <BookMarked className="mr-2 h-4 w-4" />
                  <span>Saved</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {user.id && (
              <DropdownMenuItem
                onClick={() => logout()}
                className="text-red-500 bg-red-100">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        {!user.id && !isUserLoadng && (
          <Link to="/login">
            <Button className="max-sm:hidden">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
