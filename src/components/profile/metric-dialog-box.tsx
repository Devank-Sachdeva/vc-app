import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import Metrics from "@/pages/startup/metrics";
import { TrendingUp } from "lucide-react";

export function MetricDialogBox() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="mt-2">
                    View Metrics
                    <TrendingUp className="w-5 h-5 ml-1" />
                </Button>
            </DialogTrigger>
            <DialogContent className="z-[999] min-w-[75%] m-5 max-h-[75%] overflow-y-auto">
                <Metrics />
            </DialogContent>    
        </Dialog>
    );
}
