import InvestorProfile from "@/components/profile/investor-profile";

function Profile() {
    return (
        <div className="flex flex-col h-screen overflow-y-scroll overflow-x-clip">
            <InvestorProfile />
        </div>
    );
}

export default Profile;