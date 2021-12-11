import React from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import Axios from "axios";

const FavoriteItem = (props) => {
  const info = () => {
    props.removeFromLike(props.play);
    message.info(props.play.title + " has been removed");
  };

  const updateCurrentPlay = () => {
    props.updateCurrent(props.play);

    Axios({
      method: "GET",
      withCredentials: true,
      url: `https://comp4513-assignment2.herokuapp.com/api/play/${props.play.id}`,
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("playInfo", JSON.stringify(data));
      });
  };

  const userInfo = { userData: props.userData, logout: props.logout };

  return (
    <div id="favoriteItem">
      <Link to={{ pathname: "/playDetails", state: { userInfo: userInfo } }}>
        <p onClick={updateCurrentPlay}> {props.play.title} </p>
      </Link>

      <button type="button" id="deleteButton" onClick={info}>
        Remove
      </button>
    </div>
  );
};

export default FavoriteItem;
