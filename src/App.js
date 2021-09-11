import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Video from "./Video";
import db from "./firebase";
import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import Explore from "@material-ui/icons/Explore";
import Publish from "@material-ui/icons/Publish";
import Menu from "@material-ui/icons/MoreVert";
import Theme from "@material-ui/icons/BrightnessMedium";
import Chat from '@material-ui/icons/Chat';
import Developer from "@material-ui/icons/Code";
import Store from '@material-ui/icons/Store';
import Settings from '@material-ui/icons/Settings';

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="header" key={0}>
          <nav>
            <ul>
              <li></li>
              <li className="logo">
                <a href="/">
                  Bloxified <span className="mini" />
                </a>
              </li>
              <li className="text">
                <Grid container direction="row" alignItems="center">
                  <Explore fontSize="large" /> <a href="/explore">Explore</a>
                </Grid>
              </li>
              <li className="text">
                <Grid container direction="row" alignItems="center">
                  <Store fontSize="large" /> <a href="/store">Store</a>
                </Grid>
              </li>
              <li className="text">
                <Grid container direction="row" alignItems="center">
                  <Developer fontSize="large" /> <a href="/developers">Developers</a>
                </Grid>
              </li>
              <li className="text">
                <Grid container direction="row" alignItems="center">
                  <Chat fontSize="large" /> <a href="/chatting">Chatting</a>
                </Grid>
              </li>
              <li className="text">
                <Grid container direction="row" alignItems="center">
                  <Publish fontSize="large" /> <a href="/upload">Upload</a>
                </Grid>
              </li>
              <li className="text alignRight">
                <Grid container direction="row" alignItems="center">
                  <Settings fontSize="large" />
                </Grid>
              </li>
            </ul>
          </nav>
        </div>
        <div className="app" key={1}>
          <div style={{ height: 75 + "px" }}></div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(videos)

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <React.Fragment>
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
            <div style={{ height: 60 + "px" }}></div>
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h1>Users</h1>;
}

function Upload() {
  return (
    <React.Fragment>
      <h1>Upload</h1>
    </React.Fragment>
  );
}

function NotFound() {
  return <h1>404</h1>;
}

export default App;
