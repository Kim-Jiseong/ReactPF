import React, { useEffect, useCallback, useState,  Suspense } from "react";
import { useNavigate } from 'react-router-dom';
import { loadFull } from "tsparticles";
import * as S from "./style";
import Particles from "../../components/Particles/index";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
// import axios from "axios";

export default function Home() {
    const [activate, setActivate] = useState(false);
    // const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const click = () => {
        navigate(`main`);
    }
    // const mouseover = () => {
    //     setHover(!hover)
    //     console.log(hover)
    // }
  return (
    <>  
        <S.TopAutoScrollContainer>
            <S.LeftPrimary>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
            </S.LeftPrimary>
            <S.LeftSecondary>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
                <span>&nbsp;Developer <mark>Jiseong's Repository</mark> |&nbsp;</span>
            </S.LeftSecondary>
        </S.TopAutoScrollContainer>
        <S.Container>
            <LightSpeed left>
            <S.Text1>
                Welcome
            </S.Text1>
            </LightSpeed>
            <LightSpeed right>
            <S.Text2>
                to
            </S.Text2>
            </LightSpeed>
            <LightSpeed left>
            <S.Text3>
                MY
            </S.Text3>
            </LightSpeed>
            <LightSpeed right>
            <S.Text4>
                Repository
            </S.Text4>
            </LightSpeed>
        </S.Container>
        <S.BottomAutoScrollContainer>
                <S.RightPrimary>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                </S.RightPrimary>
                <S.RightSecondary>
                <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                    <span>&nbsp;Learn Fast, <mark>Do Faster</mark> |&nbsp; </span>
                </S.RightSecondary>
        </S.BottomAutoScrollContainer>
    </>
  );
}
