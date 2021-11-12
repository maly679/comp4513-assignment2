import React from "react";

const CharactersTab = (props) => {  

  let i = [];
  i = JSON.parse(localStorage.getItem("playInfo"));
  const personas = i.persona;

  return (
    <div className="CharactersTab">
      {personas.map((p, index) => {
        return (
          <div className="allPlayers" key={index}>
            <p key={index} className="position">
              Position: {p.position}
            </p>
            <p key={p.player} className="player">
              {" "}
              {p.player}{" "}
            </p>
            <p key={p.desc} className="desc">
              {" "}
              {p.desc}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default CharactersTab;
