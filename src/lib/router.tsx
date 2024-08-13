import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Auth from "@/pages/auth";
import PrivateRoutes from "@/lib/private-route";
import Dashboard from "@/pages/dashboard";
import Startup from "@/pages/startup";


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
                element: <Dashboard />
            },
            {
                path: "/startups",
                element: <Startup />
            }
        ]
    }
]);



export default router;
