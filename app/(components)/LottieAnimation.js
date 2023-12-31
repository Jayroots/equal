"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../public/eau-animation.json";

function LottieAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData, //
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return <div className="" ref={containerRef}></div>;
}

export default LottieAnimation;
