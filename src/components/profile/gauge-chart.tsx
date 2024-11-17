import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GaugeComponent } from "react-gauge-component";

const GaugeChart = ({value} : {value : number}) => {
    function description(value: number) {
        if (value < 4) return "Health score is critically low, signaling significant risks and challenges.";
        else if (value < 7) return "Health score shows moderate potential but needs strategic improvements.";
        else return "Health score is strong, indicating promising performance and stability";
    }
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-center">
                    Health Score
                </CardTitle>
            </CardHeader>
            <CardContent className="block">
                <GaugeComponent
                    arc={{
                        subArcs: [
                            {
                                limit: 1,
                                color: "#EA4228",
                                showTick: true,
                            },
                            {
                                limit: 4,
                                color: "#F58B19",
                                showTick: true,
                            },
                            {
                                limit: 7,
                                color: "#F5CD19",
                                showTick: true,
                            },
                            {
                                limit: 10,
                                color: "#5BE12C",
                                showTick: true,
                            },
                        ],
                    }}
                    labels={{
                        valueLabel: {
                            style: { fontSize: 50, color: "#000", fill: "#000", textShadow: "0px 0px 10px #fff" },
                        },
                        tickLabels: {
                            type: "outer",
                            ticks: [
                                { value: 1 },
                                { value: 2 },
                                { value: 3 },
                                { value: 4 },
                                { value: 5 },
                                { value: 6 },
                                { value: 7 },
                                { value: 8 },
                                { value: 9 },
                                { value: 10 },
                            ],
                        },
                    }}
                    minValue={1}
                    maxValue={10}
                    value={value}
                />
                <div className="text-center">
                    {description(value)}
                </div>
            </CardContent>
        </Card>
    );
};

export default GaugeChart;
