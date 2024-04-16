import { RouteStructure } from "../../type/route";
import NotFound from "../../pages/NotFound";

const _notFound: RouteStructure = {
    path: '*',
    prefix: '*',
    element: <NotFound />,
}

const _httpRoute = {
    _notFound
} as const;

const _httpRoutes: readonly RouteStructure[] = [
    _notFound,
] as const;

export {
    _httpRoute as httpRoute,
    _httpRoutes as httpRoutes,
}
