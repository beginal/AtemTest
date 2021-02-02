import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
 * {
   box-sizing: border-box
 }

 body {
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
