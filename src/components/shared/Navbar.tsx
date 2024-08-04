import {
  ChevronDown,
  LockKeyhole,
  LogOut,
  Menu,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "./Logo";

export default function Navbar() {
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
        <Menu size={28} className="lg:hidden" />
        {/* <Link href='/login'>
          <Button variant='outline'>Log in</Button>
        </Link> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center justify-between">
              <span className="pr-2">Hi, Joseph</span> <ChevronDown size={13} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-30">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Account</span>
              </DropdownMenuItem>
              <Link to="/admin/listings">
                <DropdownMenuItem>
                  <LockKeyhole className="mr-2 h-4 w-4" />
                  <span>Admin</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="max-sm:hidden">Contact us</Button>
      </div>
    </div>
  );
}
