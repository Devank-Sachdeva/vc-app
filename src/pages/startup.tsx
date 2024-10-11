import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { StartupElement } from "@/components/startup/startup-element";

const StartupData = [
    {
        name: "Startup 1",
        sales: "100,000",
        last_round_valuation: "1,000,000",
        funding_round: "Seed",
        tags: ["B2B", "AI", "Fintech", "Healthcare", "Analytics"],
    },
    {
        name: "Startup 2",
        sales: "200,000",
        last_round_valuation: "2,000,000",
        funding_round: "SeriesA",
        tags: ["B2C", "AI", "Fintech", "Healthcare", "Analytics"],
    },
    {
        name: "Startup 3",
        sales: "300,000",
        last_round_valuation: "3,000,000",
        funding_round: "SeriesB",
        tags: ["Marketing", "SaaS", "Productivity", "Education", "Security"],
    },
];

const Startup = () => {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Card x-chunk="dashboard-06-chunk-0">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex justify-between">
                                <div className="flex justify-center flex-col">
                                    Startups
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-auto flex items-center gap-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="h-8 gap-1"
                                                >
                                                    <ListFilter className="h-3.5 w-3.5" />
                                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                        Filter
                                                    </span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>
                                                    Filter by
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <Input
                                            type="fliters"
                                            placeholder="Add Filters..."
                                            className="pl-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardTitle>
                        <CardDescription>
                            <span className="flex flex-col justify-center">
                                Discover High-Potential Startups
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="overflow-y-scroll">
                        <Table>
                            <TableHeader>
                                <TableRow className="grid grid-cols-12 gap-4">
                                    <TableHead className="col-span-2 text-center">
                                        Name
                                    </TableHead>
                                    <TableHead className="col-span-2 text-center">
                                        Yearly Sales
                                    </TableHead>
                                    <TableHead className="col-span-2 text-center">
                                        Last Round Valuation
                                    </TableHead>
                                    <TableHead className="col-span-2 text-center">
                                        Last Round Type
                                    </TableHead>
                                    <TableHead className="col-span-4 text-center">
                                        Tags
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {StartupData.map((startup, index) => (
                                    <StartupElement
                                        key={index}
                                        name={startup.name}
                                        sales={startup.sales}
                                        last_round_valuation={
                                            startup.last_round_valuation
                                        }
                                        funding_round={startup.funding_round}
                                        tags= {startup.tags}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter>
                        <div className="text-xs text-muted-foreground">
                            Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                            products
                        </div>
                    </CardFooter>
                </Card>
            </main>
        </div>
    );
};

export default Startup;
