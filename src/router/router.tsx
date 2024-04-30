import Home from "../page/Home";
import { path } from "../constants/path";
import Index from "../page";
import Login from "../page/Login";
import Register from "../page/Register";
export const routes = [
    {
        path: path.INDEX,
        element: <Index />,
        layout: 'default',
        children: [
            {
                path: path.HOME,
                element: <Home />,
            },

        ]
    },
    {
        path: path.LOGIN,
        element: <Login />,
        layout: 'blank',
    }
    , {
        path: path.REGISTER,
        element: <Register />,
        layout: 'blank',

    }
];
