import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Auth() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    console.log(pathname);
    
    useEffect(()=> {
        if (pathname === "/auth" || pathname === "/auth/") {
            navigate("/auth/login");
        }
    })
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <Outlet />
        </div>
    );
}

export default Auth;
