import React from 'react';
import { Info, Calendar, User, Tag } from 'lucide-react';

const InfoPanel = () => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Info className="w-5 h-5" />
        Slide Information
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-gray-400 text-sm mb-2">Case Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              <span>Dr. Sarah Johnson</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-blue-400" />
              <span>ID: WSI-2024-0315</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-400 text-sm mb-2">Findings</h3>
          <p className="text-sm leading-relaxed">
            Examination reveals characteristic sickle-shaped erythrocytes, 
            indicating possible sickle cell disease. Multiple fields show 
            significant cell deformation with typical elongated morphology.
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 text-sm mb-2">Technical Details</h3>
          <div className="bg-gray-700/50 rounded-lg p-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div>Magnification</div>
              <div className="text-right">40x</div>
              <div>Resolution</div>
              <div className="text-right">0.25 µm/pixel</div>
              <div>Stain</div>
              <div className="text-right">H&E</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
          Export Report
        </button>
      </div>
    </div>
  );
}

export default InfoPanel;