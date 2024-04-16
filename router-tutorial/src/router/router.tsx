import { RouteStructure } from "../type/route";
import { homeRoutes } from "./home/home.route";
import { articleRoutes } from "./article/article.route";
import { httpRoutes } from "./global/http.route";
import { aboutRoutes } from "./about/about.route";
import { profileRoutes } from "./profile/profile";

function _createRouter(): RouteStructure[] {
    return [
        ...homeRoutes,
        ...profileRoutes,
        ...articleRoutes,
        ...aboutRoutes,
        ...httpRoutes,
    ];
}

export default _createRouter;
