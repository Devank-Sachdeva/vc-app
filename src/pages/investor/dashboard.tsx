import { StartupTypeChart } from "@/components/dashboard/startup-type-chart";
import { StatCard } from "@/components/dashboard/stat-card";
import {
    ArrowUpRight,
    Building2,
    DiamondPercent,
    DollarSign,
    Link,
    Table,
    Wallet2,
} from "lucide-react";
import useInvestorStore from "@/store/investor";
import { formatValuation } from "@/lib/utils";
import { useEffect, useState } from "react";
import { InvestedStartupsType } from "@/lib/startup-type";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { RecentInvestmentCard } from "@/components/dashboard/recent-investment-card";

const Dashboard = () => {
    const { investorDetails } = useInvestorStore();
    const [investments, setInvestments] = useState<InvestedStartupsType[]>([]);
    const [, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function fetchInvestors() {
            const response = await axios.post(
                "http://127.0.0.1:5000/invested-startups",
                {
                    investor_id: investorDetails.investorid,
                }
            );

            setInvestments(response.data.startups);
            setIsLoading(false);
        }

        fetchInvestors();
    }, []);

    function formatNumber(num: number): string {
        if (num >= 1000000) {
            return num / 1000000 + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + "K";
        } else {
            return num.toString();
        }
    }
    return (
        <div className="flex flex-1 flex-col gap-4 p-3">
            <div className="grid gap-8 grid-cols-4">
                <StatCard
                    title={"Total investment"}
                    amount={formatValuation(
                        investorDetails.total_investment.toString()
                    )}
                    description={"+20.1% from last month"}
                    key={1}
                    cardIcon={<Wallet2 className="h-6 w-6" />}
                />
                <StatCard
                    title={"Number of Companies"}
                    amount={investments.length.toString()}
                    description={"Including all funding stages"}
                    key={2}
                    cardIcon={<Building2 className="h-6 w-6" />}
                />
                <StatCard
                    title={"Average Investment Size"}
                    amount={investorDetails.investment_range}
                    description={"Based on current valuations"}
                    key={3}
                    cardIcon={<DollarSign className="h-6 w-6" />}
                />
                <StatCard
                    title={"Predicted Return"}
                    amount={investorDetails.predicted_return.toString() + " %"}
                    description={"Annualized return on investment"}
                    key={4}
                    cardIcon={<DiamondPercent className="h-6 w-6" />}
                />
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="h-full ">
                    <StartupTypeChart />
                </div>
                <div>
                    <RecentInvestmentCard investments={investments} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
