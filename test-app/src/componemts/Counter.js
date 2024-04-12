import React, {useState} from "react";

function Counter() {
    // useState(0)에서 0은 기본값
    //
    // # useState 반환값
    // 첫번째요소 - 현재 상태
    // 두번째요소 - Setter함수
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // setNumber(number + 1);
        // 결과값이 아닌 결과값을 반환해주는 함수를 전달 (함수형 업데이트)
        // 나중에 컴포넌트 최적화할때 사용되는데 자세한 내용은 문서 나중에 나옴
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default  Counter;
