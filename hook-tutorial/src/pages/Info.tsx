import React, { useReducer } from "react";
import useInputs from "../hooks/useInputs";


const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // useEffect - 리액트 컴포넌트가 렌더링 될때마다 실행되는 Hook
    // 두번째 매개변수에 "[](빈배열)"을 넣어주면 화면은 맨처음에 렌더링
    // 되었을때만 실행 (업데이트 되었을때 실행X)
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다!');
    //     console.log({
    //         name,
    //         nickname,
    //     });
    //
    //     // 해당 컴포넌트가 unMounted 되었을때만 실행시키고 싶음
    //     // useEffect에 두번째 매개변수 []로 세팅할것
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // },
    // [
    //     // 특정 값들만 업데이트 될때 실행하고 싶을때
    //     name,
    // ],
    // );

    // const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(() => (e.target as HTMLInputElement).value);
    // };
    //
    // const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNickname(() => (e.target as HTMLInputElement).value);
    // };

    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    });

    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onInput={onChange} />
                <input name="nickname" value={nickname} onInput={onChange} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
}

export default Info;
