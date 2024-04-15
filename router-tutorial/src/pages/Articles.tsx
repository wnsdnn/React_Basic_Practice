import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ArticleItem = ({ id } : { id: number }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <li>
            {/* NavLink - 해당 to에 적힌 링크와 현재 값이 맞는지 체크 */}
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                게시글{id}
            </NavLink>
        </li>
    );
};

// 리펙토링 진행
const Articles = () => {
    return (
        <div>
            {/* Outlet에 Routes에 설정한 하위 컴포넌트가 대체됨 */}
            <Outlet/>
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
}

export default Articles;
