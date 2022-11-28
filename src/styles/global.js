import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
body, input, button {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
}

h1 {
  font-weight: 700;
}

button {
  cursor: pointer;
}
`;
