import { SlideShell } from '../components/SlideShell';

interface Slide6FinalSurpriseProps {
  onNext: () => void;
}

export function Slide6FinalSurprise({ onNext }: Slide6FinalSurpriseProps) {
  return (
    <SlideShell>
      <button
        onClick={onNext}
        className="final-surprise-button"
      >
        Tap for Final Surprise 💖
      </button>
    </SlideShell>
  );
}
