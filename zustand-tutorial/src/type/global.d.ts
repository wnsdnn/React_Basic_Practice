import React from "react";

type AddEventHandlerType = (e: React.ChangeEvent<HTMLInputElement>) => void;

type SubmitEventHandlerType = (e: React.FormEvent<HTMLFormElement>) => void;

interface MemoStoreInterface {
    memo: string;

    setMemo: (memo: string) => void;

    memos: string[];

    setMemos: (memo: string) => void;
}

export {
    AddEventHandlerType,
    SubmitEventHandlerType,
    MemoStoreInterface,
}
