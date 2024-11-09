import { StartupTypeChart } from "@/components/dashboard/startup-type-chart";
import { StatCard } from "@/components/dashboard/stat-card";
import { RecentInvestmentCard } from "@/components/dashboard/recent-investment-card";
import { Building2, DiamondPercent, DollarSign, Wallet2 } from "lucide-react";


const Dashboard = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-3">
            <div className="grid gap-8 grid-cols-4">
                <StatCard
                    title={"Total investment"}
                    amount={"$250K"}
                    description={"+20.1% from last month"}
                    key={1}
                    cardIcon={<Wallet2 className="h-6 w-6" />}
                />
                <StatCard
                    title={"Number of Companies"}
                    amount={"25"}
                    description={"Including all funding stages"}
                    key={2}
                    cardIcon={<Building2 className="h-6 w-6" />}
                />
                <StatCard
                    title={"Average Investment Size"}
                    amount={"$25K"}
                    description={"Based on current valuations"}
                    key={3}
                    cardIcon={<DollarSign className="h-6 w-6" />}
                />
                <StatCard
                    title={"Predicted Return"}
                    amount={"15%"}
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
                    <RecentInvestmentCard />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
