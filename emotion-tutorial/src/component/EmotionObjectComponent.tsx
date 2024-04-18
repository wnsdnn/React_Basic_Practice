import React from "react";
import { css } from "@emotion/react";

function EmotionObjectComponent() {
    return (
        <div
            css={css({
                background: 'yellow',
            })}
        >
            노란색 영역
        </div>
    );
}

export default EmotionObjectComponent;
