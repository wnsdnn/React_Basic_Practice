import './App.css';
import Test from "./componemts/Test";
import Hello from "./componemts/Hello";
import Wrapper from "./componemts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/actions/action";
import Counter from "./componemts/Counter";
import InputSample from "./componemts/InputSample";
import UserList from "./componemts/UserList";

function RenderTitle(props: any) {
    return (
        <div>
            <h2># {props.title}</h2>
            {props.children}
            <br />
            <br />
        </div>
    );
}

function App() {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <RenderTitle title="UserList">
                <UserList />
            </RenderTitle>
            <RenderTitle title="InputSample">
                <InputSample />
            </RenderTitle>
            <RenderTitle title="Counter">
                <Counter />
            </RenderTitle>
            <RenderTitle title="Wrapper">
                <Wrapper>
                    <Hello name="React" color="red" />
                    <Hello color="pink" />
                </Wrapper>
            </RenderTitle>
            <RenderTitle title="Test">
                <Test />
            </RenderTitle>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        </div>
    );
}

export default App;
