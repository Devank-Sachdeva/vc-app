import { useEffect, useState } from "react";
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
    Users,
    ArrowUpRight,
    TrendingUp,
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MetricDialogBox } from "./metric-dialog-box";
import GaugeChart from "./gauge-chart";
import { InvestedStartupsType } from "@/lib/startup-type";
import { InvestorDetailsType } from "@/lib/investor-type";
import useUserStore from "@/store/id";
import useInvestorStore from "@/store/investor";
import axios from "axios";
import useStartupStore from "@/store/startup";
import { formatValuation } from "@/lib/utils";
import { Icons } from "../ui/icons";

const startupData = {
    name: "TechNova AI",
    logo: "/startup.webp",
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
            name: "Arshneer Grover",
            role: "CEO",
            linkedin: "https://linkedin.com/in/janedoe",
            twitter: "https://twitter.com/janedoe",
            img: "jane.png",
        },
        {
            name: "Harry Smith",
            role: "CTO",
            linkedin: "https://linkedin.com/in/johnsmith",
            crunchbase: "https://crunchbase.com/johnsmith",
            img: "john.png",
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

const similarStartups = [
    {
        name: "DataMind",
        logo: "/startup.webp",
        description: "AI-driven data analysis for enterprise",
        fundingStage: "Series B",
        totalFunding: "$15M",
    },
    {
        name: "Predicto",
        logo: "/startup.webp",
        description: "Predictive analytics for e-commerce",
        fundingStage: "Series A",
        totalFunding: "$8M",
    },
    {
        name: "AInsights",
        logo: "/startup.webp",
        description: "AI-powered business intelligence platform",
        fundingStage: "Seed",
        totalFunding: "$2.5M",
    },
];

export default function StartupProfile({ isOwn = true }) {

    const { startupDetails, setStartupDetails } = useStartupStore();

    const { id } = useUserStore();

    const [investors, setInvestors] = useState<InvestedStartupsType[]>([]);
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        async function current() {
            await axios
                .post("http://localhost:5000/current-investors", {
                    startup_id: id,
                })
                .then(async (res) => {
                    console.log(res.data);
                    setInvestors(res.data.investors);
                    
                    await axios
                        .post("http://localhost:5000/startup-details", {
                            startup_id: isOwn ? id :
                                location.pathname.split("/")[
                                    location.pathname.split("/").length - 1
                                ],
                        })
                        .then((res) => {
                            console.log(res.data);
                            setStartupDetails(res.data);
                            setLoading(false);
                        });
                });
        }
        current();
    }, [id, isOwn, location]);

    console.log(startupDetails)
    const [isPitchExpanded, setIsPitchExpanded] = useState(false);
    const navigate = useNavigate();

    return isLoading ? <Icons.spinner /> : (
        <div className="container mx-auto p-4 space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img
                        src={"/startup.webp"}
                        alt={"startup.webp"}
                        width={100}
                        height={100}
                        className="rounded-full bg-red-300"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">
                            {startupDetails?.name}
                        </h1>
                        <p className="text-muted-foreground">
                            {startupDetails?.funding_stage}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href={startupDetails?.social_links[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Globe className="h-6 w-6" />
                            </a>
                            <a
                                href={startupDetails?.social_links[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href={startupDetails?.social_links[1]}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-right flex flex-col">
                    <div className="text-[1.75rem] font-bold text-primary">
                        $
                        {formatValuation(startupData.currentFunding.toString())}
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">
                        Current Funding
                    </p>
                    <Button
                        size={"sm"}
                        onClick={() => {
                            if (isOwn) {
                                navigate("/startup/edit");
                            }
                        }}
                    >
                        <div className="flex text-base items-center">
                            {isOwn ? "Edit" : "Connect"}
                            <ArrowUpRight className="w-5 h-5 ml-1" />
                        </div>
                    </Button>
                    {isOwn && (
                        <Button
                            className="mt-2"
                            variant={"outline"}
                            size={"sm"}
                            onClick={() => {
                                if (isOwn) {
                                    navigate("/startup/metrics");
                                }
                            }}
                        >
                            <div className="flex text-base items-center">
                                View Metrics
                                <TrendingUp className="w-5 h-5 ml-1" />
                            </div>
                        </Button>
                    )}

                    {!isOwn && <MetricDialogBox />}
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
                        {startupDetails?.pitch}
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
                <EquityStructure data={startupDetails?.equity_structure} />

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
                                {investors?.map((investor) => (
                                    <TableRow key={investor.name}>
                                        <TableCell>{investor.name}</TableCell>
                                        <TableCell>
                                            {formatValuation(
                                                investor.amount.toString()
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {(
                                                (investor.amount /
                                                    investor.valuation) *
                                                100
                                            ).toFixed(2)}{" "}
                                            %
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
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
                                        src={`/${founder.img}`}
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
                <GaugeChart value={startupDetails?.rating * 2} />
            </div>
            <ValuationGraph />

            {!isOwn && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Users className="mr-2 h-5 w-5" />
                            Similar Startups
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                            {similarStartups.map((startup) => (
                                <div
                                    key={startup.name}
                                    className="flex flex-col items-center space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center"
                                >
                                    <img
                                        src={"/startup.webp"}
                                        alt={`${startup.name} logo`}
                                        width={50}
                                        height={50}
                                        className="rounded-full border-2 border-primary"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {startup.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {startup.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="text-sm font-medium">
                                            {startup.fundingStage}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {startup.totalFunding} raised
                                        </p>
                                    </div>
                                    <Button variant="outline" asChild>
                                        <Link
                                            to={`/investor/startup/${startup.name
                                                .toLowerCase()
                                                .replace(/ /g, "-")}`}
                                        >
                                            View Profile
                                        </Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
