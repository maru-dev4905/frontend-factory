import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.utils.toArray(".dot").forEach((dot, i) => {
  console.log(dot, i);
  gsap.to(dot, {
    duration: Math.floor(Math.random() * 10 + 5),
    ease: "linear",
    immediateRender: true,
    repeat: -1,
    motionPath: {
      path: "#line" + (i + 1),
      align: "#line" + (i + 1),
      alignOrigin: [0.5, 0.5],
      loop: true,
      start: 0,
    }
  });
});