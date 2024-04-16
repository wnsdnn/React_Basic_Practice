import React, { useState } from 'react';
import './App.css';
import Info from "./pages/Info";
import ContextSmaple from "./pages/ContextSmaple";
import Counter from "./pages/Counter";
import Average from "./pages/Average";
import UsePromiseSample from "./hooks/UsePromiseSample";

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{padding: '20px 240px'}}>
            <UsePromiseSample />
            <br/>
            <br/>
            <Average/>
            <br/>
            <br/>
            <ContextSmaple/>
            <br/>
            <br/>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr/>
            {visible && <Info/>}
            <Counter/>
        </div>
    );
}

export default App;
