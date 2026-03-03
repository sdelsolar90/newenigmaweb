import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { EnigmaIsotipo } from "./EnigmaLogo.jsx";

export default function InteractiveRotor({ size = 400, mobileSize = 250, className = "" }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const lastAngle = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dragRotation = useMotionValue(0);

  const cursorAngle = useTransform([mouseX, mouseY], ([x, y]) => {
    if (isMobile || isDragging.current) return 0;
    return Math.atan2(y, x) * (180 / Math.PI) * 0.15;
  });

  const springRotation = useSpring(dragRotation, { damping: 40, stiffness: 200 });
  const cursorSpring = useSpring(cursorAngle, { damping: 30, stiffness: 120 });

  const finalRotation = useTransform([springRotation, cursorSpring], ([drag, cursor]) => drag + cursor);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    function handleMouseMove(e) {
      if (!containerRef.current || isDragging.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  function handleDragStart(e) {
    isDragging.current = true;
    const touch = e.touches ? e.touches[0] : e;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    lastAngle.current = Math.atan2(touch.clientY - cy, touch.clientX - cx);
  }

  function handleDragMove(e) {
    if (!isDragging.current || !containerRef.current) return;
    const touch = e.touches ? e.touches[0] : e;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - cy, touch.clientX - cx);
    const delta = (angle - lastAngle.current) * (180 / Math.PI);
    dragRotation.set(dragRotation.get() + delta);
    lastAngle.current = angle;
  }

  function handleDragEnd() {
    isDragging.current = false;
  }

  const displaySize = isMobile ? mobileSize : size;

  return (
    <div ref={containerRef} className={`relative select-none touch-none ${className}`}>
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={ready ? { rotate: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotate: finalRotation }}
        className="cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <EnigmaIsotipo size={displaySize} variant="dark" />
      </motion.div>

      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(36,36,38,0.8) 0%, transparent 70%)",
          transform: "scale(1.3)",
        }}
      />
    </div>
  );
}
