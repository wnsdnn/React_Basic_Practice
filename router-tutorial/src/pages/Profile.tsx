import React from "react";
import { useParams } from "react-router-dom";

type UserVo = {
    name: string;
    description: string;
}

const data: { [key: string]: object } = {
    junwoo: {
        name: '여준우',
        description: '리액트를 처음 배워보는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공',
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username ?? 'junwoo'] as UserVo;

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
}

export default Profile;
