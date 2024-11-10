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
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Icons } from "../ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "meow@gmail.com",
            password: "password123",
        },
    });
    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        // Here you would typically send the data to your backend
        console.log(data);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        navigate("/investor/dashboard");
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Login</CardTitle>
                <CardDescription className="text-center pt-1">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-xs text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                            <div className="flex items-center">
                                <Link
                                    to="#"
                                    className="ml-auto text-xs underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/auth/register"
                            className="text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
