import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Axios from "axios";

const ListBoxItem = (props) => {
  const add = () => {
    props.addToLike(props.play);
  };

  const currentPlay = () => {
    props.updateCurrent(props.play);
    Axios({
      method: "GET",
      withCredentials: true,
      url: `https://comp4513-assignment2.herokuapp.com/api/play/${props.play.id}`,
    })
      .then((response) => response.JSON())
      .then((data) => {
        localStorage.setItem("playInfo", JSON.stringify(data));
      });
  };

  const userInfo = { userData: props.userData, logout: props.logout };

  return (
    <div id="listBoxItems">
      <p id="playInfoTitle">{props.play.title}</p>
      <p id="playDate">{props.play.likelyDate}</p>
      <div id="playListButtons">
        <CSSTransition
          in={true}
          timeout={10000}
          classNames="fade"
          appear={true}
        >
          <button type="button" id="likeButton" onClick={add}>
            ❤
          </button>
        </CSSTransition>
        <Link to={{ pathname: "/playDetails", state: { userInfo: userInfo } }}>
          <button type="button" id="viewButton" onClick={currentPlay}>
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListBoxItem;
