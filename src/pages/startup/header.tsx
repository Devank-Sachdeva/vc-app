import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleUser, Package2 } from "lucide-react";
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
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between z-[998]">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    to="/startup/dashboard"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-6 w-6" />
                </Link>
                <Link
                    to="/startup/dashboard"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/startup/dashboard",
                        }
                    )}
                >
                    Dashboard
                </Link>
                <Link
                    to="/startup/investors"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/startup/investors",
                        }
                    )}
                >
                    Investors
                </Link>
                <Link
                    to="/startup/backers"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/startup/backers",
                        }
                    )}
                >
                    Backers
                </Link>
            </nav>

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
                <DropdownMenuContent align="end" className="z-[999]">
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => navigate("/startup/profile")}
                    >
                        My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => navigate("/startup/edit")}
                    >
                        Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            document.cookie.split(";").forEach((cookie) => {
                                const cookieName = cookie.split("=")[0].trim();
                                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                            });
                            navigate("/");
                        }}
                    >
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};
