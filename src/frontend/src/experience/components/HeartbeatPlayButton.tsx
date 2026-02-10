import { Heart } from 'lucide-react';
import { useState } from 'react';

interface HeartbeatPlayButtonProps {
  onPlay: () => void;
}

export function HeartbeatPlayButton({ onPlay }: HeartbeatPlayButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => onPlay(), 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`heartbeat-button ${isClicked ? 'clicked' : ''}`}
      aria-label="Play video"
    >
      <Heart className="w-12 h-12 fill-current" />
    </button>
  );
}
