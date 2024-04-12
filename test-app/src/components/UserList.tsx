import React from "react";

type UserVO = {
    id: number;

    username: string;

    email: string;
}

function User({ user }: { user: UserVO }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users: UserVO[] = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ];

    return (
        <div>
            {/* key값을 넣어줘야지 재렌더링시 효율적으로 렌더링할 수 있음*/}
            {users.map((user: UserVO) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList;
