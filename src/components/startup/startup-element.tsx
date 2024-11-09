import { TableRow, TableCell } from "../ui/table";
import { FundingRound } from "@/lib/utils";

interface StartupListTypes {
    name: string;
    sales: string;
    last_round_valuation: string;
    funding_round: string;
    tags: string[];
}

export const StartupList = ({
    name,
    sales,
    last_round_valuation,
    funding_round,
    tags,
}: StartupListTypes) => {
    return (
        <TableRow className="grid grid-cols-12 text-center">
            <TableCell className="font-medium col-span-2">{name}</TableCell>
            <TableCell className="col-span-2">${sales}</TableCell>
            <TableCell className="hidden md:table-cell col-span-2">
                ${last_round_valuation}
            </TableCell>
            <TableCell className="hidden md:table-cell col-span-2">
                {FundingRound[funding_round as keyof typeof FundingRound]}
            </TableCell>
            <TableCell className="flex justify-center col-span-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="p-1 rounded border-spacing-3 m-1 border bg-slate-200"
                    >
                        {tag}
                    </span>
                ))}
            </TableCell>
        </TableRow>
    );
};
