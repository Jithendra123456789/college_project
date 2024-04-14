// src/components/VideoPlayer.js
import React, { useState } from "react";
import "../styles/VideoPlayer.css";
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const iframe = document.getElementById("youtube-iframe");

    if (isPlaying) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    } else {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="embed-video">
      <iframe
        id="youtube-iframe"
        width="640"
        height="360"
        src="https://www.youtube-nocookie.com/embed/lky2P_aw6nc"
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {/* <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}
    </div>
  );
};

export default VideoPlayer;
