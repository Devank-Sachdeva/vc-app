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
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    to="/investor/dashboard"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-6 w-6" />
                </Link>
                <Link
                    to="/investor/dashboard"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/investor/dashboard",
                        }
                    )}
                >
                    Dashboard
                </Link>
                <Link
                    to="/investor/startups"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/investor/startups",
                        }
                    )}
                >
                    Startups
                </Link>
                <Link
                    to="/investor/investments"
                    className={cn(
                        "transition-colors hover:text-foreground text-muted-foreground",
                        {
                            "font-semibold text-foreground":
                                location.pathname === "/investor/investments",
                        }
                    )}
                >
                    Investments
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
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            className="hover:cursor-pointer"
                            onClick={() => navigate("/investor/profile")}
                        >
                            My Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="hover:cursor-pointer"
                            onClick={() => navigate("/investor/edit")}
                        >
                            Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="hover:cursor-pointer">
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
        </header>
    );
};
