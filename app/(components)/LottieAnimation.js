"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../public/water-animation.json"; // Remplacez 'water-animation.json' par le nom de votre fichier JSON

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
