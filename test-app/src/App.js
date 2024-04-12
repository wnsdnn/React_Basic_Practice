import './App.css';
import Test from "./componemts/Test";
import Hello from "./componemts/Hello";
import Wrapper from "./componemts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/action";
import Counter from "./componemts/Counter";
import InputSample from "./componemts/InputSample";

function App() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <Test />
            <Wrapper>
                <Hello name="React" color="red" />
                <Hello color="pink" />
            </Wrapper>
            <Counter />
            <InputSample />
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        </div>
    );
}

export default App;
