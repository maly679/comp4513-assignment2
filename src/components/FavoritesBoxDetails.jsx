import React from "react";
import FavoriteItemDetails from "./FavoriteItemDetails";

const FavoriteBoxDetails = (props) => {
  return (
    <div id="favoritesBox">
      <h1>Favorites</h1>
      <hr/>
      <div id="favoritesList">
        {props.plays.map((p, index) => (
        <FavoriteItemDetails play={p} removeFromLike={props.removeFromLike} 
        updateCurrent={props.updateCurrent} updateTab={props.updateTab}
          key={index}/>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBoxDetails;
