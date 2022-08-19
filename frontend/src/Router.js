import React, { useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";
import Landing from "./pages/landing/index";
import ScrollTop from "./components/ScrollTop/index";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { useRecoilState, useSetRecoilState } from "recoil";
// import { userState } from "./utils/atoms";


function Router() {


//   const [user, setUser] = useRecoilState(userState);
  // const isLogin = localStorage.getItem("userLogin");
  // // 반응형 헤더를 위한 데스크탑 여부 확인
  const isDesktop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });
  return (
    // <BrowserRouter render={({ location }) => {
    //   return (
    //     <TransitionGroup className="transition-group">
    //       <CSSTransition key={location.pathname} timeout={300} className="transition">
    //         <Routes>
    //           <Route exact path="/" element={<Landing />} />
    //         </Routes>
    //   </CSSTransition>
    //     </TransitionGroup>
    //   );
    // }}></BrowserRouter>

    // ------------------------------------------
    // <TransitionGroup className="transitions-wrapper" >
    // <CSSTransition
    //   key={location.pathname}
    //   classNames={"right"}
    //   timeout={300}
    // >
        <BrowserRouter>
         <ScrollTop />
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
    //   </CSSTransition>
    //   </TransitionGroup>
      );
}
export default Router;
