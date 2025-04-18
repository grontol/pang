import { RouterConfig } from "@pang/router.js";
import { Layout } from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";

export const routes: RouterConfig[] = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
            },
            {
                path: 'about',
                component: About,
            }
        ]
    }
]