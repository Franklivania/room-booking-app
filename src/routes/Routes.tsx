import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function PageRoutes() {
    const routes = createBrowserRouter([
        {
            path: '/'
        }
    ])

    return <RouterProvider router={routes} />
}