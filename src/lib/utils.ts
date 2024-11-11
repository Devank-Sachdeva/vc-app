import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export enum FundingRound {
    PreSeed = "Pre Seed",
    Seed = "Seed",
    SeriesA = "Series A",
    SeriesB = "Series B",
    LaterStage = "Later Stage",
    Other = "Other",
}

export enum StartupTags {
    AI_ML = "AI/ML",
    Fintech = "Fintech",
    Healthcare = "Healthcare",
    ECommerce = "E-commerce",
    EdTech = "EdTech",
    Blockchain = "Blockchain",
    Cybersecurity = "Cybersecurity",
    CleanTech = "CleanTech",
    BioTech = "BioTech",
    AgriTech = "AgriTech",
    IoT = "IoT",
    AR_VR = "AR/VR",
    SpaceTech = "SpaceTech",
    Robotics = "Robotics",
    CloudComputing = "CloudComputing",
    HealthTech = "HealthTech",
    InsurTech = "InsurTech",
    PropTech = "PropTech",
    GameDev = "GameDev",
    FoodTech = "FoodTech",
    DeepTech = "DeepTech",
    Quantum = "Quantum",
    Web3 = "Web3",
    FiveG = "5G",
    Automotive = "Automotive",
    B2B = "B2B",
    B2C = "B2C",
    Marketing = "Marketing",
    SaaS = "SaaS",
    Productivity = "Productivity",
    Education = "Education",
    Security = "Security",
    Analytics = "Analytics",
}

export enum InvestorTypes {
    VentureCapitalist = "Venture capitalist",
    Bank = "Bank",
    Incubator = "Incubator",
    ConservativeInvestors = "Conservative investors",
    AngelInvestor = "Angel investor",
    InstitutionalInvestors = "Institutional investors",
    AggressiveInvestors = "Aggressive investors",
    PassiveInvestors = "Passive investors",
    PersonalInvestors = "Personal investors",
    P2PLending = "P2P lending",
    HedgeFund = "Hedge fund",
    Traders = "Traders",
}
