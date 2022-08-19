import styled, { css, keyframes } from "styled-components";


const zoom = keyframes` 
  0% {
    transform: rotate(3deg);
    font-size: 10vw;
    color: transparent
  }
  100% {
    transform: rotate(-3deg);
    font-size: 30vw;
    color:white;
  }
`

const vibrationSmall = keyframes` 
  0% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(-1deg);
  }
`
const vibrationBig = keyframes` 
  0% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);

  }
`
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    text-align: center;
`;
export const Text = styled.div`
    font-size: 10vw;
    color: transparent;
    font-weight: 900;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: white;
    cursor: pointer;
    transition: 0.3s;
    animation: ${vibrationSmall} 0.1s infinite alternate;
    ${(props) => props.hover && css`
      animation: ${vibrationBig} 0.1s infinite alternate;
    `}
    &:hover{
      /* animation: ${zoom} 0.5s  forwards; */
      animation: ${vibrationBig} 0.1s infinite;
      font-size: 30vw;
      transform: rotate(-3deg);
      color:white;
    }
`;
