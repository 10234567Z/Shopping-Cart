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
            element: <Redirect />
        },
        {
            path: '/home',
            element: <App />
        },
        {
            path: '/cart',
            element: <Cart />
        },
        {
            path: '/shop',
            element: <Shop />
        },
        {
            path: '/shop/:id/:name',
            element: <Item />
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}