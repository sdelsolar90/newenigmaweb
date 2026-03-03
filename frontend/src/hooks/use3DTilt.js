import { useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";

export default function use3DTilt({ max = 5, scale: scaleVal = 1.02 } = {}) {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scaleM = useMotionValue(1);

  const springX = useSpring(rotateX, { damping: 20, stiffness: 200 });
  const springY = useSpring(rotateY, { damping: 20, stiffness: 200 });
  const springScale = useSpring(scaleM, { damping: 20, stiffness: 200 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * max);
    rotateY.set(x * max);
    scaleM.set(scaleVal);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scaleM.set(1);
  }

  return {
    ref,
    style: { rotateX: springX, rotateY: springY, scale: springScale },
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
  };
}
