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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import useUserStore from "@/store/id";
import useStartupStore from "@/store/startup";
import { useToast } from "../hooks/use-toast";
import useInvestorStore from "@/store/investor";

const loginSchema = z.object({
    userType: z.enum(["startup", "investor"], {
        required_error: "You must select a user type",
    }),
    username: z.string().min(6, "Invalid username address"),
    password: z.string().min(6, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setStartupDetails } = useStartupStore();
    const { setInvestorDetails } = useInvestorStore();
    const navigate = useNavigate();

    const { setId, setUser } = useUserStore();
    useEffect(() => {
        const handlePopState = () => {
            navigate("/", { replace: true });
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [navigate]);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            userType: "investor",
            username: "user1@example.com",
            password: "password1",
        },
        // defaultValues: {
        //     userType: "startup",
        //     username: "user001",
        //     password: "pass001",
        // },
    });
    const { toast } = useToast();
    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        // Here you would typically send the data to your backend
        console.log(data);
        // Simulate API call
        if (data.userType === "startup") {
            await axios
                .post("http://localhost:5000/startup-login", {
                    username: data.username,
                    password: data.password,
                })
                .then(async (response) => {
                    setId(response.data.startup_id);
                    setUser("startup");

                    await axios
                        .post("http://localhost:5000/startup-details", {
                            startup_id: response.data.startup_id,
                        })
                        .then((res) => {
                            setStartupDetails(res.data);
                            navigate(`/startup/dashboard`);
                        });
                })
                .catch(() => {
                    toast({
                        title: "Invalid Credentials",
                        description: "Invalid username or password",
                        variant: "destructive",
                    });
                });
        } else {
            await axios
                .post("http://localhost:5000/investor-login", {
                    username: data.username,
                    password: data.password,
                })
                .then(async (response) => {
                    setId(response.data.investor_id);
                    setUser("investor");

                    await axios
                        .post("http://localhost:5000/investor-details", {
                            investor_id: response.data.investor_id,
                        })
                        .then((res) => {
                            setInvestorDetails(res.data.investor_details);
                            navigate(`/investor/dashboard`);
                        });
                })
                .catch((error) => {
                    console.log(error);
                    toast({
                        title: "Invalid Credentials",
                        description: "Invalid username or password",
                        variant: "destructive",
                    });
                });
        }
        setIsLoading(false);
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Login</CardTitle>
                <CardDescription className="text-center pt-1">
                    Enter your username below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label>I am a</Label>
                            <RadioGroup
                                defaultValue="investor"
                                className="flex space-x-4"
                                onValueChange={(data) =>
                                    data === "startup"
                                        ? setValue("userType", "startup")
                                        : setValue("userType", "investor")
                                }
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
                        <div className="grid gap-2">
                            <Label htmlFor="username">username</Label>
                            <Input
                                id="username"
                                type="username"
                                placeholder="m@example.com"
                                {...register("username")}
                            />
                            {errors.username && (
                                <p className="text-xs text-red-500">
                                    {errors.username.message}
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
