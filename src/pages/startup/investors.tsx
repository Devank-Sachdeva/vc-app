"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";

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

const investors = [
    {
        name: "TechFund Capital",
        type: "Venture Capital",
        investmentRange: "$1M - $5M",
        domains: ["AI", "SaaS", "Fintech"],
        location: "San Francisco, CA",
    },
    {
        name: "Innovation Partners",
        type: "Angel Group",
        investmentRange: "$250K - $2M",
        domains: ["Enterprise Software", "IoT", "Cybersecurity"],
        location: "New York, NY",
    },
    {
        name: "Global Ventures X",
        type: "Venture Capital",
        investmentRange: "$500K - $10M",
        domains: ["B2B Tech", "Healthtech", "Clean Energy"],
        location: "London, UK",
    },
    {
        name: "Future Fund",
        type: "Corporate Venture Capital",
        investmentRange: "$2M - $20M",
        domains: ["AI", "Robotics", "Quantum Computing"],
        location: "Tokyo, Japan",
    },
    {
        name: "Seed Accelerator Pro",
        type: "Accelerator",
        investmentRange: "$50K - $200K",
        domains: ["Mobile Apps", "E-commerce", "EdTech"],
        location: "Austin, TX",
    },
    {
        name: "TechFund Capital",
        type: "Venture Capital",
        investmentRange: "$1M - $5M",
        domains: ["AI", "SaaS", "Fintech"],
        location: "San Francisco, CA",
    },
    {
        name: "Innovation Partners",
        type: "Angel Group",
        investmentRange: "$250K - $2M",
        domains: ["Enterprise Software", "IoT", "Cybersecurity"],
        location: "New York, NY",
    },
    {
        name: "Global Ventures X",
        type: "Venture Capital",
        investmentRange: "$500K - $10M",
        domains: ["B2B Tech", "Healthtech", "Clean Energy"],
        location: "London, UK",
    },
    {
        name: "Future Fund",
        type: "Corporate Venture Capital",
        investmentRange: "$2M - $20M",
        domains: ["AI", "Robotics", "Quantum Computing"],
        location: "Tokyo, Japan",
    },
    {
        name: "Seed Accelerator Pro679",
        type: "Accelerator",
        investmentRange: "$50K - $200K",
        domains: ["Mobile Apps", "E-commerce", "EdTech"],
        location: "Austin, TX",
    },
];

export default function Investors() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const filteredInvestors = investors.filter((investor) => {
        const matchesSearch =
            investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            investor.domains.some((domain) =>
                domain.toLowerCase().includes(searchTerm.toLowerCase())
            );
        const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(investor.type);
        return matchesSearch && matchesType;
    });

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-3xl font-bold">
                        Recommended Investors
                    </div>
                    <div className="text-base text-muted-foreground mb-6">
                        Build Success with the Right Investors
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                className="pl-8"
                                placeholder="Search investors or domains..."
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
                                {[
                                    "Venture Capital",
                                    "Angel Group",
                                    "Corporate Venture Capital",
                                    "Accelerator",
                                ].map((type) => (
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
                                    <TableHead className="w-[250px]">
                                        Name
                                    </TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Investment Range</TableHead>
                                    <TableHead>Domains</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredInvestors.map((investor) => (
                                    <TableRow key={investor.name}>
                                        <TableCell className="font-medium">
                                            {investor.name}
                                        </TableCell>
                                        <TableCell>{investor.type}</TableCell>
                                        <TableCell>
                                            {investor.investmentRange}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-1">
                                                {investor.domains.map(
                                                    (domain) => (
                                                        <span
                                                            key={domain}
                                                            className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                                                        >
                                                            {domain}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <div className="flex justify-between">
                                            <div className="text-xs text-muted-foreground">
                                                Showing <strong>1-10</strong> of{" "}
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
}
