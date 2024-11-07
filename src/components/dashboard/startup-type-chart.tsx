// import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";
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
    { browser: "seed", visitors: 275, fill: "var(--color-seed)" },
    { browser: "seriesA", visitors: 200, fill: "var(--color-seriesA)" },
    { browser: "seriesB", visitors: 187, fill: "var(--color-seriesB)" },
    { browser: "laterStage", visitors: 173, fill: "var(--color-laterStage)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
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
                    className="mx-auto aspect-square max-h-[400px]"
                >
                    <PieChart>
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    nameKey="visitors"
                                    hideLabel
                                />
                            }
                        />
                        <Pie data={chartData} dataKey="visitors">
                            <LabelList
                                dataKey="browser"
                                className="fill-background text-white"
                                stroke="none"
                                fontSize={12}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
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
