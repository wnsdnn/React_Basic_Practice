import { RouteVo } from "../../type/route";
import Articles from "../../pages/Articles";
import Article from "../../pages/Article";

// 해당 Route는 "/articles" 주소가 앞에 있을때만 작동해야하기 때문에
// articleListPreview의 children으로만 선언되어야 한다.
const articlePreview: RouteVo = {
    path: ':id',
    element: <Article />,
} as const;

const articleListPreview: RouteVo = {
    path: '/articles',
    element: <Articles />,
    children: [articlePreview],
};

const articleRoute = {
    articleListPreview,
} as const;

const articleRoutes: readonly RouteVo[]= [
    articleListPreview,
] as const;

export {
    articleRoute,
    articleRoutes,
}
