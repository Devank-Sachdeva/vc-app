import { StartupDetailsType } from "@/lib/startup-type";
import { create } from "zustand";

// Define the types for the startup details and the store's state

interface StartupStore {
    startupDetails: StartupDetailsType;
    setStartupDetails: (newDetails) => void;
}

// Create the Zustand store with types
const useStartupStore = create<StartupStore>((set) => ({
    startupDetails: {
        domain: "Sustainability & Environment",
        equity_structure: {
            "Founder-1": 25,
            "Founder-2": 50,
            "Investor": 18,
        },
        estimated_valuation: "699605707.2",
        last_round_type: "Series C",
        logo: "https://example.com/images/logo_50.png",
        market_position: 8,
        name: "Innovative Retail",
        pitch: "Pioneering Health is poised to disrupt its industry with innovative solutions and a strong team.",
        rating: 2,
        social_links: ["https://linkedin.com", "https://twitter.com"],
        startupid: 1,
        swot: [
            "Low competition",
            "High operational cost",
            "Expanding market",
            "New competitors",
        ],
        username: "user001",
        yearly_sales: 632015,
        b2b: false,
        burn_rate: "4646464.5454",
        funding_stage: "Series A",
        location: "USA",
        monthly_revenue: "6406771.347",
    },
    setStartupDetails: (newDetails) =>
        set({ startupDetails: newDetails.startup_details }),
}));

export default useStartupStore;
