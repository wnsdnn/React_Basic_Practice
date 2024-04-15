import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
    return (
        <div>
            {/* Outlet에 Routes에 설정한 하위 컴포넌트가 대체됨 */}
            <Outlet/>
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Articles;
