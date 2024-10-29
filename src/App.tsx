import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Move, Info } from 'lucide-react';
import Viewer from './components/Viewer';
import InfoPanel from './components/InfoPanel';
import HubView from './components/HubView';
import Controls from './components/Controls';

function App() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.5), 5));
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex">
      {/* Left Panel - Info */}
      <div className="w-80 bg-gray-800 p-4 border-r border-gray-700">
        <InfoPanel />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Controls */}
        <div className="h-16 bg-gray-800 flex items-center justify-between px-6 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">WSI Viewer</h1>
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1.5 rounded-md">
              <Move className="w-4 h-4" />
              <span className="text-sm">Pan Mode</span>
            </div>
          </div>
          <Controls onZoom={handleZoom} zoomLevel={zoomLevel} />
        </div>

        {/* Main Viewer Area */}
        <div className="flex-1 flex">
          <div className="flex-1 relative">
            <Viewer 
              zoomLevel={zoomLevel} 
              position={position} 
              setPosition={setPosition}
            />
          </div>

          {/* Right Hub View */}
          <div className="w-64 bg-gray-800 p-4 border-l border-gray-700">
            <HubView position={position} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;