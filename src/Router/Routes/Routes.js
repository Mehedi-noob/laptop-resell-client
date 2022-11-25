import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashHome from "../../Pages/Dashboard/DashHome/DashHome";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
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
            }
        ]
    }
])

export default router;