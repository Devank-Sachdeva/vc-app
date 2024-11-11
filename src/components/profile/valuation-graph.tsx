import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
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
    { point: "202", desktop: 186 },
    { point: "February", desktop: 305 },
    { point: "March", desktop: 237 },
    { point: "April", desktop: 73 },
    { point: "May", desktop: 209 },
    { point: "June", desktop: 214 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

export function ValuationGraph() {
    return (
        <Card className="max-h-[500px]">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Predicted Valuation Over Time
                </CardTitle>
                <CardDescription>
                    Showing the valuation of startup over time
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="max-h-[300px] w-full"
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="point"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, value.length - 1)}
                            
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <defs>
                            <linearGradient
                                id="fillDesktop"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            
                        </defs>
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="url(#fillDesktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Valuation up by 5.2% this quarter{" "}
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
