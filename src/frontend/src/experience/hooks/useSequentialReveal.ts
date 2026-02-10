import { useState, useEffect, useRef } from 'react';

export function useSequentialReveal(totalLines: number, delayMs: number, onComplete: () => void) {
  const [visibleCount, setVisibleCount] = useState(0);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (visibleCount >= totalLines) {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        setTimeout(onComplete, 500);
      }
      return;
    }

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [visibleCount, totalLines, delayMs, onComplete]);

  return visibleCount;
}
