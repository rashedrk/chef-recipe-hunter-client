import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";

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
                path: '/chef/:id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`http://localhost:3000/chef/${params.id}`)
            }
        ]
    }
])

export default router;