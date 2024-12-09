import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import QuickActions from './components/dashboard/QuickActions';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Welcome back!</h2>
            <section className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <QuickActions />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;