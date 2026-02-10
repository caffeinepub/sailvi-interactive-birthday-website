import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PopupModalProps {
  message: string;
  onClose: () => void;
}

export function PopupModal({ message, onClose }: PopupModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/95 rounded-3xl p-8 max-w-md w-full shadow-2xl popup-enter">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-600 hover:text-pink-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <p className="text-lg md:text-xl text-pink-900 leading-relaxed font-romantic text-center">
          {message}
        </p>
      </div>
    </div>
  );
}
