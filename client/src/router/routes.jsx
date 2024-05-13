import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

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
            }
        ]
    }
])

export default routes