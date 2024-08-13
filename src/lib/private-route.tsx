import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/shared/header";

const PrivateRoutes = () => {
    const auth = document.cookie;
    return auth.includes("token=") ? (
        <>
            <Header />
            
            <div className="max-h-[calc(100vh-64px)] overflow-hidden">
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoutes;
