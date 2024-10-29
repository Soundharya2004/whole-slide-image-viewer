import React from 'react';

interface HubViewProps {
  position: { x: number; y: number };
}

const HubView: React.FC<HubViewProps> = ({ position }) => {
  const viewportSize = { width: 200, height: 200 };
  const pointerSize = 40;

  // Calculate pointer position based on main viewer position
  const pointerPosition = {
    left: `${Math.min(Math.max((position.x / 1000) * 100, 0), 100)}%`,
    top: `${Math.min(Math.max((position.y / 1000) * 100, 0), 100)}%`,
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-sm font-medium mb-3">Navigation Overview</h3>
      <div className="relative w-full pt-[100%] bg-gray-900 rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80)'
          }}
        >
          <div 
            className="absolute w-10 h-10 border-2 border-blue-500 bg-blue-500/20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={pointerPosition}
          />
        </div>
      </div>
    </div>
  );
}

export default HubView;