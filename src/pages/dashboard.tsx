import { StartupTypeChart } from "@/components/dashboard/startup-type-chart";
import { StatCard } from "@/components/dashboard/stat-card";
import { RecentInvestmentCard } from "@/components/dashboard/recent-investment-card";

const stats = [
    {
        title: "Total valuation",
        amount: "250K",
        description: "+20.1% from last month",
    },
    {
        title: "Number of Companies",
        amount: "25",
        description: "Including all funding stages",
    },
    {
        title: "Average Investment Size",
        amount: "25K",
        description: "Based on current valuations",
    },
    {
        title: "Portfolio Return",
        amount: "15%",
        description: "Annualized return on investment",
    },
];
const Dashboard = () => {
    console.log();
    return (
        <main className="flex flex-1 flex-col gap-4 p-5">
            <div className="grid gap-8 grid-cols-4">
                {stats.map((e) => (
                    <StatCard
                        title={e.title}
                        amount={e.amount}
                        description={e.description}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="h-full ">
                    <StartupTypeChart />
                </div>
                <div>
                    <RecentInvestmentCard />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
