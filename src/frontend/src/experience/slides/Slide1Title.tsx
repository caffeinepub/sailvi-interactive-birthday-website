import { useState, useEffect } from 'react';
import { SlideShell } from '../components/SlideShell';
import { Button } from '@/components/ui/button';

interface Slide1TitleProps {
  onNext: () => void;
}

export function Slide1Title({ onNext }: Slide1TitleProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideShell>
      <div className="text-center px-4">
        <div className="title-container mb-12">
          <div className="title-word-group">
            <span className="title-word">HAPPY</span>
            <div className="title-underline" />
          </div>
          <div className="title-word-group">
            <span className="title-word">BIRTHDAY</span>
            <div className="title-underline" />
          </div>
          <div className="title-word-group">
            <span className="title-word">SAILVI</span>
            <div className="title-underline" />
          </div>
        </div>
        
        {showButton && (
          <Button
            onClick={onNext}
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-fade-in"
          >
            Click for Surprise
          </Button>
        )}
      </div>
    </SlideShell>
  );
}
