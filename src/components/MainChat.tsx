import React, { useState } from 'react';
import { Plus, Settings, Search, ArrowUp, Edit3, BookOpen, Code, Heart } from 'lucide-react';

const MainChat: React.FC = () => {
  const [message, setMessage] = useState('');

  const suggestions = [
    { icon: <Edit3 size={16} />, text: 'Write' },
    { icon: <BookOpen size={16} />, text: 'Learn' },
    { icon: <Code size={16} />, text: 'Code' },
    { icon: <Heart size={16} />, text: 'Life stuff' }
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 text-[#ff6b35]">
              ✦
            </div>
            <h1 className="text-4xl font-light text-gray-100">Hello, night owl</h1>
          </div>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-2xl">
          <div className="bg-[#2a2a2a] border border-gray-600 rounded-2xl p-4 mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can I help you today?"
              className="w-full bg-transparent text-gray-100 placeholder-gray-400 resize-none outline-none text-lg"
              rows={1}
              style={{ minHeight: '24px' }}
            />
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors">
                  <Plus size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors">
                  <Settings size={20} />
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                  <Search size={16} />
                  Research
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-lg text-sm text-gray-200">
                  <span>Claude Sonnet 4</span>
                </div>
                <button 
                  className="p-2 bg-[#ff6b35] hover:bg-[#e55a2b] text-white rounded-lg transition-colors"
                  disabled={!message.trim()}
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="flex items-center justify-center gap-3">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full transition-colors text-sm"
              >
                {suggestion.icon}
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChat;