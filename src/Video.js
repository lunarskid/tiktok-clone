import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares, id }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);

      view(id)
    }
  };

  console.log(id)

  function view (videoID) {
    const data = { "id": videoID };

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(data),
    }

    fetch("https://en9bpgemtyzb.x.pipedream.net/", options)
  }

  return (
      <div className="video">
        <video
          className="video__player"
          loop
          onClick={onVideoPress}
          ref={videoRef}
          src={url}
        ></video>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
      </div>
  );
}

export default Video;
