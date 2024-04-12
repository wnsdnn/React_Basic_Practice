// 초기 상태 정의
import {DECREMENT, INCREMENT} from "../actions/action";
import { actionType } from "../../types/store";

const initialState = {
    count: 0,
};

// 리듀서 함수
function counterReducer(state = initialState, action: actionType) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default counterReducer;
