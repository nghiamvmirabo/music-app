import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Player({ url }) {
  const handlePlay = (e) => console.log(e);
  return (
    <div>
      <ReactAudioPlayer autoPlay src={url} onPlay={handlePlay} />
    </div>
  );
}
