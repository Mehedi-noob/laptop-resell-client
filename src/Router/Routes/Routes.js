import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashHome from "../../Pages/Dashboard/DashHome/DashHome";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import ErrorRoute from "./ErrorRoute/ErrorRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:name',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.name}`);
                },
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorRoute></ErrorRoute>,

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
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allsellers',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/myproduct',
                // loader: ({ params }) => {
                //     return fetch(`http://localhost:5000/booking/${params.email}`);
                // },
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/bookings/${params.id}`);
                },
                element: <Payment></Payment>
            }
        ]
    }
    
])

export default router;