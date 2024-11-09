"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/ui/icons";
import { Link, useNavigate } from "react-router-dom";

const registerSchema = z
    .object({
        userType: z.enum(["startup", "investor"], {
            required_error: "You must select a user type",
        }),
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z
            .string()
            .min(8, "Password must be at least 8 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            userType: "startup",
        },
    });

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        // Here you would typically send the data to your backend
        console.log(data);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        if (data.userType === "startup") {
            navigate("/startup/dashboard");
        } else {
            navigate("/investor/dashboard");
        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Register</CardTitle>
                <CardDescription className="text-center pt-1">
                    Enter your details below to sign up
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label>I am a</Label>
                            <RadioGroup
                                defaultValue="startup"
                                className="flex space-x-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="startup"
                                        id="startup"
                                        {...register("userType")}
                                    />
                                    <Label htmlFor="startup">Startup</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="investor"
                                        id="investor"
                                        {...register("userType")}
                                    />
                                    <Label htmlFor="investor">Investor</Label>
                                </div>
                            </RadioGroup>
                            {errors.userType && (
                                <p className="text-sm text-red-500">
                                    {errors.userType.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirmPassword">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <p className="text-sm text-red-500">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <CardFooter className="flex flex-col items-center gap-4 mt-4 px-0">
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Sign Up
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                to="/auth/login"
                                className="text-primary hover:underline"
                            >
                                Login here
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
