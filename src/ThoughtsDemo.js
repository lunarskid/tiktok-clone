import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function ThoughtfulThoughts() {
    var data = {
      opacity: 0.4,
      thoughts:
        [
          "made by pkoelin and ab",
          "You made the whole building explode cuz you didn't buy bloxified premium",
          "you should tel your parents to download dis ting",
          "ThIs Is NoT dE uPlOaD pAgE",
          "get on trending please",
          "why did we make this",
          "The social app for everyone, including you and your loaf cat.",
          "this is pretty poggers download the app today guys",
          "opt in to the beta please",
          "this is the best app ever",
          "celebrating v3.1 beta",
          "rated as editors choice on googel play",
          "i beg you to donate to the project on patreon",
          "i feel like an astronaut in the ocean",
          "whacha know about rollin down in the deep",
          "powered by dogs we found on the street (go clean the dog's poop pls)",
          "this project was started on Saturday, 08 May 2021 at 18:15:58 UTC",
          "check this on github, @Bloxified/bloxified",
          "dnot evr buaey noh weeied fruom za ghas shtayshin",
          "its time",
          "marverl",
          "the social app for crackheads alike",
          "Line 52:14: 'bloxified' is not defined",
          "pls help us",
          "these were infact written by a human",
          "we are not aliens dont worry scientists",
          "coming boss ma'am",
          "yes ma'am we need the 16 digits on ur credit card to verify this"
        ]
    }

    let [funny, setFunny] = React.useState("")
    let [opacity, setOpacity] = React.useState(0)

    var makeAppear = () => {
      let the_funny = Math.floor(Math.random() * data.thoughts.length);

      setFunny(data.thoughts[the_funny])
      setOpacity(opacity + 0.2);
    }

    return (
      <React.Fragment>
      <div style={{ height: 75 + "px" }}></div>
      <div className="thoughts">
        <div className="current-thought" style={{opacity: opacity}}>
         <h3 style={{color: "white"}}>{funny}</h3>
        </div>
        <button onClick={makeAppear} style={{paddingLeft: "4px", paddingRight: "4px"}}>Think for me</button>
      </div>
      </React.Fragment>
    );
}

export default ThoughtfulThoughts;
