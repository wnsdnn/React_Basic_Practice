import { ReactElement } from "react";

interface RouteStructure {
    path: string;
    prefix: string;
    element: ReactElement;
    children?: RouteStructure[];
}

export {
    RouteStructure,
}
