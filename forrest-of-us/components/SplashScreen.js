import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../public/tree-animation.json";

export default function SplashScreen({ onComplete }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 2000); // adjust based on animation length

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
}
