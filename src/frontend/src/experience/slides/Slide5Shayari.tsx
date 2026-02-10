import { useState } from 'react';
import { SlideShell } from '../components/SlideShell';
import { useSequentialReveal } from '../hooks/useSequentialReveal';
import { Button } from '@/components/ui/button';

interface Slide5ShayariProps {
  onNext: () => void;
}

const LEFT_LINES = [
  'ये खिताब,',
  'ये लिबाज,',
  'ये महफ़िल,',
  'ये गुलाब,',
  'ये चमक,',
  'ये धमक,',
  'ये तारे,',
  'ये सितारे,',
  'ये चांद,',
  'ये सूरज,',
  'ये शोर,',
  'ये मोर,',
  'ये शौक,',
  'ये श्रृंगार,',
  'ये फूल,',
  'ये इत्र,',
  'ये रंग,',
  'ये रूप,',
];

const RIGHT_LINES = [
  'ये पल,',
  'ये मंज़िल,',
  'ये मुसाफिर,',
  'ये कल,',
  'ये क्रीम,',
  'ये स्वीट,',
  'ये धुन,',
  'ये किनारा,',
  'ये सराहना,',
  'ये नज़ारा,',
  'ये तुम्हारा,',
  'ये हमारा,',
  'ये मैं,',
  'ये वो,',
  'ये हम,',
  'ये तुम,',
  'सब फेंके हैं,',
  'उसकी,',
  'एक झलक के आगे......',
];

export function Slide5Shayari({ onNext }: Slide5ShayariProps) {
  const [showButton, setShowButton] = useState(false);
  const totalLines = Math.max(LEFT_LINES.length, RIGHT_LINES.length);
  const visibleCount = useSequentialReveal(totalLines, 150, () => setShowButton(true));

  return (
    <SlideShell className="!overflow-y-auto md:!overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl w-full">
          <div className="shayari-column">
            {LEFT_LINES.map((line, index) => (
              <div
                key={index}
                className={`shayari-line ${index < visibleCount ? 'visible' : ''}`}
              >
                {line}
              </div>
            ))}
          </div>
          
          <div className="shayari-column">
            {RIGHT_LINES.map((line, index) => (
              <div
                key={index}
                className={`shayari-line ${index < visibleCount ? 'visible' : ''}`}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
        
        {showButton && (
          <Button
            onClick={onNext}
            size="lg"
            className="mt-8 bg-pink-500 hover:bg-pink-600 text-white text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-fade-in"
          >
            Next
          </Button>
        )}
      </div>
    </SlideShell>
  );
}
