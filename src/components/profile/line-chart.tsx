import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";

interface LineChartData {
    year: string;
    y1: number;
    y2: number;
}

interface MetricLineChartProps {
    chartData: LineChartData[];
    title: string;
    label1: string;
    label2: string;
}

export function MetricLineChart({
    chartData,
    title,
    label1,
    label2
}: MetricLineChartProps) {
    const chartConfig = {
        y1: {
            label: label1,
        },
        y2: {
            label: label2,
        },
    } satisfies ChartConfig;

    return (
        <Card className="p-0 m-0">
            <CardHeader className="text-center">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -5,
                            right: 12,
                        }}
                    >
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis
                            yAxisId="y1"
                            dataKey="y1"
                            orientation="left"
                            axisLine={false}
                            tickLine={false}
                            domain={["auto", "auto"]}
                            tickMargin={8}
                        >
                            <Label
                                value={label1}
                                angle={-90}
                                position={"insideLeft"}
                                offset={10}
                            />
                        </YAxis>
                        <YAxis
                            yAxisId="y2"
                            dataKey="y2"
                            orientation="right"
                            domain={["auto", "auto"]}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={20}
                        >
                            <Label
                                value={label2}
                                angle={-90}
                                position={"right"}
                                offset={0}
                            />
                        </YAxis>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <CartesianGrid strokeDasharray="5 5" />
                        <Line
                            dataKey="y1"
                            yAxisId="y1"
                            type="linear"
                            stroke="hsl(var(--chart-1))"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="y2"
                            yAxisId="y2"
                            type="linear"
                            stroke="hsl(var(--chart-2))"
                            strokeWidth={2}
                            dot={false}
                        />
                        <ChartLegend
                        startOffset={20}
                            payload={[
                                {
                                    value: label1,
                                    type: "line",
                                    id: "ID01",
                                    color: "hsl(var(--chart-1))",
                                },
                                {
                                    value: label2,
                                    type: "line",
                                    id: "ID02",
                                    color: "hsl(var(--chart-2))",
                                },
                            ]}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
