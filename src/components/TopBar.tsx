import React from 'react';
import { Menu, Minus, Square, X } from 'lucide-react';

interface TopBarProps {
  onToggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-[#1a1a1a] border-b border-gray-700 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleSidebar}
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
            <div className="text-white text-xs">✦</div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-400">
        Claude — Control+Alt+Space
      </div>
      
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <Minus size={16} />
        </button>
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <Square size={14} />
        </button>
        <button className="text-gray-400 hover:text-red-400 transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;