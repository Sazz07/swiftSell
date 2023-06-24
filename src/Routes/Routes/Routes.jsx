import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/Main/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                
            }
        ]
    }
])