import { InvestorDetailsType } from '@/lib/investor-type';
import {create} from 'zustand';

interface InvestorStore {
    investorDetails: InvestorDetailsType;
    setInvestorDetails: (details: InvestorDetailsType) => void;
}

const useInvestorStore = create<InvestorStore>((set) => ({
    investorDetails: {
        country: "UK",
        description:
            "John Doe is experienced in domain-specific funding with a keen interest in scaling innovative startups.",
        domains: ["Real Estate & Property Tech", "Finance & FinTech"],
        investment_range: "100k$ - 200k$",
        investorid: 1,
        name: "John Doe",
        photo: "photo1.jpg",
        predicted_return: 1,
        pswd: "password1",
        total_investment: 10000000,
        type: "Firm",
        username: "user1@example.com",
    },
    setInvestorDetails: (details: InvestorDetailsType) => set({ investorDetails: details }),
}));



export default useInvestorStore;