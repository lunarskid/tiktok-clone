import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares, id }) {
  const [playing, setPlaying] = useState(false);
  const [channelName, setChannelName] = useState('');

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!channelName) {
        getChannel(channel);
    }
  }, []);
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

  const getChannel = async (channel) => {
    var res = await channel.get()
    var data = res.data()
    console.log(data)

    setChannelName(data.username);
  }

  console.log(channelName)

  return (
      <div className="video">
        <video
          className="video__player"
          loop
          onClick={onVideoPress}
          ref={videoRef}
          src={url}
        ></video>
        <VideoFooter channel={channelName} description={description} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
      </div>
  );
}

export default Video;
