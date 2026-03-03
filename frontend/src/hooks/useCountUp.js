import { useRef, useEffect } from "react";
import { useInView } from "motion/react";

export default function useCountUp(target, { duration = 1500, suffix = "" } = {}) {
  const ref = useRef(null);
  const hasRun = useRef(false);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || hasRun.current || !ref.current) return;
    hasRun.current = true;

    const start = performance.now();
    const numTarget = typeof target === "string" ? parseFloat(target) : target;

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numTarget * eased);
      if (ref.current) ref.current.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target, duration, suffix]);

  const setRefs = (el) => {
    ref.current = el;
    inViewRef.current = el;
  };

  return setRefs;
}
