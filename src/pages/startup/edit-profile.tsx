import { Trash2 } from "lucide-react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/hooks/use-toast";
import { FundingRound } from "@/lib/utils";

type StartupFormData = {
    name: string;
    logo: string;
    pitch: string;
    fundingRound: string;
    currentFunding: number;
    fundingGoal: number;
    foundedOn: string;
    equityStructure: { name: string; value: number }[];
    currentInvestors: { name: string; amount: string; equity: string }[];
    founders: {
        name: string;
        role: string;
        linkedin: string;
        twitter: string;
        crunchbase: string;
    }[];
    socialLinks: {
        website: string;
        linkedin: string;
        twitter: string;
    };
    valuation: { year: string; quarter: string; value: number }[];
};

const quarters = ["Q1", "Q2", "Q3", "Q4"];
const years = ["2021", "2022", "2023", "2024"];

export default function StartupProfileEdit() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<StartupFormData>({
        defaultValues: {
            name: "TechNova AI",
            logo: "/placeholder.svg?height=100&width=100",
            pitch: "TechNova AI is revolutionizing the way businesses interact with their data...",
            fundingRound: "Series A",
            currentFunding: 3500000,
            fundingGoal: 5000000,
            foundedOn: "2021-01-01",
            equityStructure: [
                { name: "Founders", value: 60 },
                { name: "Investors", value: 30 },
                { name: "Employee Pool", value: 10 },
            ],
            currentInvestors: [
                { name: "Acme Ventures", amount: "$2M", equity: "15%" },
                { name: "Tech Accelerator X", amount: "$500K", equity: "5%" },
                {
                    name: "Angel Investor Network",
                    amount: "$1M",
                    equity: "10%",
                },
            ],
            founders: [
                {
                    name: "Jane Doe",
                    role: "CEO",
                    linkedin: "https://linkedin.com/in/janedoe",
                    twitter: "https://twitter.com/janedoe",
                    crunchbase: "",
                },
                {
                    name: "John Smith",
                    role: "CTO",
                    linkedin: "https://linkedin.com/in/johnsmith",
                    twitter: "",
                    crunchbase: "https://github.com/johnsmith",
                },
            ],
            socialLinks: {
                website: "https://technova.ai",
                linkedin: "https://linkedin.com/company/technova-ai",
                twitter: "https://twitter.com/technova_ai",
            },
            valuation: [
                { year: "2023", quarter: "Q3", value: 10 },
                { year: "2023", quarter: "Q4", value: 12 },
                { year: "2024", quarter: "Q1", value: 15 },
                { year: "2024", quarter: "Q2", value: 18 },
                { year: "2024", quarter: "Q3", value: 22 },
            ],
        },
    });

    const {
        fields: equityFields,
        append: appendEquity,
        remove: removeEquity,
    } = useFieldArray({
        control,
        name: "equityStructure",
    });

    const {
        fields: investorFields,
        append: appendInvestor,
        remove: removeInvestor,
    } = useFieldArray({
        control,
        name: "currentInvestors",
    });

    const {
        fields: founderFields,
        append: appendFounder,
        remove: removeFounder,
    } = useFieldArray({
        control,
        name: "founders",
    });

    const {
        fields: valuationFields,
        append: appendValuation,
        remove: removeValuation,
    } = useFieldArray({
        control,
        name: "valuation",
    });

    const onSubmit = (data: StartupFormData) => {
        console.log(data);
        toast({
            title: "Profile Updated",
            description: "Your startup profile has been successfully updated.",
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto p-4 space-y-8 overflow-hidden"
        >
            <Card>
                <CardHeader>
                    <CardTitle>Edit Startup Profile</CardTitle>
                    <CardDescription>
                        Update your startup&apos;s information
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex space-x-5 gap-4 space-y-2">
                        <img
                            src={""}
                            alt={`logo`}
                            width={100}
                            height={100}
                            className="rounded-full bg-red-300"
                        />

                        <div className="space-y-2 w-1/2">
                            <Label htmlFor="name">Startup Name</Label>
                            <Input
                                id="name"
                                {...register("name", {
                                    required: "Startup name is required",
                                })}
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="pitch">Pitch</Label>
                        <Textarea
                            id="pitch"
                            {...register("pitch", {
                                required: "Pitch is required",
                            })}
                        />
                        {errors.pitch && (
                            <p className="text-sm text-red-500">
                                {errors.pitch.message}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="fundingRound">Funding Round</Label>
                            <Controller
                                name="fundingRound"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Funding round type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(FundingRound).map(
                                                (round) => (
                                                    <SelectItem
                                                        key={round}
                                                        value={round}
                                                    >
                                                        {round}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="currentFunding">
                                Current Funding
                            </Label>
                            <Input
                                id="currentFunding"
                                type="number"
                                {...register("currentFunding", {
                                    valueAsNumber: true,
                                })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="foundedOn">Founded On</Label>
                            <Input
                                id="foundedOn"
                                type="date"
                                className="w-full"
                                onClick={(e) => e.currentTarget.showPicker()}
                                {...register("foundedOn", {
                                    required: "Founding date is required",
                                })}
                            />
                            {errors.foundedOn && (
                                <p className="text-sm text-red-500">
                                    {errors.foundedOn.message}
                                </p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Equity Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {equityFields.map((field, index) => (
                        <div
                            key={field.id}
                            className="flex items-end space-x-4"
                        >
                            <div className="flex-grow space-y-2">
                                <Label
                                    htmlFor={`equityStructure.${index}.name`}
                                >
                                    Name
                                </Label>
                                <Input
                                    {...register(
                                        `equityStructure.${index}.name` as const
                                    )}
                                />
                            </div>
                            <div className="flex-grow space-y-2">
                                <Label
                                    htmlFor={`equityStructure.${index}.value`}
                                >
                                    Value (%)
                                </Label>
                                <Input
                                    type="number"
                                    {...register(
                                        `equityStructure.${index}.value` as const,
                                        { valueAsNumber: true }
                                    )}
                                />
                            </div>
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => removeEquity(index)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => appendEquity({ name: "", value: 0 })}
                    >
                        Add Equity Holder
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Current Investors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {investorFields.map((field, index) => (
                        <div
                            key={field.id}
                            className="flex items-end space-x-4"
                        >
                            <div className="flex-grow space-y-2">
                                <Label
                                    htmlFor={`currentInvestors.${index}.name`}
                                >
                                    Name
                                </Label>
                                <Input
                                    {...register(
                                        `currentInvestors.${index}.name` as const
                                    )}
                                />
                            </div>
                            <div className="flex-grow space-y-2">
                                <Label
                                    htmlFor={`currentInvestors.${index}.amount`}
                                >
                                    Amount
                                </Label>
                                <Input
                                    {...register(
                                        `currentInvestors.${index}.amount` as const
                                    )}
                                />
                            </div>
                            <div className="flex-grow space-y-2">
                                <Label
                                    htmlFor={`currentInvestors.${index}.equity`}
                                >
                                    Equity
                                </Label>
                                <Input
                                    {...register(
                                        `currentInvestors.${index}.equity` as const
                                    )}
                                />
                            </div>
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => removeInvestor(index)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                            appendInvestor({
                                name: "",
                                amount: "",
                                equity: "",
                            })
                        }
                    >
                        Add Investor
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Founders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {founderFields.map((field, index) => (
                        <div key={field.id} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor={`founders.${index}.name`}>
                                        Name
                                    </Label>
                                    <Input
                                        {...register(
                                            `founders.${index}.name` as const
                                        )}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`founders.${index}.role`}>
                                        Role
                                    </Label>
                                    <Input
                                        {...register(
                                            `founders.${index}.role` as const
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor={`founders.${index}.linkedin`}
                                    >
                                        LinkedIn
                                    </Label>
                                    <Input
                                        {...register(
                                            `founders.${index}.linkedin` as const
                                        )}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor={`founders.${index}.twitter`}
                                    >
                                        Twitter
                                    </Label>
                                    <Input
                                        {...register(
                                            `founders.${index}.twitter` as const
                                        )}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor={`founders.${index}.crunchbase`}
                                    >
                                        CrunchBase
                                    </Label>
                                    <Input
                                        {...register(
                                            `founders.${index}.crunchbase` as const
                                        )}
                                    />
                                </div>
                            </div>
                            <Button
                                type="button"
                                variant="destructive"
                                onClick={() => removeFounder(index)}
                            >
                                Remove Founder
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                            appendFounder({
                                name: "",
                                role: "",
                                linkedin: "",
                                twitter: "",
                                crunchbase: "",
                            })
                        }
                    >
                        Add Founder
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Social Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="socialLinks.website">Website</Label>
                        <Input {...register("socialLinks.website")} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="socialLinks.linkedin">LinkedIn</Label>
                        <Input {...register("socialLinks.linkedin")} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="socialLinks.twitter">Twitter</Label>
                        <Input {...register("socialLinks.twitter")} />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Valuation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {valuationFields.map((field, index) => (
                        <div
                            key={field.id}
                            className="flex items-end space-x-4"
                        >
                            <div className="flex-grow space-y-2">
                                <Label htmlFor={`valuation.${index}.year`}>
                                    Year
                                </Label>
                                <Controller
                                    name={`valuation.${index}.year` as const}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {years.map((year) => (
                                                    <SelectItem
                                                        key={year}
                                                        value={year}
                                                    >
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>
                            <div className="flex-grow space-y-2">
                                <Label htmlFor={`valuation.${index}.quarter`}>
                                    Quarter
                                </Label>
                                <Controller
                                    name={`valuation.${index}.quarter` as const}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select quarter" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {quarters.map((quarter) => (
                                                    <SelectItem
                                                        key={quarter}
                                                        value={quarter}
                                                    >
                                                        {quarter}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>
                            <div className="flex-grow space-y-2">
                                <Label htmlFor={`valuation.${index}.value`}>
                                    Value ($M)
                                </Label>
                                <Input
                                    type="number"
                                    {...register(
                                        `valuation.${index}.value` as const,
                                        { valueAsNumber: true }
                                    )}
                                />
                            </div>
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => removeValuation(index)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                            appendValuation({
                                year: "",
                                quarter: "",
                                value: 0,
                            })
                        }
                    >
                        Add Valuation Entry
                    </Button>
                </CardContent>
            </Card>

            <Button type="submit" className="w-full">
                Update Profile
            </Button>
        </form>
    );
}
