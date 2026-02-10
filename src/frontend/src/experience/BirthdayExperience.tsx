import { useState, useCallback, useEffect } from 'react';
import { PremiumBackground } from './components/PremiumBackground';
import { StartOverlay } from './components/StartOverlay';
import { Slide0Countdown } from './slides/Slide0Countdown';
import { Slide1Title } from './slides/Slide1Title';
import { Slide2Photos } from './slides/Slide2Photos';
import { Slide3Video } from './slides/Slide3Video';
import { Slide4Video } from './slides/Slide4Video';
import { Slide5Shayari } from './slides/Slide5Shayari';
import { Slide6FinalSurprise } from './slides/Slide6FinalSurprise';
import { Slide7FinalMessage } from './slides/Slide7FinalMessage';
import { useBackgroundMusic } from './hooks/useBackgroundMusic';
import type { SlideId } from './types';

export function BirthdayExperience() {
  const [showStart, setShowStart] = useState(true);
  const [currentSlide, setCurrentSlide] = useState<SlideId>('countdown');
  const { startMusic, pauseMusic, resumeMusic } = useBackgroundMusic();

  const handleStartTap = useCallback(() => {
    setShowStart(false);
  }, []);

  const handleCountdownComplete = useCallback(() => {
    startMusic();
    setCurrentSlide('title');
  }, [startMusic]);

  const handleSlide1Next = useCallback(() => {
    setCurrentSlide('photos');
  }, []);

  const handleSlide2Next = useCallback(() => {
    setCurrentSlide('video1');
  }, []);

  const handleSlide3VideoStart = useCallback(() => {
    pauseMusic();
  }, [pauseMusic]);

  const handleSlide3VideoEnd = useCallback(() => {
    resumeMusic();
    setCurrentSlide('video2');
  }, [resumeMusic]);

  const handleSlide4VideoStart = useCallback(() => {
    pauseMusic();
  }, [pauseMusic]);

  const handleSlide4VideoEnd = useCallback(() => {
    resumeMusic();
    setCurrentSlide('shayari');
  }, [resumeMusic]);

  const handleSlide5Next = useCallback(() => {
    setCurrentSlide('finalSurprise');
  }, []);

  const handleSlide6Next = useCallback(() => {
    setCurrentSlide('finalMessage');
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <PremiumBackground />
      
      {showStart && <StartOverlay onTap={handleStartTap} />}
      
      {!showStart && (
        <>
          {currentSlide === 'countdown' && (
            <Slide0Countdown onComplete={handleCountdownComplete} />
          )}
          {currentSlide === 'title' && (
            <Slide1Title onNext={handleSlide1Next} />
          )}
          {currentSlide === 'photos' && (
            <Slide2Photos onNext={handleSlide2Next} />
          )}
          {currentSlide === 'video1' && (
            <Slide3Video 
              onVideoStart={handleSlide3VideoStart}
              onVideoEnd={handleSlide3VideoEnd}
            />
          )}
          {currentSlide === 'video2' && (
            <Slide4Video 
              onVideoStart={handleSlide4VideoStart}
              onVideoEnd={handleSlide4VideoEnd}
            />
          )}
          {currentSlide === 'shayari' && (
            <Slide5Shayari onNext={handleSlide5Next} />
          )}
          {currentSlide === 'finalSurprise' && (
            <Slide6FinalSurprise onNext={handleSlide6Next} />
          )}
          {currentSlide === 'finalMessage' && (
            <Slide7FinalMessage />
          )}
        </>
      )}
    </div>
  );
}
