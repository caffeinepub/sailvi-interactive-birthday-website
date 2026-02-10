import { useState, useRef } from 'react';
import { SlideShell } from '../components/SlideShell';
import { HeartbeatPlayButton } from '../components/HeartbeatPlayButton';

interface Slide3VideoProps {
  onVideoStart: () => void;
  onVideoEnd: () => void;
}

export function Slide3Video({ onVideoStart, onVideoEnd }: Slide3VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
        onVideoStart();
      } catch (error) {
        console.warn('Video playback failed:', error);
      }
    }
  };

  const handleVideoEnd = () => {
    onVideoEnd();
  };

  return (
    <SlideShell>
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <div className="video-container">
          <video
            ref={videoRef}
            src="video1.mp4"
            className="w-full h-auto rounded-2xl shadow-2xl"
            onEnded={handleVideoEnd}
            onError={(e) => {
              console.warn('Video load error:', e);
            }}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <HeartbeatPlayButton onPlay={handlePlay} />
            </div>
          )}
        </div>
      </div>
    </SlideShell>
  );
}
