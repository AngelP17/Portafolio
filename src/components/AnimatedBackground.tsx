import React, { useEffect, useRef } from 'react';
import { useMouse } from '@uidotdev/usehooks';

export const AnimatedBackground = () => {
  const [mouse] = useMouse();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient that follows mouse */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
            left: `${mouse.x - 400}px`,
            top: `${mouse.y - 400}px`,
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96">
          <div className="w-full h-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        </div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80">
          <div className="w-full h-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-[float-delayed_10s_ease-in-out_infinite]" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72">
          <div className="w-full h-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-[float-slow_12s_ease-in-out_infinite]" />
        </div>

        {/* Animated waves */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3">
                  <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#3b82f6" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1">
                  <animate attributeName="stop-color" values="#8b5cf6;#3b82f6;#8b5cf6" dur="8s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <path
              d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z"
              fill="url(#wave-gradient)"
              className="animate-wave"
            />
            <path
              d="M0,150 Q250,100 500,150 T1000,150 L1000,200 L0,200 Z"
              fill="url(#wave-gradient)"
              className="animate-wave-delayed"
            />
          </svg>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </>
  );
}; 