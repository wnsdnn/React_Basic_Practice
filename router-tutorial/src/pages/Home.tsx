import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>이곳은 Home이에요. 가장 먼저 보여지는 페이지죠.</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/junwoo">junwoo의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
                <li>
                    <Link to="/mypage">마이페이지</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
