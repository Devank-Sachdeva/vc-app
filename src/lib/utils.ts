import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export enum FundingRound {
    Seed = "Seed",
    SeriesA = "Series A",
    SeriesB = "Series B",
    LaterStage = "Later Stage",
    Other = "Other",
}

export enum StartupTags {
    B2B = "B2B",
    B2C = "B2C",
    AI = "AI",
    Fintech = "Fintech",
    Healthcare = "Healthcare",
    Analytics = "Analytics",
    Marketing = "Marketing",
    SaaS = "SaaS",
    Productivity = "Productivity",
    Education = "Education",
    Security = "Security",
    Logistics = "Logistics",
    Retail = "Retail",
    HR = "HR",
    Legal = "Legal",
    Consumer = "Consumer",
    Industrial = "Industrial",
    Infrastructure = "Infrastructure",
    Design = "Design",
    Engineering = "Engineering",
    Development = "Development",
    Sales = "Sales",
    Government = "Government",
    Construction = "Construction",
    Operations = "Operations",
    Research = "Research",
}
