import React, { useReducer } from "react";

function reducer(state: { value: number }, action: { type: string }) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    // const [value, setValue] = useState(0);

    // useReducer()
    // 첫번째 파라미터 - 리듀서 함수
    // 두번째 파라미터 - 해당 리듀서의 기본값
    //
    // 리턴값
    // state(첫번째값) - 현재 가르키고 있는 상태
    // dispatch(두번째값) - 액션을 발생시키는 함수
    //
    // useReducer의 가장 큰 장점은 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다는 점이다.
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
}

export default Counter;
