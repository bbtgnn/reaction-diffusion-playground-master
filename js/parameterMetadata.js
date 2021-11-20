export default {
  f: {
    min: 0.0,
    max: 0.1,
    initial: 0.054,
  },
  k: {
    min: 0.03,
    max: 0.07,
    initial: 0.062,
  },
  dA: {
    min: 0.2,
    max: 0.25,
    initial: 0.2097,
  },
  dB: {
    min: 0.01,
    max: 0.8,
    initial: 0.105,
  },
  timestep: {
    min: 0.0,
    max: 2.0,
    initial: 1.0,
  },
  canvas: {
    width: {
      min: 0,
      max: window.innerWidth,
      initial: 204,
    },
    height: {
      min: 0,
      max: window.innerHeight,
      initial: 418,
    },
    scale: {
      min: 0.01,
      max: 3,
      initial: 1,
    },
  },
  bias: {
    x: {
      max: 0.5,
      initial: 0.0,
    },
    y: {
      max: 0.5,
      initial: 0.0,
    },
  },
};
