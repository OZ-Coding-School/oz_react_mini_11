import { Global, css } from "@emotion/react";
import "reset-css";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");

        * {
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          font-size: 16px;
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            system-ui, Roboto, "Noto Sans KR", sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
