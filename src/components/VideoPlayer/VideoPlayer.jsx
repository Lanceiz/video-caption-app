import React, { useRef, useEffect, useState } from 'react';

function VideoPlayer({ videoURL, captions }) {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = Math.floor(videoRef.current.currentTime);
      const activeCaption = captions.find(caption => caption.timestamp === currentTime);
      if (activeCaption) {
        setCurrentCaption(activeCaption.text);
      } else {
        setCurrentCaption('');
      }
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [captions]);

  return (
    <div className="relative">
      <video ref={videoRef} src={videoURL} controls className="w-full"></video>
      {currentCaption && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded">
          {currentCaption}
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
