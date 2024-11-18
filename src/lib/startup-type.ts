export interface StartupDetailsType {
    b2b: boolean;
    burn_rate: string;
    domain: string;
    equity_structure: {
        "Founder-1": number;
        "Founder-2": number;
        "Investor": number
    };
    estimated_valuation: string;
    funding_stage: string;
    last_round_type: string;
    location: string;
    logo: string;
    market_position: number;
    monthly_revenue: string;
    name: string;
    pitch: string;
    rating: number;
    social_links: string[];
    startupid: number;
    swot: string[];
    username: string;
    yearly_sales: number;
}


export interface InvestedStartupsType {
    amount: number;
    b2b: boolean;
    burn_rate: string;
    date: string;
    domain: string;
    equity_structure: {
        [key: string]: number;
    };
    estimated_valuation: string;
    funding_stage: string;
    investmentid: number;
    investor: number;
    last_round_type: string;
    location: string;
    logo: string;
    market_position: number;
    monthly_revenue: string;
    name: string;
    pitch: string;
    pswd: string;
    rating: number;
    social_links: string[];
    startup: number;
    startupid: number;
    swot: string[];
    username: string;
    valuation: number;
    yearly_sales: number;
}