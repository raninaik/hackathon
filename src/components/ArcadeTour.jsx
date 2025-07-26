import React from 'react';

const ArcadeTour = ({ arcadeUrl }) => {
  if (!arcadeUrl) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Arcade link coming soon
          </h3>
          <p className="text-gray-600">
            We're preparing an interactive demo for you. Check back shortly!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Responsive iframe container with 16:9 aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={arcadeUrl}
          title="Interactive Demo"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border border-gray-200"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      
      {/* Optional caption */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Interactive demo • Click to explore
        </p>
      </div>
    </div>
  );
};

export default ArcadeTour;