import { RouteStructure } from "../../type/route";
import Home from "../../pages/Home";

const homePreview: RouteStructure = {
    path: '/',
    prefix: '/',
    element: <Home />,
} as const;

const homeRoute = {
    homePrevice: homePreview,
} as const;

const homeRoutes: readonly RouteStructure[] = [
    homePreview,
] as const;

export {
    homeRoute,
    homeRoutes,
}
