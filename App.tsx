
import React, { useState } from 'react';
import GateResultModal from './components/GateResultModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] font-sans">
      {/* Header Section */}
      <header className="bg-white px-4 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/Bodkheom/gate-assets/main/logo.jpg" 
            alt="GATE Logo Left" 
            className="h-[84px] w-auto" 
          />
          <div className="flex flex-col">
             <span className="text-[15px] font-bold text-[#704794] leading-tight">GATE 2026</span>
             <span className="text-[13px] font-bold text-[#704794]">IIT GUWAHATI</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center py-4 md:py-0">
          <h1 className="text-[22px] md:text-[26px] font-bold text-[#704794] tracking-tight uppercase leading-none">
            GRADUATE APTITUDE TEST IN ENGINEERING 2026
          </h1>
          <h2 className="text-[18px] md:text-[22px] font-bold text-[#704794] mt-2 mb-2">
            अभियांत्रिकी स्नातक अभिक्षमता परीक्षा 2026
          </h2>
          <p className="text-[15px] md:text-[17px] font-bold text-[#2e7d32]">
            Organizing Institute : <span className="uppercase">Indian Institute of Technology Guwahati</span>
          </p>
        </div>

        <div className="flex items-center">
           <img 
             src="https://raw.githubusercontent.com/Bodkheom/gate-assets/main/logoright.jpg" 
             alt="GATE Logo Right" 
             className="h-[84px] w-auto" 
           />
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-[#704794] text-white px-4 md:px-12 py-2 flex flex-col md:flex-row items-center justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="text-[14px] font-bold tracking-wide">
          Enrollment ID: G120S21
        </div>
        <div className="flex gap-4 text-[14px] font-bold mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-purple-200">Home</span>
          <span className="cursor-pointer hover:text-purple-200">Logout</span>
          <span className="cursor-pointer hover:text-purple-200">Quick Links</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow bg-[#ffffff] p-4 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-[1100px]">
          {/* Welcome Box */}
          <div className="bg-[#f3eef9] p-4 rounded-[4px] flex items-center gap-3 border border-purple-100 shadow-sm mb-6">
            <svg className="w-5 h-5 text-[#704794]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-[#704794] font-medium text-[16px]">Welcome, OM BODKHE</span>
          </div>

          {/* Application Status Card */}
          <div className="bg-white rounded-[4px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-200">
            <div className="bg-[#704794] px-5 py-3">
              <h3 className="text-white font-medium text-[17px]">Application Status</h3>
            </div>
            
            <div className="p-5">
              <div className="border border-[#e2e8f0] rounded-[6px] overflow-hidden">
                <div className="grid grid-cols-[300px_1fr] border-b border-[#e2e8f0]">
                  <div className="bg-[#fcfaff] px-5 py-4 font-medium text-gray-700 border-r border-[#e2e8f0]">Enrollment Id</div>
                  <div className="px-5 py-4 text-gray-800">G120S21</div>
                </div>
                <div className="grid grid-cols-[300px_1fr] border-b border-[#e2e8f0]">
                  <div className="bg-[#fcfaff] px-5 py-4 font-medium text-gray-700 border-r border-[#e2e8f0]">Applicant Name</div>
                  <div className="px-5 py-4 text-gray-800 uppercase">OM BODKHE</div>
                </div>
                <div className="grid grid-cols-[300px_1fr]">
                  <div className="bg-[#fcfaff] px-5 py-4 font-medium text-gray-700 border-r border-[#e2e8f0]">Applicant Status</div>
                  <div className="px-5 py-4 text-[#704794] font-medium italic">Admit Card is available for download</div>
                </div>
              </div>

              {/* Accordion Part - Expanded as per screenshot */}
              <div className="mt-5 border border-gray-200 rounded-[4px]">
                <div className="p-4 flex items-center justify-between border-b border-gray-100">
                  <span className="text-[13px] text-gray-700 font-medium">Application Form and Admit Card Download</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
                
                <div className="p-6 flex flex-wrap justify-center gap-4 bg-white">
                  <button className="px-5 py-2.5 border border-gray-300 rounded-[4px] text-[11px] font-bold text-gray-500 uppercase tracking-tight hover:bg-gray-50 transition-colors">
                    DOWNLOAD APPLICATION FORM
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-5 py-2.5 bg-[#704794] text-white rounded-[4px] text-[11px] font-bold uppercase tracking-tight hover:bg-purple-800 transition-colors"
                  >
                    DOWNLOAD ADMIT CARD (CS)
                  </button>
                  <button className="px-5 py-2.5 bg-[#704794] text-white rounded-[4px] text-[11px] font-bold uppercase tracking-tight hover:bg-purple-800 transition-colors">
                    DOWNLOAD ADMIT CARD (DA)
                  </button>
                </div>
              </div>

              {/* Fingerprint footer inside card */}
              <div className="mt-8 text-right">
                <span className="text-[11px] text-gray-500 italic">Digital FingerPrint: e3468b7f3ac502bf62a0be08db113eb1</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#704794] text-white py-2.5 text-center text-[12px] font-medium">
        Copyright © <span className="underline cursor-pointer">GATE</span> 2026.
      </footer>

      {/* Result Modal Overlay */}
      {isModalOpen && (
        <GateResultModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
