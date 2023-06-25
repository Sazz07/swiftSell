import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/Main/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import PhoneSignin from "../../Pages/PhoneSignin/PhoneSignin";
import AllProducts from "../../Pages/Home/Products/AllProducts";
import ProductDetails from "../../Pages/Home/Products/ProductDetails";
import Carts from "../../Pages/Carts/Carts";
import ProductList from "../../Pages/Dashboard/ProductList/ProductList";
import CustomerList from "../../Pages/Dashboard/CustomerList.jsx/CustomerList";

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
                element: <PhoneSignin />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://e-commerce-task-server-mu.vercel.app/products/${params.id}`)
            },
            {
                path: '/carts',
                element: <Carts />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/productlist',
                element: <ProductList/>
            },
            {
                path: '/dashboard/customerlist',
                element: <CustomerList/>
            },
        ]
    }
])