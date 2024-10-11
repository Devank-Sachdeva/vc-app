import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardTypes {
    title: string;
    amount: string;
    description: string;
    cardIcon: ReactNode;

}

export function StatCard({ title, amount, description, cardIcon }: StatCardTypes) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {cardIcon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{amount}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
