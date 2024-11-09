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
import SDashboard from "@/pages/startup/dashboard";
import Investors from "@/pages/startup/investors";
import Backers from "@/pages/startup/backers";
import Investments from "@/pages/investor/investments";

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
                path: "/investor/investments",
                element: <Investments />,
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
                element: <SDashboard />,
            },
            {
                path: "/startup/investors",
                element: <Investors />,
            },
            {
                path: "/startup/backers",
                element: <Backers />,
            },
        ],
    },
]);

export default router;
