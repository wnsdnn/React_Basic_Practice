import { RouteStructure } from "../../type/route";
import Profile from "../../pages/Profile";

const profilePreivew: RouteStructure = {
    path: '/profiles/:username',
    prefix: '/profiles/:username',
    element: <Profile />,
} as const;

const profileRoute = {
    profilePreivew,
} as const;

const profileRoutes: readonly RouteStructure[] = [
    profilePreivew,
] as const;

export {
    profileRoute,
    profileRoutes,
}
