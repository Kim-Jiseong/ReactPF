import styled, { css, keyframes } from "styled-components";

const leftSlide = keyframes` 
  0% {
    transform: translate(-5000%, 0);
  }
  60% {
    transform: translate(-100%, 0);
  }
  90% {
    transform: translate(20%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`
const rightSlide = keyframes` 
  0% {
    transform: translate(5000%, 0);
  }
  60% {
    transform: translate(100%, 0);
  }
  90% {
    transform: translate(-20%, 0);
  }
  100% {
    transform: translate(0, 0);

  }
`


const leftPrimary = keyframes` 
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }

`
const leftSecondary = keyframes` 
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }

`
const rightPrimary = keyframes` 
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }

`
const rightSecondary = keyframes` 
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }

`

export const TopAutoScrollContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 6rem;
    overflow: hidden;
    top:0;
    z-index: 1;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        width: 500px;
        height:  6rem;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    }
    &::after{
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 500px;
        height:  6rem;
        z-index: 2;
        background-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    }
`;
export const BottomAutoScrollContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height:  6rem;
    overflow: hidden;
    bottom:0;
    z-index: 1;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        width: 500px;
        height:  6rem;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    }
    &::after{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 500px;
        height:  6rem;
        z-index: 2;
        background-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    }
`

export const ScrollElements = styled.div`
    width: auto;
    height: inherit;
    position: absolute;
    left: 0%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    & span{
        color: #c3c3c3;
        font-weight: 700;
        line-height: 110%;
        white-space: nowrap;
        font-size: 1.6rem;
    }
`;
export const LeftPrimary = styled(ScrollElements)`
    animation: ${leftPrimary} 20s linear infinite;
`
export const LeftSecondary = styled(ScrollElements)`
    animation: ${leftSecondary} 20s linear infinite;
`
export const RightPrimary = styled(ScrollElements)`
    animation: ${rightPrimary} 20s linear infinite;
`
export const RightSecondary = styled(ScrollElements)`
    animation: ${rightSecondary} 20s linear infinite;
`
export const Container = styled.div`
    width: 100%;
    position: absolute;
    top:50%;
    left:50%;
    margin: 0 auto;
    /* transform: rotate(-30deg); */
    transform: translate(-50%,-50%) rotate(-30deg) ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`;

export const Text1 = styled.div`
    font-size: 20rem;
    color: transparent;
    font-weight: 900;
    transform: translate(-5000%, 0);
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color:#9e35fa;
    transition: 0.3s;
    animation: ${leftSlide} 0.4s forwards;
    line-height: 110%;
    white-space: nowrap;
`;

export const Text2 = styled(Text1)`
    animation: ${rightSlide} 0.4s forwards;
    animation-delay: 0.5s;
    transform: translate(5000%, 0);
    
`;
export const Text3 = styled(Text1)`
    animation: ${leftSlide} 0.4s forwards;
    animation-delay: 1s;
    transform: translate(-5000%, 0);
`;

export const Text4 = styled(Text1)`
    animation: ${rightSlide} 0.4s forwards;
    animation-delay: 1.5s;
    transform: translate(5000%, 0);
`;

