import { useState } from "react";
import {
    Briefcase,
    ChevronDown,
    ChevronUp,
    DollarSign,
    Globe,
    Linkedin,
    StickyNote,
    Twitter,
    BookOpenIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { ValuationGraph } from "@/components/profile/valuation-graph";
import { EquityStructure } from "@/components/profile/equity-structure";

const startupData = {
    name: "TechNova AI",
    logo: "/placeholder.svg?height=100&width=100",
    pitch: "TechNova AI is revolutionizing the way businesses interact with their data. Our AI-powered analytics platform provides real-time insights and predictive modeling, enabling companies to make data-driven decisions faster and more accurately than ever before.TechNova AI is revolutionizing the way businesses interact with their data. Our AI-powered analytics platform provides real-time insights and predictive modeling, enabling companies to make data-driven decisions faster and more accurately than ever before.TechNova AI is revolutionizing the way businesses interact with their data. Our AI-powered analytics platform provides real-time insights and predictive modeling, enabling companies to make data-driven decisions faster and more accurately than ever before.",
    equityStructure: [
        { name: "Founders", value: 60 },
        { name: "Investors", value: 30 },
        { name: "Employee Pool", value: 10 },
    ],
    currentInvestors: [
        { name: "Acme Ventures", amount: "$2M", equity: "15%" },
        { name: "Tech Accelerator X", amount: "$500K", equity: "5%" },
        { name: "Angel Investor Network", amount: "$1M", equity: "10%" },
    ],
    founders: [
        {
            name: "Jane Doe",
            role: "CEO",
            linkedin: "https://linkedin.com/in/janedoe",
            twitter: "https://twitter.com/janedoe",
        },
        {
            name: "John Smith",
            role: "CTO",
            linkedin: "https://linkedin.com/in/johnsmith",
            crunchbase: "https://crunchbase.com/johnsmith",
        },
    ],
    socialLinks: {
        website: "https://technova.ai",
        linkedin: "https://linkedin.com/company/technova-ai",
        twitter: "https://twitter.com/technova_ai",
    },
    currentFunding: 3500000,
    fundingGoal: 5000000,
    fundingRound: "Series A",
    valuation: [
        { quarter: "Q3 2023", value: 10 },
        { quarter: "Q4 2023", value: 12 },
        { quarter: "Q1 2024", value: 15 },
        { quarter: "Q2 2024", value: 18 },
        { quarter: "Q3 2024", value: 22 },
    ],
};

export default function StartupProfile() {
    const [isPitchExpanded, setIsPitchExpanded] = useState(false);

    return (
        <div className="container mx-auto p-4 space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img
                        src={startupData.logo}
                        alt={`${startupData.name} logo`}
                        width={100}
                        height={100}
                        className="rounded-full bg-red-300"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">
                            {startupData.name}
                        </h1>
                        <p className="text-muted-foreground">
                            {startupData.fundingRound}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href={startupData.socialLinks.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Globe className="h-6 w-6" />
                            </a>
                            <a
                                href={startupData.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href={startupData.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <h2 className="text-3xl font-bold text-primary">
                        ${(startupData.currentFunding / 1000000).toFixed(1)}M
                    </h2>
                    <p className="text-muted-foreground">Current Funding</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <StickyNote className="mr-2 h-5 w-5" />
                        Pitch
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className={`${isPitchExpanded ? "" : "line-clamp-3"}`}>
                        {startupData.pitch}
                    </p>
                    <Button
                        variant="ghost"
                        onClick={() => setIsPitchExpanded(!isPitchExpanded)}
                        className="mt-2"
                    >
                        {isPitchExpanded ? (
                            <>
                                Show Less <ChevronUp className="ml-2 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Show More{" "}
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <EquityStructure />

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <DollarSign className="mr-2 h-5 w-5" />
                            Current Investors
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Equity</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {startupData.currentInvestors.map(
                                    (investor) => (
                                        <TableRow key={investor.name}>
                                            <TableCell>
                                                {investor.name}
                                            </TableCell>
                                            <TableCell>
                                                {investor.amount}
                                            </TableCell>
                                            <TableCell>
                                                {investor.equity}
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5" />
                        Founders
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        {startupData.founders.map((founder) => (
                            <div
                                key={founder.name}
                                className="flex items-center space-x-4"
                            >
                                <img
                                    src={`/placeholder.svg?height=50&width=50&text=${founder.name[0]}`}
                                    alt={founder.name}
                                    width={75}
                                    height={75}
                                    className="rounded-full bg-red-300"
                                />
                                <div>
                                    <h3 className="font-semibold">
                                        {founder.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {founder.role}
                                    </p>
                                    <div className="flex space-x-2 mt-1">
                                        {founder.linkedin && (
                                            <a
                                                href={founder.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </a>
                                        )}
                                        {founder.twitter && (
                                            <a
                                                href={founder.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Twitter className="h-5 w-5" />
                                            </a>
                                        )}

                                        {founder.crunchbase && (
                                            <a
                                                href={founder.crunchbase}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <BookOpenIcon className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <ValuationGraph />
        </div>
    );
}
