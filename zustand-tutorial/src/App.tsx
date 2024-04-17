import React, { useState } from 'react';
import './App.css';
import Form from "./pages/Form";
import Memos from "./pages/Memos";
import { AddEventHandlerType, SubmitEventHandlerType } from "./type/global";

function App() {
    // Zustand 사용전에 했던 방법
    // const [memo, setMemo] = useState('');
    // const [memos, setMemos] = useState<string[]>([]);
    //
    // const handleWriteMemo: AddEventHandlerType = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMemo(e.target.value);
    // };
    //
    // const handleAddMemo: SubmitEventHandlerType = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //
    //     if (memo === "") {
    //         alert('메모를 입력해주세요');
    //         return;
    //     }
    //
    //     setMemos((prevMemos) => [...prevMemos, memo]);
    //     setMemo('');
    // };
    //
    // return (
    //     <div style={{ padding: '0 170px' }}>
    //         <h1>메모 작성하기</h1>
    //         <Form onAdd={handleWriteMemo} onSubmit={handleAddMemo} memo={memo} />
    //         <Memos memos={memos} />
    //     </div>
    // );

    return (
        <div>
            <h1>메모 작성하기</h1>
            <Form />
            <Memos />
        </div>
    );
}

export default App;
