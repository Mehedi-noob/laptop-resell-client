import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashHome from "../../Pages/Dashboard/DashHome/DashHome";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:name',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.name}`);
                },
                element: <CategoryProducts></CategoryProducts>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <DashHome></DashHome>
            },
            {
                path: '/dashboard/myorders/:email',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/booking/${params.email}`);
                },
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allsellers',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/myproduct',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <MyProduct></MyProduct>
            }
        ]
    }
])

export default router;