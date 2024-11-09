import { Navigate, Outlet } from "react-router-dom";
import { Header as IHeader } from "../pages/investor/header" ;
import { Header as SHeader } from "../pages/startup/header";

const PrivateRoutes = () => {
    const auth = document.cookie;
    return auth.includes("token=") ? (
        <>
            {auth.charAt(auth.length - 1) === '1' && <SHeader />}
            {auth.charAt(auth.length - 1) === '2' && <IHeader />}
            <div className="max-h-[calc(100vh-64px)] overflow-hidden">
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoutes;
