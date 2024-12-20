import { useEffect, useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Filter,
    Search,
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
import { formatValuation, StartupTags } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { InvestorDetailsType } from "@/lib/investor-type";
import useUserStore from "@/store/id";
import axios from "axios";
import { StartupDetailsType } from "@/lib/startup-type";

const startups = [
    {
        name: "Startup 1",
        sales: 100000,
        last_round_valuation: 1000000,
        funding_round: "Seed",
        tags: ["AI", "Fintech", "Healthcare", "Analytics"],
    },
    {
        name: "Startup 2",
        sales: 200000,
        last_round_valuation: 2000000,
        funding_round: "Series A",
        tags: ["AI", "Fintech", "Healthcare", "Analytics"],
    },
    {
        name: "Startup 3",
        sales: 300000,
        last_round_valuation: 3000000,
        funding_round: "Series B",
        tags: ["Marketing", "SaaS", "Productivity", "Education", "Security"],
    },
];

const Startups = () => {
    const { id } = useUserStore();
    

    const [startups, setStartups] = useState<StartupDetailsType[]>([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        async function current() {
            await axios
                .post("http://localhost:5000/recommend-startups", {
                    investor_id: id,
                })
                .then((res) => {
                    console.log(res.data);
                    setStartups(res.data.startups);
                    setLoading(false);
                });
        }
        current();
    },[id]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const navigate = useNavigate();

    const filteredStartups = startups.filter((startup) => {
        const matchesSearch = startup.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        //     startup.tags.some((domain) =>
        //         domain.toLowerCase().includes(searchTerm.toLowerCase())
        //     );
        // const matchesType =
        //     selectedTypes.length === 0 ||
        //     selectedTypes.includes(startup.funding_round);
        return matchesSearch;
    });

    return (
        <div className="flex flex-col overflow-y-auto">
            <main className="flex-1 p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-3xl font-bold">Startups</div>
                    <div className="text-base text-muted-foreground mb-6">
                        Discover High-Potential Startups
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                className="pl-8"
                                placeholder="Search startups or domains..."
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
                            <DropdownMenuContent
                                align="end"
                                className="w-56 overflow-y-auto max-h-[300px]"
                            >
                                <DropdownMenuLabel>
                                    Startup Type
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {Object.values(StartupTags).map((type) => (
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
                                    <TableHead>Yearly Sales</TableHead>
                                    <TableHead>Last Round Valuation</TableHead>
                                    <TableHead>Last Round Type</TableHead>
                                    <TableHead>Domains</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredStartups.map((startup) => (
                                    <TableRow
                                        key={startup.name + Math.random()}
                                        className="cursor-pointer"
                                        onClick={() =>
                                            navigate(
                                                `/investor/startup/${startup.startupid}`
                                            )
                                        }
                                    >
                                        <TableCell className="font-medium">
                                            {startup.name}
                                        </TableCell>
                                        <TableCell>
                                            $
                                            {startup.yearly_sales.toLocaleString()}
                                        </TableCell>
                                        <TableCell>
                                            $
                                            {formatValuation(startup.estimated_valuation.toLocaleString())}
                                        </TableCell>
                                        <TableCell>
                                            {startup.funding_stage}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-1">
                                                <span
                                                    key={startup.domain}
                                                    className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                                                >
                                                    {startup.domain}
                                                </span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <div className="flex justify-between">
                                            <div className="text-xs text-muted-foreground">
                                                Showing{" "}
                                                <strong>
                                                    1-{filteredStartups.length}
                                                </strong>{" "}
                                                of{" "}
                                                <strong>
                                                    {filteredStartups.length}
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

export default Startups;
