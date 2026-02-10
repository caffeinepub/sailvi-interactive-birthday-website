import { useState, useEffect, useRef } from 'react';

export function useCountdown(seconds: number, onComplete: () => void) {
  const [count, setCount] = useState(seconds);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (count <= 0) {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return count;
}
