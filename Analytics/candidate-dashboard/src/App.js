import React from 'react';
import CandidateAnalysis from './components/CandidateAnalysis';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <CandidateAnalysis />
      </div>
    </div>
  );
}

export default App;