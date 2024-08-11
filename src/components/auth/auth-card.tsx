import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export const AuthCard = () => {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Login</CardTitle>
                <CardDescription className="text-center">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                        <div className="flex items-center">
                            <Link to="#" className="ml-auto text-xs underline">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="#" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};
