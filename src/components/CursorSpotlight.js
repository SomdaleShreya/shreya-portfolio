import React, { useState, useEffect } from 'react';
import '../styles/CursorSpotlight.scss';

const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="spotlight" style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};
export default CursorSpotlight;