import { Global, css } from "@emotion/react";
import "reset-css";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
        @font-face {
          font-family: "Tenada";
          src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Tenada.woff2")
            format("woff2");
          font-weight: normal;
          font-style: normal;
        }

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
          background: #1b1b1b;
        }
      `}
    />
  );
}

export default GlobalStyles;
