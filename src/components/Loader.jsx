'use client';
import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const marketingMessages = [
    { title: "Revolutionizing HR Management", subtitle: "Transforming paperwork into productivity..." },
    { title: "Empowering Your Workforce", subtitle: "Building the future of employee management..." },
    { title: "Streamlining Your Business", subtitle: "Optimizing HR processes for maximum efficiency..." },
    { title: "Unlocking Potential", subtitle: "Your complete HR solution is moments away..." }
  ];

  useEffect(() => {
    // Message rotation effect
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % marketingMessages.length);
    }, 800);

    // Simulate minimum loading time of 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
    };
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#111826] to-[#1c2637]">
      <div className="relative w-full max-w-3xl p-8 text-center mx-auto">
        {/* Brand Logo Animation */}
        <div className="mb-12 relative">
          <DotLottieReact
            src="https://lottie.host/d4e391d9-6a05-49c2-9abd-83a040b38dfc/uYqPEi8MYN.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '240px' }}
          />
        </div>
        
        {/* Animated Marketing Messages */}
        <div className="mt-4 h-40">
          <div className="transform transition-all duration-500 ease-in-out">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              {marketingMessages[currentMessageIndex].title}
            </h2>
            <p className="text-[#a89456] text-xl animate-fade-in">
              {marketingMessages[currentMessageIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Enhanced Loading Progress Bar */}
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-700/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#a89456] to-[#d4b872] rounded-full transition-all duration-1000 ease-out"
              style={{
                width: '100%',
                animation: 'progress 2.5s ease-out'
              }}
            />
          </div>
          <div className="mt-4 text-gray-400 text-sm font-medium">
            Initializing your premium HR experience...
          </div>
        </div>
      </div>

      {/* Loading Progress Animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        :global(.animate-fade-in) {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;