import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/Main/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import PhoneSignin from "../../Pages/PhoneSignin/PhoneSignin";
import AllProducts from "../../Pages/Home/Products/AllProducts";

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
            },
            {
                path: '/products',
                element: <AllProducts />
            },
            {
                path: '/signin',
                element: <PhoneSignin/>
            },
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