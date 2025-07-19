import React, { useEffect, useState } from 'react';

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedPortfolio');
    if (!hasVisited) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('hasVisitedPortfolio', 'true');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-pink-300 rounded-2xl p-8 max-w-md text-center shadow-2xl animate-fadeIn">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">👋 Hello, I'm Nilamani Dhal</h1>
        <p className="text-md md:text-lg font-semibold text-gray-700 mb-2">
          A Computer Science Student & Web Developer
        </p>
        <p className="italic text-gray-600 mb-4">
          "Building creative digital experiences one line of code at a time"
        </p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Explore Portfolio
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
