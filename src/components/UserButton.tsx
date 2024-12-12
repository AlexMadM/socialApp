"use client";
import { useSession } from "@/app/(main)/SessionProvider";
import { cn } from "@/lib/utils";
import {Check, LogOutIcon, Monitor, Moon, Sun, UserIcon} from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuPortal,
    DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "@/components/UserAvatar";
import {useTheme} from "next-themes";
import {useSignOut} from "@/app/(auth)/auth-api/use-auth-autorization";


interface UserButtonProps {
    className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
    const { userName,userId } = useSession();
    const {theme,setTheme} = useTheme();
    const {singOut}=useSignOut()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("flex-none rounded-full", className)}>
                    <UserAvatar avatarUrl={null} size={40} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Logged in as @{userName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/users/${userId}`}>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 size-4" />
                        Profile
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Monitor className="mr-2 size-4" />
                        Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <Monitor className="mr-2 size-4" />
                                System default
                                {theme === "system" && <Check className="ms-2 size-4" />}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 size-4" />
                                Light
                                {theme === "light" && <Check className="ms-2 size-4" />}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 size-4" />
                                Dark
                                {theme === "dark" && <Check className="ms-2 size-4" />}
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem

                    onClick={() => {
                         singOut()
                    }}
                >
                    <LogOutIcon className="mr-2 size-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}