import React, { useState } from 'react';

function CaptionForm({ setVideoURL, addCaption }) {
  const [url, setUrl] = useState('');
  const [captionText, setCaptionText] = useState('');
  const [captionTimestamp, setCaptionTimestamp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoURL(url);
    addCaption({ text: captionText, timestamp: parseInt(captionTimestamp) });
    setCaptionText('');
    setCaptionTimestamp('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block mb-1 text-green-500" htmlFor="videoURL">Video URL:</label>
        <input
          type="url"
          id="videoURL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-green-500" htmlFor="captionText">Caption Text:</label>
        <textarea
          id="captionText"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-green-500" htmlFor="captionTimestamp">Caption Timestamp (in seconds):</label>
        <input
          type="number"
          id="captionTimestamp"
          value={captionTimestamp}
          onChange={(e) => setCaptionTimestamp(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg">Add Caption</button>
    </form>
  );
}

export default CaptionForm;
