"use client"

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleUser, Package2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    to="#"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-6 w-6" />
                </Link>
                <Link
                    to="/dashboard"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/dashboard",
                        }
                    )}
                >
                    Dashboard
                </Link>
                <Link
                    to="/startups"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/startups",
                        }
                    )}
                >
                    Startups
                </Link>
                <Link
                    to="#"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/investments",
                        }
                    )}
                >
                    Investments
                </Link>
            </nav>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search startups..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full"
                        >
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            className="hover:cursor-pointer"
                            onClick={() => navigate("/profile")}
                        >
                            My Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="hover:cursor-pointer"
                            onClick={() => navigate("/edit")}
                        >
                            Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="hover:cursor-pointer">
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};
