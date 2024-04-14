import React from "react";
import { UserVO } from "../types/global";

function User({ user }: { user: UserVO }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(props : any) {
    return (
        <div>
            {/* key값을 넣어줘야지 재렌더링시 효율적으로 렌더링할 수 있음*/}
            {props.users.map((user: UserVO) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList;
