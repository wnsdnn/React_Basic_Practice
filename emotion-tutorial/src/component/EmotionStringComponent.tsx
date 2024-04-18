import React from "react";
import { css } from "@emotion/react";

function EmotionStringComponent() {
    return (
        <div
            css={css`
                background-color: yellow;
            `}
        >
            노란색 영역
        </div>
    );
}

export default EmotionStringComponent;
