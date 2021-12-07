import React from "react";
import { Link } from "react-router-dom";

const FavoriteItemDetails = (props) => {
  const remove = () => {
    props.removeFromLike(props.play);
    alert(props.play.title + " has been removed from favorite");
  };

  const updateCurrentPlay = () => {
    props.updateCurrent(props.play);

    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+ props.play.id;
    fetch (url)
    .then (response => response.json())
    .then(data => { localStorage.setItem("playInfo", JSON.stringify(data))} )
    
    props.updateTab();
  }

  

  return (
    <div id="favoriteItem">
      <Link to="/playDetails">
        <p onClick={updateCurrentPlay}> {" "}
          {props.play.title}{" "} </p>

      </Link>

      <button type="button" id="deleteButton" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export default FavoriteItemDetails;
