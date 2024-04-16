import { RouteVo } from "../../type/route";
import Profile from "../../pages/Profile";

const profilePreivew: RouteVo = {
    path: '/profiles/:username',
    element: <Profile />,
} as const;

const profileRoute = {
    profilePreivew,
} as const;

const profileRoutes: readonly RouteVo[] = [
    profilePreivew,
] as const;

export {
    profileRoute,
    profileRoutes,
}
