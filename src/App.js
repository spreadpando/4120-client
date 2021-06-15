import React, { useState } from "react";
import styled from "styled-components";
import desertLogo from "./assets/4120-logo-y.svg";
import Scene from "./components/react-components/scene";
import MobileCtl from "./components/react-components/mobilectl";
import Checkout from "./components/react-components/checkout-form";

function App() {
  let isMobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
  const Head = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    img {
      position: absolute;
      z-index: 1000;
    }
  `;
  const Logo = styled.img`
    width: 15vw;
  `;
  const topRight = {
    top: 0,
    right: 0,
    margin: "1em",
  };

  return (
    <div className="app">
      <Head>
        <Logo className="4120-logo" src={desertLogo} style={topRight} />
        {/* {isMobile ? <MobileCtl /> : <> </>} */}
        <Checkout />
      </Head>
      <Scene />
    </div>
  );
}

export default App;
