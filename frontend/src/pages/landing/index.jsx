import React, { useEffect, useCallback, useState,  Suspense } from "react";
import { useNavigate } from 'react-router-dom';
import { loadFull } from "tsparticles";
import * as S from "./style";
import Particles from "../../components/Particles/index";
import Zoom from 'react-reveal/Zoom';
// import axios from "axios";

export default function Home() {
    const [activate, setActivate] = useState(false);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const click = () => {
        navigate(`landing`);
    }
    const mouseover = () => {
        setHover(!hover)
        console.log(hover)
    }
  return (
    <S.Container>
        <div style={{position:"absolute", zIndex:"1"}}>
            <Zoom left cascade>
                <div>
                <S.TextWrapper>
                    <S.Text 
                    onMouseOver={() => setHover(1)}
                    onMouseOut={() => setHover(0)} 
                    onClick={click} 
                    activate = {activate} 
                    hover={hover}>
                        <Zoom right cascade>
                        Hey!
                        </Zoom>
                    </S.Text>
                </S.TextWrapper>

                </div>


            </Zoom>
        </div>

    <Particles/>
    </S.Container>
  );
}
