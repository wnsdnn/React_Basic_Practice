import { create } from "zustand";
import { MemoStoreInterface } from "../type/global";

const useMemosStore = create<MemoStoreInterface>((set) => ({
    // memo 초기값
    memo: '',
    setMemo: (text: string) => set({ memo: text }),
    // memos 초기값
    memos: [],
    setMemos: (newMemo: string) =>
        set((prev: { memos: string[] }) => ({
            memos: [...prev.memos, newMemo],
        })),
}));

export default useMemosStore;
