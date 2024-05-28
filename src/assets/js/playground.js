import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.to(".dot1", {
  duration: 5,
  ease: "linear",
  immediateRender: true,
  repeat: -1,
  motionPath: {
    path: "#line1",
    align: "#line1",
    alignOrigin: [0.5, 0.5],
    loop: true,
    start: 0,
  }
});
gsap.to(".dot1", {
  motionPath: {end: 1}
});

gsap.to(".dot2", {
  duration: 5,
  ease: "linear",
  immediateRender: true,
  repeat: -1,
  motionPath: {
    path: "#line2",
    align: "#line2",
    alignOrigin: [0.5, 0.5],
    loop: true,
    start: 0,
  }
});
gsap.to(".dot2", {
  motionPath: {end: 1}
});

MotionPathHelper.create(".dot1");
MotionPathHelper.create(".dot2");