import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { Grid, Typography } from "@material-ui/core";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song, style }) {
  return (
    <div className="videoFooter" style={style}>
      <div className="videoFooter__text">
        <div className="tags">
          &nbsp;
          <h5 className="trending">#trending</h5>
          <span> </span>
          <h5>#pro</h5> 
          &nbsp;
        </div>        

        <h3 className="roundedT">@{channel}</h3>
        <p className="roundedTRBR">{description}</p>
        <div className="videoFooter__ticker rounded">
          <Grid container direction="row" alignItems="center">
          <MusicNoteIcon className="videoFooter__icon" /> <strong style={{paddingLeft: 27 + 'px'}}>{song}</strong>
          </Grid>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
