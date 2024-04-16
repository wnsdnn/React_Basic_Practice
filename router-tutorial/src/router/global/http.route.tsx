import { RouteVo } from "../../type/route";
import NotFound from "../../pages/NotFound";

const _notFound: RouteVo = {
    path: '*',
    element: <NotFound />,
}

const _httpRoute = {
    _notFound
} as const;

const _httpRoutes: readonly RouteVo[] = [
    _notFound,
] as const;

export {
    _httpRoute as httpRoute,
    _httpRoutes as httpRoutes,
}
