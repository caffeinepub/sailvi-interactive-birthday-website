interface StartOverlayProps {
  onTap: () => void;
}

export function StartOverlay({ onTap }: StartOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={onTap}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-romantic text-pink-700 text-center px-8 breathing-text">
        Tap anywhere to start experience 💖
      </h1>
    </div>
  );
}
