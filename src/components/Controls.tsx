import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ControlsProps {
  onZoom: (delta: number) => void;
  zoomLevel: number;
}

const Controls: React.FC<ControlsProps> = ({ onZoom, zoomLevel }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 bg-gray-700 rounded-lg overflow-hidden">
        <button 
          onClick={() => onZoom(-0.5)}
          className="p-2 hover:bg-gray-600 transition-colors"
          disabled={zoomLevel <= 0.5}
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <span className="px-2 min-w-[3rem] text-center">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button 
          onClick={() => onZoom(0.5)}
          className="p-2 hover:bg-gray-600 transition-colors"
          disabled={zoomLevel >= 5}
        >
          <ZoomIn className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Controls;