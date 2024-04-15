import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <div>
            {/* Outlet에 Routes에 설정한 하위 컴포넌트가 대체됨 */}
            <Outlet/>
            <ul>
                <li>
                    {/* NavLink - 해당 to에 적힌 링크와 현재 값이 맞는지 체크 */}
                    <NavLink
                        to="/articles/1"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        게시글1
                    </NavLink>
                    {/*<Link to="/articles/1">게시글 1</Link>*/}
                </li>
                <li>
                    <NavLink
                        to="/articles/2"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        게시글2
                    </NavLink>
                    {/*<Link to="/articles/2">게시글 1</Link>*/}
                </li>
                <li>
                    <NavLink
                        to="/articles/3"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        게시글3
                    </NavLink>
                    {/*<Link to="/articles/3">게시글 3</Link>*/}
                </li>
            </ul>
        </div>
    );
}

export default Articles;
