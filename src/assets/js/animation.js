import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from 'scrollmagic';

import toggleClassAnim from "./animations/ToggleClassAnim";
import marqueeAnim from "./animations/MarqueeAnim";
import parallaxAnim from "./animations/ParallaxAnim";
import splitTextAnim from "./animations/SplitTextAnim.js";
import svgAnim from "./animations/svgAnim.js";


window.onload = function() {
  const ctrl = new ScrollMagic.Controller();
  const components = {
    anim: $(".anim"),
    marquee: $(".marquee_compo"),
    parallax: $(".parallax_compo"),
    splitText: $(".splitText"),
    svgMotion: $(".svg_motion_compo"),
  }

  const init = () => {
    components.anim.length !== 0 && toggleClassAnim(ctrl);
    components.marquee.length !== 0 && marqueeAnim();
    components.parallax.length !== 0 && parallaxAnim();
    components.splitText.length !== 0 && splitTextAnim();
    components.svgMotion.length !== 0 && svgAnim();
  }
  init();
}