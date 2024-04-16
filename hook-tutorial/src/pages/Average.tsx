import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers: number[]) => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((a: number, b: number) => a + b);

    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([] as number[]);
    const [number, setNumber] = useState('');
    const inputElement = useRef<HTMLInputElement>(null);

    // React에서는 리렌더링 할때마다 함수들을 새로 생성해준다.
    // 대부분의 경우에는 이러한 방식이 문제가 되지 않지만, 컴포넌트의 렌더링이
    // 자주 발생하거나, 렌더링 해야 할 컴포넌트의 개수가 많아진다면 이 부분은 최적화 해주는것이 좋다.
    //
    // useCallback()
    // 첫번째 파라미터 - 생성해주고 싶은 함수
    // 두번째 파라미터 - 배열(어떤값이 바뀌었을때 함수를 새로 생성해야하는지 명시 / 비어있다면 컴포넌트가 한번만 생성)
    const onChage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        const nextList = list.concat([parseInt(number)]);
        setList(nextList);
        setNumber('');
        (inputElement.current as HTMLInputElement).focus();
    }, [number, list]); // number 혹은 list가 바뀌었을때만 함수 생성

    // useMemo
    // 특정 값이 바뀌었을때만 연산을 실행하고 만약에 원하는 값이
    // 바뀐것이 아니라면 이전에 연산했던 결과를 다시 반환.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChage} ref={inputElement} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값:</b> {avg}
            </div>
        </div>
    );
}

export default Average;
