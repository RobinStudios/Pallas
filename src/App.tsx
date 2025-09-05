import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import TopBar from './components/TopBar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-gray-100">
      <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-12">
        {sidebarOpen && <Sidebar />}
        <MainChat />
      </div>
    </div>
  );
}

export default App;