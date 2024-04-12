// 액션 타입 정의
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 액션 생성자
export function increment() {
    return { type: INCREMENT };
}
export function decrement() {
    return { type: DECREMENT };
}
