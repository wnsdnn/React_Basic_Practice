import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { onChangeType, onCreateType } from "../types/global";

function CreateUser({
    username,
    email,
    onChange,
    onCreate
}: {
    username: string,
    email: string,
    onChange: onChangeType,
    onCreate: onCreateType,
}) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;
