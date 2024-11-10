import { useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Download,
    Filter,
    Search,
    SortAsc,
    SortDesc,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const startups = [
    {
        name: "Alpha Innovations",
        stage: "Seed",
        amount: 500000,
        equity: 10,
        date: new Date("2021-06-15"),
        currentValuation: 2000000,
        unrealizedReturn: 1500000, // 300% gain
    },
    {
        name: "Beta Labs",
        stage: "Series A",
        amount: 1200000,
        equity: 15,
        date: new Date("2020-09-10"),
        currentValuation: 3500000,
        unrealizedReturn: 2300000, // 192% gain
    },
    {
        name: "Gamma Technologies",
        stage: "Pre-Seed",
        amount: 100000,
        equity: 8,
        date: new Date("2022-01-20"),
        currentValuation: 90000,
        unrealizedReturn: -10000, // -10% loss
    },
    {
        name: "Delta Robotics",
        stage: "Later Stage",
        amount: 5000000,
        equity: 12,
        date: new Date("2018-04-18"),
        currentValuation: 12000000,
        unrealizedReturn: 7000000, // 140% gain
    },
    {
        name: "Epsilon Health",
        stage: "Series B",
        amount: 2000000,
        equity: 18,
        date: new Date("2021-11-02"),
        currentValuation: 4500000,
        unrealizedReturn: 2500000, // 125% gain
    },
    {
        name: "Zeta Space",
        stage: "Seed",
        amount: 750000,
        equity: 6,
        date: new Date("2022-03-12"),
        currentValuation: 600000,
        unrealizedReturn: -150000, // -20% loss
    },
    {
        name: "Eta AI",
        stage: "Series A",
        amount: 1500000,
        equity: 20,
        date: new Date("2020-12-05"),
        currentValuation: 4000000,
        unrealizedReturn: 2500000, // 167% gain
    },
    {
        name: "Theta Biotech",
        stage: "Pre-Seed",
        amount: 250000,
        equity: 10,
        date: new Date("2023-02-10"),
        currentValuation: 2500000,
        unrealizedReturn: 2500000, // 0% change
    },
    {
        name: "Iota Energy",
        stage: "Later Stage",
        amount: 8000000,
        equity: 25,
        date: new Date("2017-07-08"),
        currentValuation: 20000000,
        unrealizedReturn: 12000000, // 150% gain
    },
    {
        name: "Kappa Ventures",
        stage: "Series B",
        amount: 3000000,
        equity: 15,
        date: new Date("2019-05-22"),
        currentValuation: 5500000,
        unrealizedReturn: 2500000, // 83% gain
    },
    {
        name: "Lambda Software",
        stage: "Seed",
        amount: 400000,
        equity: 7,
        date: new Date("2022-07-15"),
        currentValuation: 450000,
        unrealizedReturn: 50000, // 12.5% gain
    },
    {
        name: "Mu Networks",
        stage: "Series A",
        amount: 2500000,
        equity: 12,
        date: new Date("2021-10-30"),
        currentValuation: 6000000,
        unrealizedReturn: 3500000, // 140% gain
    },
    {
        name: "Nu Robotics",
        stage: "Other",
        amount: 1000000,
        equity: 5,
        date: new Date("2021-06-25"),
        currentValuation: 1200000,
        unrealizedReturn: 200000, // 20% gain
    },
    {
        name: "Xi Analytics",
        stage: "Pre-Seed",
        amount: 150000,
        equity: 10,
        date: new Date("2022-09-10"),
        currentValuation: 130000,
        unrealizedReturn: -20000, // -13% loss
    },
    {
        name: "Omicron Fintech",
        stage: "Series B",
        amount: 3500000,
        equity: 18,
        date: new Date("2019-08-19"),
        currentValuation: 6500000,
        unrealizedReturn: 3000000, // 86% gain
    },
];

type SortKey = "name" | "amount" | "equity" | "date";

const Investments = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [sortKey, setSortKey] = useState<SortKey>("date");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    function UnrealisedToPercentage(
        amountInvested: number,
        unrealizedReturn: number
    ): string {
        const percentage = (unrealizedReturn / amountInvested) * 100;
        return `${percentage.toFixed(2)}%`;
    }

    const filteredInvestors = startups
        .filter((startup) => {
            const matchesSearch =
                startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                startup.stage.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType =
                selectedTypes.length === 0 ||
                selectedTypes.includes(startup.stage);
            return matchesSearch && matchesType;
        })
        .sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

    const totalInvestment = filteredInvestors.reduce(
        (sum, investor) => sum + investor.amount,
        0
    );
    const totalEquity = filteredInvestors.reduce(
        (sum, investor) => sum + investor.equity,
        0
    );

    const handleSort = (key: SortKey) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("asc");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">
                            Current Investments
                        </h1>
                        <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                        <div className="p-4 border rounded-lg">
                            <h2 className="text-sm font-medium text-gray-500">
                                Total Investment
                            </h2>
                            <p className="text-2xl font-bold">
                                ${totalInvestment.toLocaleString()}
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h2 className="text-sm font-medium text-gray-500">
                                Total Portfolio Valuation
                            </h2>
                            <div className="flex items-baseline justify-between">
                                <p className="text-2xl font-bold ">
                                    {totalEquity.toFixed(2)}%
                                </p>
                                <p className="text-xs text-green-500">
                                    (+20% from last month)
                                </p>
                            </div>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h2 className="text-sm font-medium text-gray-500">
                                Number of Investments
                            </h2>
                            <p className="text-2xl font-bold">
                                {filteredInvestors.length}
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h2 className="text-sm font-medium text-gray-500">
                                Latest Investment
                            </h2>
                            <p className="text-2xl font-bold">
                                {new Date(
                                    Math.max(
                                        ...filteredInvestors.map((i) =>
                                            new Date(i.date).getTime()
                                        )
                                    )
                                ).toLocaleDateString("en-GB")}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                className="pl-8"
                                placeholder="Search investors..."
                                type="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filter
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    Investor Type
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {Array.from(
                                    new Set(startups.map((i) => i.stage))
                                ).map((type) => (
                                    <DropdownMenuCheckboxItem
                                        key={type}
                                        checked={selectedTypes.includes(type)}
                                        onCheckedChange={(checked) => {
                                            setSelectedTypes(
                                                checked
                                                    ? [...selectedTypes, type]
                                                    : selectedTypes.filter(
                                                          (t) => t !== type
                                                      )
                                            );
                                        }}
                                    >
                                        {type}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px]">
                                        <Button
                                            variant="ghost"
                                            onClick={() => handleSort("name")}
                                        >
                                            Name{" "}
                                            {sortKey === "name" &&
                                                (sortOrder === "asc" ? (
                                                    <SortAsc className="ml-2 h-4 w-4" />
                                                ) : (
                                                    <SortDesc className="ml-2 h-4 w-4" />
                                                ))}
                                        </Button>
                                    </TableHead>
                                    <TableHead>Stage</TableHead>
                                    <TableHead>
                                        <Button
                                            variant="ghost"
                                            onClick={() => handleSort("amount")}
                                        >
                                            Amount{" "}
                                            {sortKey === "amount" &&
                                                (sortOrder === "asc" ? (
                                                    <SortAsc className="ml-2 h-4 w-4" />
                                                ) : (
                                                    <SortDesc className="ml-2 h-4 w-4" />
                                                ))}
                                        </Button>
                                    </TableHead>
                                    <TableHead>
                                        <Button
                                            variant="ghost"
                                            onClick={() => handleSort("equity")}
                                        >
                                            Equity{" "}
                                            {sortKey === "equity" &&
                                                (sortOrder === "asc" ? (
                                                    <SortAsc className="ml-2 h-4 w-4" />
                                                ) : (
                                                    <SortDesc className="ml-2 h-4 w-4" />
                                                ))}
                                        </Button>
                                    </TableHead>
                                    <TableHead>
                                        <Button
                                            variant="ghost"
                                            onClick={() => handleSort("date")}
                                        >
                                            Date{" "}
                                            {sortKey === "date" &&
                                                (sortOrder === "asc" ? (
                                                    <SortAsc className="ml-2 h-4 w-4" />
                                                ) : (
                                                    <SortDesc className="ml-2 h-4 w-4" />
                                                ))}
                                        </Button>
                                    </TableHead>
                                    <TableHead>Company Valuation</TableHead>
                                    <TableHead>Unrealized Return</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredInvestors.map((investor) => (
                                    <TableRow key={investor.name}>
                                        <TableCell className="font-medium">
                                            {investor.name}
                                        </TableCell>
                                        <TableCell>{investor.stage}</TableCell>
                                        <TableCell>
                                            ${investor.amount.toLocaleString()}
                                        </TableCell>
                                        <TableCell>
                                            {investor.equity}%
                                        </TableCell>
                                        <TableCell>
                                            {new Date(
                                                investor.date
                                            ).toLocaleDateString("en-GB")}
                                        </TableCell>
                                        <TableCell>
                                            $
                                            {investor.currentValuation.toLocaleString()}
                                        </TableCell>
                                        <TableCell
                                            className={cn([
                                                UnrealisedToPercentage(
                                                    investor.amount,
                                                    investor.unrealizedReturn
                                                ).charAt(0) !== "-" &&
                                                    "text-green-400",
                                                UnrealisedToPercentage(
                                                    investor.amount,
                                                    investor.unrealizedReturn
                                                ).charAt(0) === "-" &&
                                                    "text-red-400",
                                            ])}
                                        >
                                            {UnrealisedToPercentage(
                                                investor.amount,
                                                investor.unrealizedReturn
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <div className="flex justify-between">
                                            <div className="text-xs text-muted-foreground">
                                                Showing <strong>1-5</strong> of{" "}
                                                <strong>100</strong> results
                                            </div>
                                            <div className="flex bg-transparent">
                                                <ChevronLeft className="mr-2 h-5 w-5 text-slate-300" />
                                                <ChevronRight className="mr-2 h-5 w-5" />
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Investments;
