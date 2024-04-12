import React from "react";

function Wrapper(props: any) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Wrapper;
