import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const investments = [
    {
        Name: "Super Company",
        amount: 10000000,
        valuation: 50000000,
    },
    {
        Name: "TechCorp",
        amount: 500000,
        valuation: 2500000,
    },
    {
        Name: "Green Innovations",
        amount: 3000000,
        valuation: 15000000,
    },
    {
        Name: "BioMed Solutions",
        amount: 8000000,
        valuation: 40000000,
    },
    {
        Name: "FutureTech",
        amount: 2000000,
        valuation: 10000000,
    },
];

function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000) + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + "K";
    } else {
        return num.toString();
    }
}

export function RecentInvestmentCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Investments</CardTitle>
                    <CardDescription>
                        Recent Investments
                    </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                    <Link to="#">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Company</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {investments.map((e) => {return (
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">
                                        {e.Name}
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        $ {formatNumber(e.valuation)}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    $ {formatNumber(e.amount)}
                                </TableCell>
                            </TableRow>
                        );})}
                        
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
