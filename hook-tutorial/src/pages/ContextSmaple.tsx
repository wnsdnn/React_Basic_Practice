import React, { createContext, useContext } from "react";

// Context 값보관? 그런 느낌?
const ThemeContext = createContext('black');
const ContextSmaple = () => {
    const theme = useContext(ThemeContext);
    const style = {
        width: 24,
        height: 24,
        background:theme,
    };

    return <div style={style} />;
}

export default ContextSmaple;
