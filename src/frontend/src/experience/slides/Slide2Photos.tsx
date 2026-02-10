import { useState } from 'react';
import { SlideShell } from '../components/SlideShell';
import { PopupModal } from '../components/PopupModal';
import { Button } from '@/components/ui/button';

interface Slide2PhotosProps {
  onNext: () => void;
}

const MESSAGES = [
  "Your smile has a way of making my day better without even trying. Stay this happy always.",
  "You are one of the sweetest parts of my life. I hope your birthday is as special as you are...",
  "You slowly became someone I care about more than I ever planned to...",
  "Maybe I don't always say what I feel, but somewhere deep inside... you hold a very special place that no one can replace.",
];

export function Slide2Photos({ onNext }: Slide2PhotosProps) {
  const [clickedPhotos, setClickedPhotos] = useState<Set<number>>(new Set());
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  const handlePhotoClick = (index: number) => {
    setClickedPhotos((prev) => new Set(prev).add(index));
    setActiveMessage(MESSAGES[index]);
  };

  const handleCloseModal = () => {
    setActiveMessage(null);
  };

  const allPhotosClicked = clickedPhotos.size === 4;

  return (
    <SlideShell>
      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => handlePhotoClick(num - 1)}
              className="photo-tile group"
            >
              <img
                src={`photo${num}.jpg`}
                alt={`Memory ${num}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ffc0cb" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23fff" font-size="20"%3EPhoto ' + num + '%3C/text%3E%3C/svg%3E';
                }}
              />
              {clickedPhotos.has(num - 1) && (
                <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                  <span className="text-4xl">💖</span>
                </div>
              )}
            </button>
          ))}
        </div>
        
        <p className="text-2xl text-pink-700 font-romantic mb-6">
          Tap on Photos 💖
        </p>
        
        {allPhotosClicked && (
          <Button
            onClick={onNext}
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-fade-in"
          >
            Next
          </Button>
        )}
      </div>
      
      {activeMessage && (
        <PopupModal message={activeMessage} onClose={handleCloseModal} />
      )}
    </SlideShell>
  );
}
