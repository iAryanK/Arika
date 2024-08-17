"use client";

import { LogOut, SunMoon, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggleButton } from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { handleSignOut } from "@/lib/actions/user.action";
import ConfirmDialog from "./ConfirmDialog";
import Image from "next/image";

export function UserButtonDropdown({ session }: { session: any }) {
  const router = useRouter();

  const handleLogOut = async () => {
    await handleSignOut();
    router.replace("/");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={session?.user?.image} />
          <AvatarFallback>
            <Image
              src={"/boyface.png"}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 w-56 bg-background/[0.5] backdrop-blur-sm">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleProfile} className="py-2">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <ConfirmDialog
              title="Are you sure you want to logout?"
              description="You will need to login again to access your data."
            >
              <div className="ml-2 flex items-center py-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span className="text-sm">Log out</span>
              </div>
            </ConfirmDialog>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-transparent">
          <SunMoon className="mr-1 h-5 w-5" />
          <span>Theme</span>
          <DropdownMenuShortcut>
            <ThemeToggleButton />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
