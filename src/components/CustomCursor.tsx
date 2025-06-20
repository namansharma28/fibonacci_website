import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [fibNumbers, setFibNumbers] = useState<Array<{ x: number; y: number; number: number; id: number }>>([]);
  
  const trailRef = useRef<number>(0);
  const fibRef = useRef<number>(0);
  const fibSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  const fibIndex = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail
      setTrails(prev => {
        const newTrail = { x: e.clientX, y: e.clientY, id: trailRef.current++ };
        const updated = [...prev, newTrail].slice(-8);
        return updated;
      });

      // Occasionally add Fibonacci numbers
      if (Math.random() < 0.1) {
        setFibNumbers(prev => {
          const newFib = {
            x: e.clientX + (Math.random() - 0.5) * 40,
            y: e.clientY + (Math.random() - 0.5) * 40,
            number: fibSequence[fibIndex.current % fibSequence.length],
            id: fibRef.current++
          };
          fibIndex.current++;
          return [...prev, newFib].slice(-5);
        });
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('a, button, [role="button"]')) {
        setIsHovering(true);
        setCursorType('hover');
      } else if (target.matches('input, textarea, [contenteditable]')) {
        setCursorType('text');
      } else if (target.matches('code, pre, .code-section *')) {
        setCursorType('code');
      } else if (target.closest('.hero-section, .fibonacci-section')) {
        setCursorType('fibonacci');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorType('default');
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Clean up trails periodically
    const trailCleanup = setInterval(() => {
      setTrails(prev => prev.slice(-5));
    }, 100);

    // Clean up Fibonacci numbers
    const fibCleanup = setInterval(() => {
      setFibNumbers(prev => prev.slice(-3));
    }, 1000);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      clearInterval(trailCleanup);
      clearInterval(fibCleanup);
    };
  }, []);

  // Don't render on mobile devices
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    if (isMobile) return;
  }, []);

  if (window.innerWidth <= 768) return null;

  const getCursorStyle = () => {
    const baseStyle = {
      left: mousePosition.x - 10,
      top: mousePosition.y - 10,
      position: 'fixed' as const,
      pointerEvents: 'none' as const,
      zIndex: 9999,
      transition: 'transform 0.1s ease',
    };

    switch (cursorType) {
      case 'hover':
        return {
          ...baseStyle,
          width: '40px',
          height: '40px',
          background: 'rgba(65, 183, 131, 0.2)',
          border: '2px solid #41B783',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        };
      case 'text':
        return {
          ...baseStyle,
          width: '2px',
          height: '20px',
          background: '#41B783',
          borderRadius: '1px',
          transform: 'translate(-50%, -50%)',
        };
      case 'code':
        return {
          ...baseStyle,
          width: '20px',
          height: '20px',
          background: 'transparent',
          border: '2px solid #41B783',
          borderRadius: '4px',
          transform: 'translate(-50%, -50%) rotate(45deg)',
        };
      case 'fibonacci':
        return {
          ...baseStyle,
          width: '30px',
          height: '30px',
          background: 'transparent',
          border: '2px solid #41B783',
          borderRadius: '50%',
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          transform: 'translate(-50%, -50%)',
          animation: 'fibonacci-spin 2s linear infinite',
        };
      default:
        return {
          ...baseStyle,
          width: '20px',
          height: '20px',
          background: '#41B783',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference' as const,
        };
    }
  };

  return (
    <>
      {/* Main cursor */}
      <div style={getCursorStyle()} />
      
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          style={{
            position: 'fixed',
            left: trail.x - 2,
            top: trail.y - 2,
            width: '4px',
            height: '4px',
            background: '#41B783',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            opacity: (index + 1) / trails.length * 0.6,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}

      {/* Fibonacci numbers */}
      {fibNumbers.map((fib) => (
        <div
          key={fib.id}
          className="fib-number"
          style={{
            left: fib.x,
            top: fib.y,
          }}
        >
          {fib.number}
        </div>
      ))}

      {/* Mathematical symbol for code sections */}
      {cursorType === 'code' && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x + 15,
            top: mousePosition.y - 15,
            pointerEvents: 'none',
            zIndex: 9999,
            fontFamily: 'Courier New, monospace',
            fontSize: '14px',
            color: '#41B783',
            fontWeight: 'bold',
          }}
        >
          φ
        </div>
      )}
    </>
  );
};

export default CustomCursor;