import { useRef, useCallback } from 'react';

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isStartedRef = useRef(false);

  const startMusic = useCallback(() => {
    if (isStartedRef.current) return;
    
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('birthday.mp3');
        audioRef.current.volume = 0.6;
        audioRef.current.loop = true;
      }
      
      audioRef.current.play().catch((error) => {
        console.warn('Audio playback failed:', error);
      });
      
      isStartedRef.current = true;
    } catch (error) {
      console.warn('Failed to initialize audio:', error);
    }
  }, []);

  const pauseMusic = useCallback(() => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, []);

  const resumeMusic = useCallback(() => {
    if (audioRef.current && audioRef.current.paused && isStartedRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn('Audio resume failed:', error);
      });
    }
  }, []);

  return { startMusic, pauseMusic, resumeMusic };
}
