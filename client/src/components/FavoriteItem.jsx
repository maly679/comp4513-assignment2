import React from "react";
import { Link } from "react-router-dom";
import { message} from 'antd';

const FavoriteItem = (props) => {

  const info = () => {
    props.removeFromLike(props.play);
    message.info(props.play.title + " has been removed");
  };

  const updateCurrentPlay = () => {
    props.updateCurrent(props.play);
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+ props.play.id;
    fetch (url)
    .then (response => response.json())
    .then(data => { localStorage.setItem("playInfo", JSON.stringify(data))} )
  }

  

  return (
    <div id="favoriteItem">


      <Link to="/playDetails">
        <p onClick={updateCurrentPlay}> {" "}
          {props.play.title}{" "} </p>
      </Link>
      
      <button type="button" id="deleteButton" onClick={info}>
        Remove
      </button>

      

    </div>

    
  );
};

export default FavoriteItem;
