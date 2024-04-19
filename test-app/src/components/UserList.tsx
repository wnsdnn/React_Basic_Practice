import React from "react";
import { onRemoveType, UserVO } from "../types/global";

function User({ user, onRemove }: { user: UserVO, onRemove: onRemoveType }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove } : { users: UserVO[], onRemove: onRemoveType }) {
    return (
        <div>
            {/* key값을 넣어줘야지 재렌더링시 효율적으로 렌더링할 수 있음*/}
            {users.map((user: UserVO) => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;
