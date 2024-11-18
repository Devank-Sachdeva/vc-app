export interface InvestorDetailsType {
    country: string;
    description: string;
    domains: string[];
    investment_range: string;
    investorid: number;
    name: string;
    photo: string;
    predicted_return: number;
    total_investment: number;
    type: string;
    username: string;
}

export interface InvestmentDetailsType {
    amount: number;
    country: string;
    date: string;
    description: string;
    domains: string[];
    investment_range: string;
    investmentid: number;
    investor: number;
    investorid: number;
    name: string;
    photo: string;
    predicted_return: number;
    pswd: string;
    startup: number;
    total_investment: number;
    type: string;
    username: string;
    valuation: number;
}

