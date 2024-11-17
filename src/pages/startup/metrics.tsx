import { MetricLineChart } from "@/components/profile/line-chart";

const chartData1 = [
    { year: "2021", y1: 186, y2: 80 },
    { year: "2022", y1: 305, y2: 200 },
    { year: "2023", y1: 237, y2: 120 },
    { year: "2024", y1: 73, y2: 190 },
];

const chartData2 = [
    { year: "2021", y1: 150, y2: 90 },
    { year: "2022", y1: 320, y2: 210 },
    { year: "2023", y1: 250, y2: 130 },
    { year: "2024", y1: 80, y2: 200 },
];

const Metrics = () => {
    return (
        <div className="grid grid-cols-2 gap-5 p-5">
            <MetricLineChart
                chartData={chartData1}
                label1="Revenue"
                label2="Profit"
                title="Revenue & Profit Trends"
                key={1}
            />
            <MetricLineChart
                chartData={chartData2}
                label1="Customer Count"
                label2="Growth Rate %"
                title="Growth Metrics"
                key={2}
            />
            <MetricLineChart
                chartData={chartData2}
                label1="LTV"
                label2="CAC"
                title="Unit Economics"
                key={3}
            />
            <MetricLineChart
                chartData={chartData2}
                label1="Revenue/Employee"
                label2="Cash Burn"
                title="Operating Metrics"
                key={4}
            />
        </div>
    );
};

export default Metrics;
