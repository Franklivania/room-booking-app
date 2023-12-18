import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export default function PageRoutes() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage />
        }
    ])

    return <RouterProvider router={routes} />
}