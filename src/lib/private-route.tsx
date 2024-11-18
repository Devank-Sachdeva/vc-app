import { Navigate, Outlet } from "react-router-dom";
import { Header as IHeader } from "../pages/investor/header";
import { Header as SHeader } from "../pages/startup/header";
import useUserStore from "@/store/id";

const PrivateRoutes = () => {
    const { user } = useUserStore();

    return user !== null ? (
        <>
            {user === "startup" && <SHeader />}
            {user === "investor" && <IHeader />}
            <div className="max-h-[calc(100vh-64px)]">
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoutes;
