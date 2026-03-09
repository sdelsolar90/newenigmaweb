import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

export default function useTextDecrypt(text, trigger = true, { interval = 40, stagger = 30 } = {}) {
  const [displayText, setDisplayText] = useState(text);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger || !text) return;

    setIsComplete(false);

    const chars = text.split("");
    const resolved = new Array(chars.length).fill(false);
    let frame;
    let resolveIndex = 0;
    let tick = 0;

    chars.forEach((c, i) => {
      if (c === " " || c === "\n") resolved[i] = true;
    });

    function update() {
      tick++;

      if (tick % Math.max(1, Math.round(stagger / (interval || 1))) === 0 && resolveIndex < chars.length) {
        while (resolveIndex < chars.length && resolved[resolveIndex]) resolveIndex++;
        if (resolveIndex < chars.length) resolved[resolveIndex] = true;
        resolveIndex++;
      }

      const result = chars.map((c, i) => {
        if (resolved[i]) return c;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");

      setDisplayText(result);

      if (resolved.every(Boolean)) {
        setDisplayText(text);
        setIsComplete(true);
        return;
      }

      frame = setTimeout(update, interval);
    }

    frame = setTimeout(update, interval);

    return () => clearTimeout(frame);
  }, [text, trigger, interval, stagger]);

  return { displayText, isComplete };
}
