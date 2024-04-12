import React, {useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const { name, nickname } = inputs; // 값 추출

    const onChange = (e) => {
        const { value, name } = e.target;

        // 이런식으로 직접 수정 X
        // inputs[name] = value;

        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        })
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    };

    return (
        <div>
            <input name="name" placeholder="이름" onInput={onChange} value={name} />
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
