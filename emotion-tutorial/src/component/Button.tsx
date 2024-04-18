/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const colors: { [key: string] : string } = {
    default: "rgb(36, 41, 47)",
    danger: "rgb(207, 34, 46)",
    outline: "rgb(9, 105, 218)",
};

function Button({ children, veriant = "default" }:  { children: React.ReactNode, veriant: string }) {
    return (
        <button
            css={css({
                borderRadius: '6px',
                border: '1px solid rgba(27, 31, 36, 0.15)',
                backgroundColor: 'rgb(246, 248, 250)',
                color: colors[veriant],
                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '600',
                lineHeight: '20px',
                fontSize: '14px',
                padding: '5px 16px',
                textAlign: 'center',
                cursor: 'pointer',
                appearance: 'none',
                userSelect: 'none',
            })}
        >
            {children}
        </button>
    );
}

export default Button;
