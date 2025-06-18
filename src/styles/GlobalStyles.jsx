import { Global, css } from "@emotion/react";
import "reset-css";
import theme from "./theme";

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

        *::-webkit-scrollbar {
          width: 0.5rem;
          height: 0.5rem;
        }
        *::-webkit-scrollbar-track {
          background: ${theme.colors.purple.light};
          border-radius: 0.5rem;
        }
        *::-webkit-scrollbar-thumb {
          background: ${theme.colors.purple.normal};
          border-radius: 0.5rem;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.purple.normalActive};
        }
      `}
    />
  );
}

export default GlobalStyles;
