import { SlideShell } from '../components/SlideShell';
import { useCountdown } from '../hooks/useCountdown';

interface Slide0CountdownProps {
  onComplete: () => void;
}

export function Slide0Countdown({ onComplete }: Slide0CountdownProps) {
  const count = useCountdown(5, onComplete);

  return (
    <SlideShell>
      <div className="text-center">
        <div className="text-9xl md:text-[12rem] font-bold text-pink-600 countdown-number">
          {count}
        </div>
      </div>
    </SlideShell>
  );
}
