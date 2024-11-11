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
    { holder: "janeDoe", equity: 30, fill: "var(--color-janeDoe)" },
    { holder: "johnSmith", equity: 30, fill: "var(--color-johnSmith)" },
    { holder: "acmeVentures", equity: 15, fill: "var(--color-acmeVentures)" },
    {
        holder: "techAcceleratorX",
        equity: 5,
        fill: "var(--color-techAcceleratorX)",
    },
    {
        holder: "angelInvestorNetwork",
        equity: 10,
        fill: "var(--color-angelInvestorNetwork)",
    },
];

const chartConfig = {
    equity: {
        label: "equity",
    },
    janeDoe: {
        label: "Jane Doe",
        color: "hsl(var(--chart-1))",
    },
    johnSmith: {
        label: "John Smith",
        color: "hsl(var(--chart-2))",
    },
    acmeVentures: {
        label: "Acme Ventures",
        color: "hsl(var(--chart-3))",
    },
    techAcceleratorX: {
        label: "Tech Accelerator X",
        color: "hsl(var(--chart-4))",
    },
    angelInvestorNetwork: {
        label: "Angel Investor Network",
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
                            dataKey="equity"
                            label
                            nameKey="holder"
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
//                             dataKey="equity"
//                             label
//                             nameKey="holder"
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
//                     Showing total equity for the last 6 months
//                 </div>
//             </CardFooter>
//         </Card>
//     );
// }
