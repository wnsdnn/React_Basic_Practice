import './App.css';
import Test from "./components/Test";
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/actions/action";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import { UserVO } from "./types/global";
import React, { useRef, useState } from "react";
import CreateUser from "./components/CreateUser";

function RenderTitle(props: any) {
    return (
        <div>
            <h2># {props.title}</h2>
            {props.children}
            <br /><br />
        </div>
    );
}

function App() {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();

    const [users, setUsers]: [UserVO[], Function] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ]);

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const { username, email } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // setUsers([...users, user]);
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: '',
        });
        // useRef도 '.current'로 값에 접근할수 있음.
        nextId.current += 1;
    }

    return (
        <div style={{padding: "0 240px"}}>
            <RenderTitle title="UserList">
                <CreateUser
                    username={username}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <UserList users={users} />
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
