import { Outlet, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Cart from "./Main/Cart/Cart";
import Shop from "./Main/Shopping/Shop";
import App from "../App";
import Redirect from "./Redirect";
import Item from "./Main/Item/Item";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Redirect />,
            errorElement: <Error/>
        },
        {
            path: '/home',
            element: <App />,
            errorElement: <Error/>
        },
        {
            path: '/cart',
            element: <Cart />,
            errorElement: <Error/>
        },
        {
            path: '/shop',
            element: <Shop />,
            errorElement: <Error/>
        },
        {
            path: '/shop/:id/:name',
            element: <Item />,
            errorElement: <Error/>
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}