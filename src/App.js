import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <React.Fragment>
      <div className="header" key={0}>
      <nav>
        <ul>
          <li className="logo"><a href="#">Bloxified <span className="mini" /></a></li>
          <li className="text"><a href="#">About</a></li>
          <li className="text"><a href="#">Skills</a></li>
          <li className="text"><a href="#">Portfolio</a></li>
          <li className="text"><a href="#">Contact</a></li>
        </ul>
      </nav>
      </div>

      <div className="app" key={1}>
      <div style={{height: 75 + 'px'}}></div>
          {videos.map(
            ({ url, channel, description, song, likes, messages, shares, id }) => (
              <React.Fragment>
              <div className="app__videos">
                <Video
                  url={url}
                  channel={channel}
                  song={song}
                  likes={likes}
                  messages={messages}
                  description={description}
                  shares={shares}
                  id={id}
                />
              </div>
              <div style={{height: 60 + 'px'}}></div>
              </React.Fragment>
            )
          )}
      </div>
    </React.Fragment>
  );
}

export default App;
