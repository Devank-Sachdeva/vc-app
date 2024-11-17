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
}

interface MetricLineChartProps {
    chartData: LineChartData[];
    title: string;
    label: string;
}

export function SingleMetricLineChart({
    chartData,
    title,
    label,
}: MetricLineChartProps) {
    const chartConfig = {
        y1: {
            label: label,
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
                                value={label}
                                angle={-90}
                                position={"insideLeft"}
                                offset={10}
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

                        <ChartLegend
                            payload={[
                                {
                                    value: label,
                                    type: "line",
                                    id: "ID01",
                                    color: "hsl(var(--chart-1))",
                                },
                            ]}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
