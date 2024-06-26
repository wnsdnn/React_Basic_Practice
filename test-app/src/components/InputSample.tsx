import React, { useRef, useState } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef<HTMLInputElement>(null);

    const { name, nickname } = inputs; // 값 추출

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target as HTMLInputElement;

        // 이런식으로 직접 수정 X
        // inputs[name] = value;

        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });

        nameInput.current?.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onInput={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onInput={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}: {nickname}
            </div>
        </div>
    );
}

export default InputSample;
