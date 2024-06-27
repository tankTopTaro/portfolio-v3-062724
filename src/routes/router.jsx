import { createBrowserRouter, Navigate } from "react-router-dom";
import Work from "../pages/Work";
import About from "../pages/About"
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to='/work' />
            },
            {
                path: '/work',
                element: <Work />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
])

export default router