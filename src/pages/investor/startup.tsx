import StartupProfile from "@/components/profile/startup-profile";

const Startup = () => {
    return (
        <div className="flex flex-col h-screen">
            <StartupProfile isOwn={false} />
        </div>
    );
};

export default Startup;
