// import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";



const chartData = [
    { type: "Seed", count: 275, fill: "var(--color-seed)" },
    { type: "Series A", count: 200, fill: "var(--color-seriesA)" },
    { type: "Series B", count: 187, fill: "var(--color-seriesB)" },
    { type: "Later Stage", count: 173, fill: "var(--color-laterStage)" },
    { type: "Other", count: 90, fill: "var(--color-other)" },
];

const chartConfig = {
    count: {
        label: "Count",
    },
    seed: {
        label: "Seed",
        color: "hsl(var(--chart-1))",
    },
    seriesA: {
        label: "Series A",
        color: "hsl(var(--chart-2))",
    },
    seriesB: {
        label: "Series B",
        color: "hsl(var(--chart-3))",
    },
    laterStage: {
        label: "Later Stage",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function StartupTypeChart() {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-0">
                <CardTitle>Investment Stage Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[400px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart >
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            label
                            nameKey="type"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Displaying Investment Stage Distribution
                </div>
            </CardFooter>
        </Card>
    );
}
