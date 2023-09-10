"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../public/fond-eau-anime.json";

function LottieAnimationFond() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData, //
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return <div className=" " ref={containerRef}></div>;
}

export default LottieAnimationFond;
