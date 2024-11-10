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
                            <div className="text-2xl font-bold">$2.5M</div>
                            <p className="text-xs text-muted-foreground">
                                by the end of the quarter
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
                            <div className="text-2xl font-bold">78/100</div>
                            <p className="text-xs text-green-500">
                                ↑ 5 points from last month
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
                            <div className="text-2xl font-bold">7</div>
                            <p className="text-xs text-muted-foreground">
                                Total committed: $1.8M
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
                            <div className="text-2xl font-bold">Top 10%</div>
                            <p className="text-xs text-muted-foreground">
                                In SaaS category
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
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">
                                        Product-Market Fit
                                    </div>
                                    <div className="font-bold text-green-500">
                                        Strong
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">
                                        Revenue Growth
                                    </div>
                                    <div className="font-bold text-green-500">
                                        35% MoM
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">
                                        Customer Acquisition Cost
                                    </div>
                                    <div className="font-bold text-yellow-500">
                                        Moderate
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">
                                        Churn Rate
                                    </div>
                                    <div className="font-bold text-green-500">
                                        Low (2%)
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">
                                        Team Expertise
                                    </div>
                                    <div className="font-bold text-green-500">
                                        High
                                    </div>
                                </div>
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
                                    <TableRow>
                                        <TableCell>DataMind Inc.</TableCell>
                                        <TableCell>15%</TableCell>
                                        <TableCell>
                                            Established brand, wide product
                                            range
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>AI Insights Co.</TableCell>
                                        <TableCell>10%</TableCell>
                                        <TableCell>
                                            Advanced AI algorithms, strong R&D
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Quantum Analytics</TableCell>
                                        <TableCell>8%</TableCell>
                                        <TableCell>
                                            Competitive pricing, good customer
                                            support
                                        </TableCell>
                                    </TableRow>
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
                                <TabsContent
                                    value="strengths"
                                    className="space-y-4"
                                >
                                    <ul className="list-disc pl-4 space-y-2">
                                        <li>Strong product-market fit</li>
                                        <li>Experienced leadership team</li>
                                        <li>Innovative AI technology</li>
                                    </ul>
                                </TabsContent>
                                <TabsContent
                                    value="weaknesses"
                                    className="space-y-4"
                                >
                                    <ul className="list-disc pl-4 space-y-2">
                                        <li>Limited market presence</li>
                                        <li>High customer acquisition costs</li>
                                        <li>Dependency on key personnel</li>
                                    </ul>
                                </TabsContent>
                                <TabsContent
                                    value="opportunities"
                                    className="space-y-4"
                                >
                                    <ul className="list-disc pl-4 space-y-2">
                                        <li>Expand into new markets</li>
                                        <li>Develop strategic partnerships</li>
                                        <li>Introduce new product features</li>
                                    </ul>
                                </TabsContent>
                                <TabsContent
                                    value="threats"
                                    className="space-y-4"
                                >
                                    <ul className="list-disc pl-4 space-y-2">
                                        <li>Increasing competition</li>
                                        <li>Rapid technological changes</li>
                                        <li>Economic uncertainties</li>
                                    </ul>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default SDashboard;
