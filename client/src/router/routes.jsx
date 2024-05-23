import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register"

const routes = createBrowserRouter([
    {
        path: "/",
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }

        ]
    }
])

export default routes