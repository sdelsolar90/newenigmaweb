import { useRef } from "react";
import { useScroll } from "motion/react";

export default function useStickyScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return { containerRef, progress: scrollYProgress };
}
