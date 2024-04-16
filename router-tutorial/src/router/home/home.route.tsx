import { RouteVo } from "../../type/route";
import Home from "../../pages/Home";

const homePreview: RouteVo = {
    path: '/',
    element: <Home />,
} as const;

const homeRoute = {
    homePrevice: homePreview,
} as const;

const homeRoutes: readonly RouteVo[] = [
    homePreview,
] as const;

export {
    homeRoute,
    homeRoutes,
}
