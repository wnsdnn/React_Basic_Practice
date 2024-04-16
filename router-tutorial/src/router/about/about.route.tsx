import { RouteVo } from "../../type/route";
import About from "../../pages/About";

const aboutPreivew: RouteVo = {
    path: '/about',
    element: <About />,
} as const;

const aboutRoute = {
    aboutPreivew,
} as const;

const aboutRoutes: readonly RouteVo[] = [
    aboutPreivew,
] as const;

export {
    aboutRoute,
    aboutRoutes,
}
