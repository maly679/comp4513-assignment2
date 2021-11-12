import React from "react";
import Highlighter from "react-highlight-words";

const TextTab = (props) => {

  if (props.currentSpeaker === "") {
    return (
      <div className="TextTab">
        <h1>{props.playInfo.title}</h1>
        <h2> {props.currentAct}</h2>
        <h3> {props.currentScene}</h3>
        <hr></hr>
        <div id="sceneSpeeches">
          {props.playInfo.acts.map((a) => {
            if (a.name === props.currentAct) {
              return a.scenes.map((s, index) => {
                if (s.name === props.currentScene) {
                  return (
                    <div id="actSceneDirection" key={index}>
                      <h4> {s.title} </h4>
                      <h4> {s.stageDirection}</h4>
                    </div>
                  );
                }
              });
            }
          })}
        </div>
      </div>
    );
  } else {
    
    return (
      <div className="TextTab">
        <h1>{props.playInfo.title}</h1>
        <h2> {props.currentAct}</h2>
        <h3> {props.currentScene}</h3>
        <hr></hr>
        <div id="speakerSpeeches">
          {props.playInfo.acts.map((a) => {
            if (a.name === props.currentAct) {
              return a.scenes.map((s) => {
                if (s.name === props.currentScene) {
                  return s.speeches.map((speeches, index) => {
                    if (speeches.speaker === props.currentSpeaker) {
                      return (
                        <div key={index}>
                          <Highlighter
                            searchWords={[props.highlightedWord]}
                            textToHighlight={String(speeches.speaker)}
                          />:
                          <br /> 
                          <Highlighter
                            searchWords={[props.highlightedWord]}
                            textToHighlight={String(speeches.lines)}
                          />
                          <br /> <br />
                        </div>
                      );
                    }
                  });
                }
              });
            }
          })}
        </div>
      </div>
    );
  }
};
export default TextTab;
