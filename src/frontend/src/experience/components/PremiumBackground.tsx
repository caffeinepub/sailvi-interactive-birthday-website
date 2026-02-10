import { useEffect, useRef } from 'react';

export function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Glow circles
    const glowCircles = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 80 + Math.random() * 120,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: 0.15 + Math.random() * 0.15,
    }));

    // Balloons
    const balloons = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: 30 + Math.random() * 40,
      speed: 0.5 + Math.random() * 1,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.01 + Math.random() * 0.02,
    }));

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glow circles
      glowCircles.forEach((circle) => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;

        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        gradient.addColorStop(0, `rgba(255, 192, 221, ${circle.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 192, 221, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw balloons
      balloons.forEach((balloon) => {
        balloon.y += balloon.speed;
        balloon.sway += balloon.swaySpeed;
        
        if (balloon.y > canvas.height + balloon.size) {
          balloon.y = -balloon.size;
          balloon.x = Math.random() * canvas.width;
        }

        const swayOffset = Math.sin(balloon.sway) * 20;
        const x = balloon.x + swayOffset;

        // Balloon body
        ctx.fillStyle = 'rgba(255, 182, 193, 0.6)';
        ctx.beginPath();
        ctx.ellipse(x, balloon.y, balloon.size * 0.4, balloon.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Balloon highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.ellipse(
          x - balloon.size * 0.15,
          balloon.y - balloon.size * 0.15,
          balloon.size * 0.15,
          balloon.size * 0.2,
          0, 0, Math.PI * 2
        );
        ctx.fill();

        // String
        ctx.strokeStyle = 'rgba(255, 182, 193, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, balloon.y + balloon.size * 0.5);
        ctx.lineTo(x, balloon.y + balloon.size * 0.8);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-[#ffe6f0] via-[#ffd6e7] to-[#ffc2dd]" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ mixBlendMode: 'normal' }}
      />
    </>
  );
}
