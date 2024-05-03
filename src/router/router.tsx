import { path } from "../constants/path";
import Index from "../page";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import NotFound from "../page/error";
export const routes = [
    {
        path: path.INDEX,
        element: <Index />,
        layout: "default",
        children: [
            {
                path: path.HOME,
                element: <Home />,
            },
        ],
    },
    {
        path: path.LOGIN,
        element: <Login />,
        layout: "blank",
    },
    {
        path: path.REGISTER,
        element: <Register />,
        layout: "blank",
    },
    {
        path: path.NOT_FOUND,
        element: <NotFound />,
        layout: "blank",
    },
];
