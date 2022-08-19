import styled, { createGlobalStyle } from "styled-components";
const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a:link { color:white; text-decoration: none;}
 a:visited {color:white; text-decoration: none;}
  html {
    padding: 0;
    margin: 0;
    font-size: 10px;
    @media screen and (max-width: 1300px) {
      font-size: 9px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 8.75px;
    }
    @media screen and (max-width: 750px) {
      font-size: 8.125px;
    }
    @media screen and (max-width: 700px) {
      font-size: 7.5px;
    }
    @media screen and (max-width: 500px) {
      font-size: 6px;
    }
    @media screen and (max-width: 361px) {
      font-size: 5px;
    }
    @media screen and (max-width: 321px) {
      font-size: 4px;
    }
  }

  /* body { 
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Noto Sans KR', sans-serif;
    color:#252525;
    background-color: grey;

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  } */
  body {
	font-family: 'Noto Sans KR', sans-serif;
  overflow-x: hidden;
  cursor: none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
`;

const Body = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
  background-color: #000;

`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Body>{children}</Body>
    </>
  );
}

export default GlobalStyle;
