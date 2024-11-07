import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Auth from "@/pages/auth";
import PrivateRoutes from "@/lib/private-route";
import Dashboard from "@/pages/dashboard";
import Startup from "@/pages/startup";
import Profile from "@/pages/profile";
import Edit from "@/pages/edit-profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/startups",
                element: <Startup />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/edit",
                element: <Edit />,
            },
        ],
    },
]);



export default router;
