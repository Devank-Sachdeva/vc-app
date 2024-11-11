import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { PlusCircle, X } from "lucide-react";

const investorFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    photo: z.string().url({
        message: "Please enter a valid URL for the photo.",
    }),
    bio: z.string().min(10, {
        message: "Bio must be at least 10 characters.",
    }),
    investments: z.array(
        z.object({
            name: z.string().min(1, "Company name is required"),
            industry: z.string().min(1, "Industry is required"),
        })
    ),
    interests: z.array(z.string().min(1, "Interest cannot be empty")),
    portfolioLinks: z.array(
        z.object({
            name: z.string().min(1, "Link name is required"),
            url: z.string().url("Please enter a valid URL"),
        })
    ),
});

type InvestorFormValues = z.infer<typeof investorFormSchema>;

export default function EditInvestorProfile() {
    const [photoPreview] = useState("/avatar.png");

    const form = useForm<InvestorFormValues>({
        resolver: zodResolver(investorFormSchema),
        defaultValues: {
            name: "John Doe",
            photo: "/image1.png",
            bio: "Experienced angel investor with a passion for tech startups. 15+ years in venture capital, focusing on AI, blockchain, and sustainable energy solutions.",
            investments: [
                { name: "TechCorp", industry: "AI" },
                { name: "BlockChain Solutions", industry: "Blockchain" },
            ],
            interests: [
                "Artificial Intelligence",
                "Blockchain",
                "Sustainable Energy",
            ],
            portfolioLinks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/johndoe",
                },
                {
                    name: "Crunchbase",
                    url: "https://www.crunchbase.com/person/johndoe",
                },
            ],
        },
    });

    function onSubmit(data: InvestorFormValues) {
        console.log("clicked");
        console.log(data);
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">
        //                 {JSON.stringify(data, null, 2)}
        //             </code>
        //         </pre>
        //     ),
        // });
    }

    return (
        <div className="w-screen mx-auto px-4 pt-8 pb-20 h-auto">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">
                        Edit Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={() => form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <div className="flex">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="w-28 h-28">
                                        <AvatarImage
                                            src={photoPreview}
                                            alt="Profile photo preview"
                                        />
                                        <AvatarFallback>
                                            <img
                                                src="avatar.png"
                                                alt="Fallback image"
                                            />
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <span className="w-20"></span>
                                <div className="w-screen">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div>
                                <FormLabel>Investments</FormLabel>
                                {form.watch("investments").map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex items-end space-x-2 mt-2"
                                    >
                                        <FormField
                                            control={form.control}
                                            name={`investments.${index}.name`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Company name"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={`investments.${index}.industry`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Industry"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="icon"
                                            onClick={() => {
                                                const currentInvestments =
                                                    form.getValues(
                                                        "investments"
                                                    );
                                                form.setValue(
                                                    "investments",
                                                    currentInvestments.filter(
                                                        (_, i) => i !== index
                                                    )
                                                );
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                    onClick={() => {
                                        const currentInvestments =
                                            form.getValues("investments");
                                        form.setValue("investments", [
                                            ...currentInvestments,
                                            { name: "", industry: "" },
                                        ]);
                                    }}
                                >
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Add Investment
                                </Button>
                            </div>

                            <div>
                                <FormLabel>Interests</FormLabel>
                                {form.watch("interests").map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2 mt-2"
                                    >
                                        <FormField
                                            control={form.control}
                                            name={`interests.${index}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-grow">
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="icon"
                                            onClick={() => {
                                                const currentInterests =
                                                    form.getValues("interests");
                                                form.setValue(
                                                    "interests",
                                                    currentInterests.filter(
                                                        (_, i) => i !== index
                                                    )
                                                );
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                    onClick={() => {
                                        const currentInterests =
                                            form.getValues("interests");
                                        form.setValue("interests", [
                                            ...currentInterests,
                                            "",
                                        ]);
                                    }}
                                >
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Add Interest
                                </Button>
                            </div>

                            <div>
                                <FormLabel>Portfolio Links</FormLabel>
                                {form
                                    .watch("portfolioLinks")
                                    .map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex items-end space-x-2 mt-2"
                                        >
                                            <FormField
                                                control={form.control}
                                                name={`portfolioLinks.${index}.name`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                placeholder="Link name"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`portfolioLinks.${index}.url`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                placeholder="URL"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                onClick={() => {
                                                    const currentLinks =
                                                        form.getValues(
                                                            "portfolioLinks"
                                                        );
                                                    form.setValue(
                                                        "portfolioLinks",
                                                        currentLinks.filter(
                                                            (_, i) =>
                                                                i !== index
                                                        )
                                                    );
                                                }}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                    onClick={() => {
                                        const currentLinks =
                                            form.getValues("portfolioLinks");
                                        form.setValue("portfolioLinks", [
                                            ...currentLinks,
                                            { name: "", url: "" },
                                        ]);
                                    }}
                                >
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Add Portfolio Link
                                </Button>
                            </div>

                            <Button type="submit">Save Changes</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
