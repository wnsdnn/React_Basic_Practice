// reducer 함수에 첫번재값은 고정인듯
import React, { useReducer } from "react";

function reducer(state: any, action: any) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default function useInputs(initialForm: { name: string, nickname: string }) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target as HTMLInputElement);
    };

    return [state, onChange];
}
