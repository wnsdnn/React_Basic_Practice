import React, { ReactElement } from "react";
import usePromise from "./usePromise";

const wait = () => {
    // 3초 후에 끝나는 프로미스 반환
    return new Promise(resolve => {
        setTimeout(() => resolve('Hellow hooks!'), 3000);
    });
};

// @ts-ignore
const UsePromiseSample = (): ReactElement => {
    const [loading, resolved, error] = usePromise(wait, []);

    if (loading) return <div>로딩중...!</div>;
    if (error) return <div>에러 발생...!</div>;
    if (!resolved) return <div></div>;

    return <div>{resolved}</div>;
};

export default UsePromiseSample;
