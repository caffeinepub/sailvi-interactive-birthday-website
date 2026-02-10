import { SlideShell } from '../components/SlideShell';
import { FireworksCanvas } from '../components/FireworksCanvas';

export function Slide7FinalMessage() {
  return (
    <>
      <FireworksCanvas />
      <SlideShell className="!overflow-y-auto md:!overflow-hidden">
        <div className="final-message-container">
          <div className="final-message-content">
            <p className="mb-6">
              Happy Birthday, Salvi. Sometimes life introduces us to people who slowly become a beautiful part of our thoughts... and for me, you are that person. I don't know when it happened, but somewhere along the way, your smile started mattering, your happiness started feeling important, and your presence started feeling comforting.
            </p>
            <p className="mb-6">
              There is something about you that feels rare the way you are so effortlessly yourself. I truly hope life always protects your heart, keeps you surrounded with love, and gives you endless reasons to smile.
            </p>
            <p className="mb-8">
              And no matter what the future holds, I'll always be grateful that I got to know someone as genuinely beautiful as you - not just outside, but from within. Happy Birthday... always stay this special.
            </p>
            <p className="text-center mb-4">
              <span className="text-2xl">With Love 💖</span>
            </p>
            <p className="text-center mb-2 font-semibold">From —</p>
            <p className="text-center text-xl font-romantic">
              Your Night Disturber 💫
            </p>
            <p className="text-center text-lg italic opacity-90">
              (The one who steals your sleep sometimes 🌙)
            </p>
          </div>
        </div>
      </SlideShell>
    </>
  );
}
