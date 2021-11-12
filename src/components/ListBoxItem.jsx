import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const ListBoxItem = (props) => {
  const add = () => {
    props.addToLike(props.play);
  };

  const currentPlay = () => {
    
    props.updateCurrent(props.play);
    const url =
      "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=" +
      props.play.id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("playInfo", JSON.stringify(data));
      });
  };

  return (
    <div id="listBoxItems">
      <p id="playInfoTitle">{props.play.title}</p>
      <p id="playDate">{props.play.likelyDate}</p>
      <div id="playListButtons">

        <CSSTransition in={true}
        timeout={10000}
        classNames="fade"
        appear={true}>
        <button type="button" id="likeButton" onClick={add}>
          ❤
        </button>
        </CSSTransition>
        <Link to="/playDetails">
          <button type="button" onClick={currentPlay}>
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListBoxItem;