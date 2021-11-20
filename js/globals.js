import * as THREE from "three";

export default {
  isPaused: true,
  currentRenderTargetIndex: 0,
  pingPongSteps: 60,
  clock: new THREE.Clock(),
};
