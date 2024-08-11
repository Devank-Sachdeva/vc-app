import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./components/shared/header";

const PrivateRoutes = () => {
    const auth = document.cookie;
    return auth.includes("token=") ? (
        <>
            <Header />
            <div className="h-[calc(100%-30rem)]">
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoutes;
