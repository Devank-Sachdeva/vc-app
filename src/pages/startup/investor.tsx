import InvestorProfile from "@/components/profile/investor-profile";

const Investor = () => {
    return (
        <div className="flex flex-col h-screen">
            <InvestorProfile isOwn={false} />
        </div>
    );
};

export default Investor;
