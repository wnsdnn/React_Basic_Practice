import React from "react";
import useMemosStore from "../store/memos";

// interface MemosProps {
//     memos: string[];
// }
//
// const Memos = (props: MemosProps) => {
//     return (
//         <>
//             <ul>
//                 {props.memos.map((memo) => (
//                     <li key={memo}>{memo}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }

const Memos: React.FC = () => {
    const { memos } = useMemosStore();

    return (
        <ul>
            {memos.map((memo) => (
                <li key={memo}>{memo}</li>
            ))}
        </ul>
    );
}

export default Memos;
