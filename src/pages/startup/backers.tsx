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
import { useNavigate } from "react-router-dom";

const investors = [
    {
        name: "Acme Ventures",
        type: "Venture Capital",
        amount: 1000000,
        equity: 10,
        date: "2023-01-15",
        stage: "Series A",
        boardSeat: true,
    },
    {
        name: "John Doe",
        type: "Angel Investor",
        amount: 250000,
        equity: 2.5,
        date: "2023-03-20",
        stage: "Seed",
        boardSeat: false,
    },
    {
        name: "Tech Accelerator X",
        type: "Accelerator",
        amount: 150000,
        equity: 7,
        date: "2022-06-10",
        stage: "Pre-seed",
        boardSeat: false,
    },
    {
        name: "Future Fund",
        type: "Corporate Venture Capital",
        amount: 2000000,
        equity: 15,
        date: "2023-09-05",
        stage: "Series B",
        boardSeat: true,
    },
    {
        name: "Growth Partners LLC",
        type: "Private Equity",
        amount: 5000000,
        equity: 20,
        date: "2024-02-28",
        stage: "Series C",
        boardSeat: true,
    },
];

type SortKey = "name" | "amount" | "equity" | "date";

const Backers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [sortKey, setSortKey] = useState<SortKey>("date");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const navigate = useNavigate();

    const filteredInvestors = investors
        .filter((investor) => {
            const matchesSearch =
                investor.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                investor.type.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType =
                selectedTypes.length === 0 ||
                selectedTypes.includes(investor.type);
            return matchesSearch && matchesType;
        })
        .sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

    const totalInvestment = investors.reduce(
        (sum, investor) => sum + investor.amount,
        0
    );
    const totalEquity = investors.reduce(
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
                            Current Investors
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
                                Total Equity
                            </h2>
                            <p className="text-2xl font-bold">
                                {totalEquity.toFixed(2)}%
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h2 className="text-sm font-medium text-gray-500">
                                Number of Investors
                            </h2>
                            <p className="text-2xl font-bold">
                                {investors.length}
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h2 className="text-sm font-medium text-gray-500">
                                Latest Investment
                            </h2>
                            <p className="text-2xl font-bold">
                                {new Date(
                                    Math.max(
                                        ...investors.map((i) =>
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
                                    new Set(investors.map((i) => i.type))
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
                                    <TableHead>Type</TableHead>
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
                                    <TableHead>Stage</TableHead>
                                    <TableHead>Board Seat</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredInvestors.map((investor) => (
                                    <TableRow key={investor.name}>
                                        <TableCell className="font-medium">
                                            <p
                                                className="hover:underline hover:cursor-pointer"
                                                onClick={() =>
                                                    navigate(
                                                        `/startup/investor/${investor.name
                                                            .toLowerCase()
                                                            .replace(
                                                                / /g,
                                                                "-"
                                                            )}`
                                                    )
                                                }
                                            >
                                                {investor.name}
                                            </p>
                                        </TableCell>
                                        <TableCell>{investor.type}</TableCell>
                                        <TableCell>
                                            ${investor.amount.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="">
                                            {investor.equity}%
                                        </TableCell>
                                        <TableCell>
                                            {new Date(
                                                investor.date
                                            ).toLocaleDateString("en-GB")}
                                        </TableCell>
                                        <TableCell>{investor.stage}</TableCell>
                                        <TableCell>
                                            {investor.boardSeat ? "Yes" : "No"}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <div className="flex justify-between">
                                            <div className="text-xs text-muted-foreground">
                                                Showing{" "}
                                                <strong>
                                                    1-{filteredInvestors.length}
                                                </strong>{" "}
                                                of{" "}
                                                <strong>
                                                    {filteredInvestors.length}
                                                </strong>{" "}
                                                results
                                            </div>
                                            <div className="flex bg-transparent">
                                                <ChevronLeft className="mr-2 h-5 w-5 text-slate-300" />
                                                <ChevronRight className="mr-2 h-5 w-5 text-slate-300" />
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

export default Backers;
