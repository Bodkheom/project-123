
import React from 'react';
import QualifyingMarks from './QualifyingMarks';

interface GateResultModalProps {
  onClose: () => void;
}

const GateResultModal: React.FC<GateResultModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-10 px-4 overflow-y-auto">
      <div className="bg-white w-full max-w-6xl shadow-xl border border-gray-300 rounded-sm mb-10">
        {/* Title Bar */}
        <div className="px-4 py-2 border-b border-gray-200 bg-white">
          <h1 className="text-[17px] text-gray-500 font-normal">Your GATE 2026 Result [CS]</h1>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side: Information Fields */}
            <div className="flex-1 space-y-4">
              <div>
                <span className="gate-label">Name</span>
                <div className="gate-value-box">OM BODKHE</div>
              </div>
              <div>
                <span className="gate-label">Registration Number</span>
                <div className="gate-value-box">CS25S26207365</div>
              </div>
              <div>
                <span className="gate-label">Gender</span>
                <div className="gate-value-box">Male</div>
              </div>
              <div>
                <span className="gate-label">Parent's/Guardian's name</span>
                <div className="gate-value-box">RAMARAO BODKHE</div>
              </div>
              <div>
                <span className="gate-label">Date of Birth (YYYY-MM-DD)</span>
                <div className="gate-value-box">2005-04-09</div>
              </div>
              <div>
                <span className="gate-label">Test Paper</span>
                <div className="gate-value-box uppercase">Computer Science and Information Technology (CS)</div>
              </div>
            </div>

            {/* Right side: Photo and Signature */}
            <div className="w-full lg:w-[280px] flex flex-col items-center">
              <div className="w-[220px] h-[260px] border border-gray-400 bg-white p-[2px] shadow-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/Bodkheom/gate-assets/main/photo.jpg" 
                  alt="Photograph" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== 'https://picsum.photos/seed/gate/220/260') {
                      target.src = 'https://picsum.photos/seed/gate/220/260';
                    }
                  }}
                />
              </div>
              <p className="mt-2 text-[13px] text-center font-normal">Photograph</p>

              <div className="mt-6 w-[200px] h-[70px] border border-gray-400 bg-white flex items-center justify-center p-2 shadow-sm">
                <img 
                  src="https://raw.githubusercontent.com/Bodkheom/gate-assets/main/signature.jpg" 
                  alt="Signature" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.className = 'hidden';
                    const parent = target.parentElement;
                    if(parent) {
                      parent.innerHTML = '<span class="text-3xl font-serif italic text-black" style="font-family: \'Dancing Script\', cursive;">Om</span>';
                    }
                  }}
                />
              </div>
              <p className="mt-1 text-[13px] text-center font-normal">Signature</p>
            </div>
          </div>

          {/* Performance Metrics Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-[auto_350px_auto_150px] gap-y-6 items-center">
            {/* Row 1: Marks and AIR */}
            <div className="gate-score-label">Marks out of 100<sup>#</sup></div>
            <div className="gate-value-box ml-2">36.67</div>
            <div className="gate-score-label md:pl-6 text-right">All India Rank in this test paper</div>
            <div className="gate-value-box text-center justify-center ml-2">15164</div>

            {/* Row 2: Qualifying Marks and GATE Score */}
            <div className="gate-score-label self-start mt-2">Qualifying Marks<sup>##</sup></div>
            <div className="flex gap-2 ml-2">
              <QualifyingMarks label="General" value="30" />
              <QualifyingMarks label="OBC-NCL/EWS" value="27" />
              <QualifyingMarks label="SC/ST/PwD" value="20" />
            </div>
            <div className="gate-score-label md:pl-6 text-right">GATE Score</div>
            <div className="gate-value-box text-center justify-center ml-2">421</div>
          </div>

          {/* Footnotes */}
          <div className="mt-14 space-y-1">
            <p className="footnote">
              *Normalised marks in case of multisession papers (CE and CS).
            </p>
            <p className="footnote">
              <sup>##</sup>A candidate is considered qualified if the marks secured are greater than or equal to the qualifying marks mentioned for the category, for which a valid category certificate, if applicable, must be produced along with the Score Card.
            </p>
          </div>
        </div>

        {/* Footer with Close Button */}
        <div className="px-4 py-3 flex justify-end border-t border-gray-200 bg-white">
          <button 
            onClick={onClose}
            className="px-6 py-1 border border-gray-400 rounded-sm text-[12px] font-normal text-gray-700 hover:bg-gray-100 transition-colors bg-white shadow-sm uppercase tracking-wider"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GateResultModal;
