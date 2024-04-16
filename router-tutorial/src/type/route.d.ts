import { ReactElement } from "react";

interface RouteVo {
    path: string;
    element: ReactElement;
    children?: RouteVo[];
}

export {
    RouteVo,
}
