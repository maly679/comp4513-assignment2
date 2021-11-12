import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoriteBox = (props) => {
  return (
    <div id="favoritesBox">
      <h1>Favorites</h1>
      <hr/>
      <div id="favoritesList">
        {props.plays.map((p, index) => (
        <FavoriteItem play={p} removeFromLike={props.removeFromLike} 
        updateCurrent={props.updateCurrent} updateTab={props.updateTab}
          key={index}/>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBox;
