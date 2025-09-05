import React from 'react';
import { Plus, MessageCircle, Folder, Layers, ChevronDown } from 'lucide-react';

const Sidebar: React.FC = () => {
  const recentChats = [
    'Die Welcome Screen Frontend',
    'JavaScript Syntax Error Explain...',
    '3D Room CSS Scroll Animation',
    'Video-LLaVA for Mobile Robotics',
    'Video LLM Integration Research',
    'Die Welcome Interface Rebuild',
    'Untitled',
    'Global News Blog Automation W...',
    'StreamMind Real-Time Video AI',
    'Untitled',
    'Logistics Lead Cover Letter Draft',
    'B12 to MCP Mobile App Integrati...',
    'Website Template Extraction',
    'Untitled',
    'QML for AI Assistant Interface',
    'OSSEC HIDS Installation Logs',
    'OSSEC Docker Threat Automati...',
    'Website Mirroring Request',
    'GIS Analyst Cover Letter Drafting',
    'Website Replication Request'
  ];

  return (
    <div className="w-64 bg-[#1a1a1a] border-r border-gray-700 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
            <div className="text-white text-sm font-bold">C</div>
          </div>
          <h1 className="text-xl font-semibold text-gray-100">Claude</h1>
        </div>
        
        <button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-lg py-2.5 px-4 flex items-center gap-2 font-medium transition-colors">
          <Plus size={18} />
          New chat
        </button>
      </div>

      {/* Navigation */}
      <div className="px-4 py-4 border-b border-gray-700">
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-gray-100 transition-colors">
            <MessageCircle size={20} />
            <span>Chats</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-gray-100 transition-colors">
            <Folder size={20} />
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-gray-100 transition-colors">
            <Layers size={20} />
            <span>Artifacts</span>
          </a>
        </nav>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-4">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Recents</h3>
          <div className="space-y-1">
            {recentChats.map((chat, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-gray-100 transition-colors text-sm truncate"
              >
                {chat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom User Section */}
      <div className="px-4 py-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
              D
            </div>
            <div>
              <div className="text-gray-100 font-medium">Dante</div>
              <div className="text-gray-400 text-xs">Max plan</div>
            </div>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;