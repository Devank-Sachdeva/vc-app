"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Users } from "lucide-react";
const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "FirefoxFirefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function EquityStructure() {
    return (
        <Card className="flex flex-col">
            <CardHeader className=" pb-0">
                <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Equity Structure
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0 pr-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px] [&_.recharts-pie-label-text]:fill-foreground w-full"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            label
                            nameKey="browser"
                        />
                        <ChartLegend
                            content={<ChartLegendContent />}
                            layout="vertical"
                            verticalAlign="top"
                            align="right"
                            wrapperStyle={{
                                minHeight: "100%",
                                minWidth: "125px",
                                fontSize: "1rem",
                                
                                marginRight: "3rem",
                                maxWidth: "180px",
                                overflow: "clip",
                                display: "flex",
                                flexDirection: "column", 
                                justifyContent: "center",
                                
                                
                                
                            }}
                            
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

// export function Component() {
//     return (
//         <Card className="flex flex-col">
//             <CardHeader className="items-center pb-0">
//                 <CardTitle>Pie Chart - Label</CardTitle>
//                 <CardDescription>January - June 2024</CardDescription>
//             </CardHeader>
//             <CardContent className="flex-1 pb-0">
//                 <ChartContainer
//                     config={chartConfig}
//                     className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
//                 >
//                     <PieChart>
//                         <ChartTooltip
//                             content={<ChartTooltipContent hideLabel />}
//                         />
//                         <Pie
//                             data={chartData}
//                             dataKey="visitors"
//                             label
//                             nameKey="browser"
//                         />
//                     </PieChart>
//                 </ChartContainer>
//             </CardContent>
//             <CardFooter className="flex-col gap-2 text-sm">
//                 <div className="flex items-center gap-2 font-medium leading-none">
//                     Trending up by 5.2% this month{" "}
//                     <TrendingUp className="h-4 w-4" />
//                 </div>
//                 <div className="leading-none text-muted-foreground">
//                     Showing total visitors for the last 6 months
//                 </div>
//             </CardFooter>
//         </Card>
//     );
// }
