import React from "react";

function Hello(props: any) {
    return <div style={{ color: props.color, fontSize: 20 }}>안녕하세요 {props.name}</div>
}

Hello.defaultProps = {
    name: '이름 없음',
}

export default Hello;
