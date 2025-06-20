import React, { useEffect, useRef } from 'react';

const FibonacciBackground = () => {
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

    // Fibonacci sequence
    const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    
    // Particles representing Fibonacci numbers
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      angle: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: fibonacci[Math.floor(Math.random() * fibonacci.length)] * 0.2,
        opacity: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.3 + 0.1,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Golden ratio for spiral
    const phi = (1 + Math.sqrt(5)) / 2;
    let spiralAngle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw multiple Fibonacci spirals
      const spiralCount = 3;
      for (let s = 0; s < spiralCount; s++) {
        ctx.strokeStyle = `rgba(65, 183, 131, ${0.03 + s * 0.02})`;
        ctx.lineWidth = 1 + s * 0.5;
        ctx.beginPath();
        
        const centerX = canvas.width * (0.2 + s * 0.3);
        const centerY = canvas.height * (0.3 + s * 0.2);
        const scale = 2 + s * 1.5;
        
        for (let i = 0; i < 200; i++) {
          const angle = i * 0.1 + spiralAngle * 0.001;
          const radius = scale * Math.sqrt(i) * phi;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      // Draw Fibonacci rectangles spiral
      ctx.strokeStyle = 'rgba(65, 183, 131, 0.08)';
      ctx.lineWidth = 2;
      
      const rectCenterX = canvas.width * 0.8;
      const rectCenterY = canvas.height * 0.7;
      let rectSize = 5;
      let rectX = rectCenterX;
      let rectY = rectCenterY;
      
      for (let i = 0; i < 8; i++) {
        const fibNum = fibonacci[i] || fibonacci[fibonacci.length - 1];
        const currentSize = fibNum * 3;
        
        ctx.strokeRect(rectX, rectY, currentSize, currentSize);
        
        // Draw quarter circle arc for spiral
        ctx.beginPath();
        ctx.arc(
          rectX + (i % 4 < 2 ? 0 : currentSize),
          rectY + (i % 4 === 0 || i % 4 === 3 ? currentSize : 0),
          currentSize,
          (i % 4) * Math.PI / 2,
          ((i % 4) + 1) * Math.PI / 2
        );
        ctx.stroke();
        
        // Update position for next rectangle
        switch (i % 4) {
          case 0: rectX -= fibonacci[i + 1] * 3; break;
          case 1: rectY -= fibonacci[i + 1] * 3; break;
          case 2: rectX += currentSize; break;
          case 3: rectY += currentSize; break;
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = `rgba(65, 183, 131, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      spiralAngle += 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default FibonacciBackground;