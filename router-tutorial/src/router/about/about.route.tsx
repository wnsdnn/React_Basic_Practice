import { RouteStructure } from "../../type/route";
import About from "../../pages/About";

const aboutPreivew: RouteStructure = {
    path: '/about',
    prefix: '/about',
    element: <About />,
} as const;

const aboutRoute = {
    aboutPreivew,
} as const;

const aboutRoutes: readonly RouteStructure[] = [
    aboutPreivew,
] as const;

export {
    aboutRoute,
    aboutRoutes,
}
