import {
    ArrowUpRight,
    BarChart3,
    CircleDollarSign,
    PieChart,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const investmentData = [
    {
        investor: "Acme Ventures",
        type: "VC",
        amount: "$1,000,000",
        date: "Jan 2023",
    },
    {
        investor: "John Doe",
        type: "Angel",
        amount: "$250,000",
        date: "Mar 2023",
    },
    {
        investor: "Tech Accelerator X",
        type: "Accelerator",
        amount: "$150,000",
        date: "Jun 2022",
    },
    {
        investor: "Future Fund",
        type: "VC",
        amount: "$400,000",
        date: "Sep 2023",
    },
];

const swotData = [
    {
        value: "strengths",
        items: [
            "Strong product-market fit",
            "Experienced leadership team",
            "Innovative AI technology",
        ],
    },
    {
        value: "weaknesses",
        items: [
            "Limited market presence",
            "High customer acquisition costs",
            "Dependency on key personnel",
        ],
    },
    {
        value: "opportunities",
        items: [
            "Expand into new markets",
            "Develop strategic partnerships",
            "Introduce new product features",
        ],
    },
    {
        value: "threats",
        items: [
            "Increasing competition",
            "Rapid technological changes",
            "Economic uncertainties",
        ],
    },
];

const competitorsData = [
    {
        name: "DataMind Inc.",
        marketShare: "15%",
        strengths: "Established brand, wide product range",
    },
    {
        name: "AI Insights Co.",
        marketShare: "10%",
        strengths: "Advanced AI algorithms, strong R&D",
    },
    {
        name: "Quantum Analytics",
        marketShare: "8%",
        strengths: "Competitive pricing, good customer support",
    },
];

const performanceData = [
    {
        title: "Product-Market Fit",
        rating: "Strong",
        ratingLevel: 2,
    },
    {
        title: "Revenue Growth",
        rating: "35% MoM",
        ratingLevel: 2,
    },
    {
        title: "Customer Acquisition Cost",
        rating: "Moderate",
        ratingLevel: 1,
    },
    {
        title: "Churn Rate",
        rating: "Low (2%)",
        ratingLevel: 2,
    },
    {
        title: "Team Expertise",
        rating: "High",
        ratingLevel: 2,
    },
];

const metricsData =  {
    "Estimated Valuation": {
        value: "$2.5M",
        description: "by the end of the quarter",
    },
    "Startup Health Score": {
        value: "78/100",
        description: "↑ 5 points from last month",
    },
    "Current Investors": {
        value: "7",
        description: "Total committed: $1.8M",
    },
    "Market Position": {
        value: "Top 10%",
        description: "In SaaS category",
    },
};

const SDashboard = () => {
    return (
        <div className="flex flex-col w-full ">
            <main className="flex-1 p-4 md:p-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Estimated valuation
                            </CardTitle>
                            <CircleDollarSign className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {metricsData["Estimated Valuation"].value}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {metricsData["Estimated Valuation"].description}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Startup Health Score
                            </CardTitle>
                            <BarChart3 className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {metricsData["Startup Health Score"].value}
                            </div>
                            <p className="text-xs text-green-500">
                                {
                                    metricsData["Startup Health Score"]
                                        .description
                                }
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Current Investors
                            </CardTitle>
                            <Users className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {metricsData["Current Investors"].value}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {metricsData["Current Investors"].description}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Market Position
                            </CardTitle>
                            <PieChart className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{metricsData["Market Position"].value}</div>
                            <p className="text-xs text-muted-foreground">
                                {metricsData["Market Position"].description}
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-8 mt-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                        <CardHeader className="flex flex-row justify-between">
                            <div className="">
                                <CardTitle>Top Investors</CardTitle>
                                <CardDescription>
                                    Overview of your current investor base
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1">
                                <Link to="/startup/backers">
                                    View All
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Investor</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {investmentData.map((investment, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {investment.investor}
                                            </TableCell>
                                            <TableCell>
                                                {investment.type}
                                            </TableCell>
                                            <TableCell>
                                                {investment.amount}
                                            </TableCell>
                                            <TableCell>
                                                {investment.date}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card className="lg:col-span-3">
                        <CardHeader>
                            <CardTitle>Startup Health/Ratings</CardTitle>
                            <CardDescription>
                                Key performance indicators
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {performanceData.map((indicator) => {
                                    let colorClass = "";
                                    switch (indicator.ratingLevel) {
                                        case 0:
                                            colorClass = "text-red-500";
                                            break;
                                        case 1:
                                            colorClass = "text-yellow-500";
                                            break;
                                        case 2:
                                            colorClass = "text-green-500";
                                            break;
                                        default:
                                            colorClass = "text-gray-500"; // fallback if needed
                                    }

                                    return (
                                        <div
                                            key={indicator.title}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="text-sm font-medium">
                                                {indicator.title}
                                            </div>
                                            <div
                                                className={`font-bold ${colorClass}`}
                                            >
                                                {indicator.rating}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-8 mt-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                        <CardHeader>
                            <CardTitle>Competition</CardTitle>
                            <CardDescription>
                                Overview of main competitors
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Competitor</TableHead>
                                        <TableHead>Market Share</TableHead>
                                        <TableHead>Strengths</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {competitorsData.map((competitor) => (
                                        <TableRow key={competitor.name}>
                                            <TableCell>
                                                {competitor.name}
                                            </TableCell>
                                            <TableCell>
                                                {competitor.marketShare}
                                            </TableCell>
                                            <TableCell>
                                                {competitor.strengths}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card className="lg:col-span-3">
                        <CardHeader>
                            <CardTitle>Recommended Improvements</CardTitle>
                            <CardDescription>SWOT Analysis</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="strengths">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="strengths">
                                        S
                                    </TabsTrigger>
                                    <TabsTrigger value="weaknesses">
                                        W
                                    </TabsTrigger>
                                    <TabsTrigger value="opportunities">
                                        O
                                    </TabsTrigger>
                                    <TabsTrigger value="threats">T</TabsTrigger>
                                </TabsList>
                                {swotData.map((category) => (
                                    <TabsContent
                                        key={category.value}
                                        value={category.value}
                                        className="space-y-4"
                                    >
                                        <ul className="list-disc pl-4 space-y-2">
                                            {category.items.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default SDashboard;
