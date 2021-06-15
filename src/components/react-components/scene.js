import React from "react";
import styled from "styled-components";
import Sky from "./sky";
import Terrain from "./terrain";
import UserRig from "./user-rig";
import vrLogo from "../../assets/vr_logo.png";
import ground from "../../assets/ground.jpg";
import skyShpere from "../../assets/desert-sky.png";

require("aframe");
require("aframe-extras");
require("../a-components/");

export default function Scene() {
  const Canvas = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  `;

  return (
    <Canvas>
      <a-scene
        id="scene"
        vr-mode-ui="enabled:true; enterVRButton: #myEnterVRButton"
        device-orientation-permission-ui="enabled: true"
        loading-screen="dotsColor: black; backgroundColor: white"
        shadow="enabled:true;autoUpdate:true;"
        fog="type: exponential; color: #343752; near: 1;far:100; density: 0.025"
        renderer="colorManagement: true; sortObjects: true;physicallyCorrectLights:true"
      >
        <a-assets>
          <a-asset-item id="car-model" src="./Flying Car Master Anim.gltf">
            {" "}
          </a-asset-item>
          <a-asset-item id="shirt-model" src="./tshirtfloat.gltf">
            {" "}
          </a-asset-item>
          <img id="sky-sphere" src={skyShpere} alt="sky sphere" />
          <img id="ground-texture" src={ground} alt="ground texture" />
        </a-assets>
        <Sky />
        <Terrain />
        <UserRig />
        <a-entity
          class="cursor-listen"
          product
          scale=".1 .1 .1"
          material="shader:standard;color:#ff6600;metalness:1;roughness:0;emissive:#ffffff;emissiveIntensity:0.1;"
          w-shirt-gltf="gltf:#shirt-model"
          position="0 0 -10"
          cursor-listen
        />
        <button
          id="myEnterVRButton"
          style={{
            width: "3vw",
            height: "3vw",
            backgroundImage: `url(${vrLogo})`,
            backgroundColor: "transparent",
            border: "none",
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.8,
            margin: "0.7em",
            zIndex: 2,
          }}
        />
      </a-scene>
    </Canvas>
  );
}
