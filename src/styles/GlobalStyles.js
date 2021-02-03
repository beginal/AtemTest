import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
${reset}
 * {
   box-sizing: border-box
 }

 body {
  font-family: 'Noto Sans KR', sans-serif;
   margin: 0;
 }


 ol,ul,li {
   list-style: none;
 }
 a {
   color: inherit;
   text-decoration: none;
   cursor: pointer;
 }

 img {
   display: block;
   width: 100%;
   height: 100%;
 }

`;

export default GlobalStyle;
