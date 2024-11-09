import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import Auth from "@/pages/auth";
import PrivateRoutes from "@/lib/private-route";
import Dashboard from "@/pages/investor/dashboard";
import Startup from "@/pages/investor/startup";
import Profile from "@/pages/investor/profile";
import Edit from "@/pages/investor/edit-profile";
import { LoginCard } from "@/components/auth/login-card";
import RegisterCard from "@/components/auth/register-card";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth/login",
                element: <LoginCard />,
            },
            {
                path: "/auth/register",
                element: <RegisterCard />,
            },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "/investor",
                element: <Navigate to="/investor/dashboard" replace />,
            },
            {
                path: "/investor/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/investor/startups",
                element: <Startup />,
            },
            {
                path: "/investor/profile",
                element: <Profile />,
            },
            {
                path: "/investor/edit",
                element: <Edit />,
            },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "/startup",
                element: <Navigate to="/startup/dashboard" replace />,
            },
            {
                path: "/startup/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;
