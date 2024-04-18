import React from "react";
import useMemosStore from "../store/memoStore";

// interface FormComponentProps {
//     onAdd: AddEventHandlerType;
//
//     onSubmit: SubmitEventHandlerType;
//
//     memo: string;
// }

// const Form: React.FC<FormComponentProps> = (props: FormComponentProps) => {
//
//     return (
//         <>
//             <form onSubmit={props.onSubmit}>
//                 <input type="text" name="memo" onChange={props.onAdd} value={props.memo} />
//                 <button type="submit">작성완료</button>
//             </form>
//         </>
//     );
// }


const Form = () => {
    const [memo, setMemo, setMemos] = useMemosStore((state) => [state.memo, state.setMemo, state.setMemos]);

    const handleWriteMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMemo(e.target.value);
    };

    const handleAddMemo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (memo === "") {
            alert('메모를 입력해주세요');
            return;
        }

        setMemos(memo);
        setMemo('');
    };

    return (
        <>
            <form onSubmit={handleAddMemo}>
                <input type="text" name="memo" onChange={handleWriteMemo} value={memo} />
                <button type="submit">작성완료</button>
            </form>
        </>
    );
}

export default Form;
