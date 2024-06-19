import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CaptionForm from './components/CaptionForm/CaptionForm';

function App() {
  const [videoURL, setVideoURL] = useState('');
  const [captions, setCaptions] = useState([]);

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="rounded-lg bg-green-100 shadow-lg p-6 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-500">Video Captioning Tool</h1>
        <CaptionForm setVideoURL={setVideoURL} addCaption={addCaption} />
        <VideoPlayer videoURL={videoURL} captions={captions} />
      </div>
    </div>
  );
}

export default App;

