/// create router

import { createBrowserRouter } from "react-router-dom";
import { routes } from "./router";
import DefaultLayout from "../components/layout/DefaultLayout";
import BlankLayout from "../components/layout/BlankLayout";

const finalRouter = routes.map(route => {
    return {
        ...route,
        element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>
    }
})
export const router = createBrowserRouter(finalRouter)