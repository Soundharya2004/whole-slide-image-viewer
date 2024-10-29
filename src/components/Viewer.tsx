import React, { useRef, useEffect } from 'react';

interface ViewerProps {
  zoomLevel: number;
  position: { x: number; y: number };
  setPosition: (pos: { x: number; y: number }) => void;
}

const Viewer: React.FC<ViewerProps> = ({ zoomLevel, position, setPosition }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const deltaX = (e.clientX - lastPosition.current.x) / zoomLevel;
    const deltaY = (e.clientY - lastPosition.current.y) / zoomLevel;

    setPosition({
      x: position.x - deltaX,
      y: position.y - deltaY,
    });

    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-gray-950 overflow-hidden cursor-move"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div 
        className="w-full h-full transition-transform duration-100"
        style={{
          transform: `scale(${zoomLevel}) translate(${-position.x}px, ${-position.y}px)`,
          backgroundImage: 'url(https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}

export default Viewer;