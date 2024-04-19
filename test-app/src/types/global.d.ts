import { ChangeEventHandler, MouseEventHandler } from "react";

type UserVO = {
    id: number;

    username: string;

    email: string;
}

type onChangeType = ChangeEventHandler<HTMLInputElement>;

type onCreateType = MouseEventHandler<HTMLButtonElement>;

type onRemoveType = (id: number) => void;

export {
    UserVO,
    onChangeType,
    onCreateType,
    onRemoveType,
}
