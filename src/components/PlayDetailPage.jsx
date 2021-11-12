import React, { useEffect, useState } from "react";
import HeaderBar from "./HeaderBar";
import FavoriteBoxDetails from "./FavoritesBoxDetails";
import Tabs from "./TabComponent/Tabs";
import { Link } from "react-router-dom";
import "../App.css";

const PlayDetailPage = (props) => {
  const [tab, setTab] = useState("Details");
  const [currentAct, setCurrentAct] = useState("ACT I");
  const [currentScene, setCurrentScene] = useState("SCENE I");
  const [currentSpeaker, setCurrentSpeaker] = useState("");
  const [highlightedWord, setHighlightedWord] = useState("");

  const tabIsText = (tab) => {
    setTab(tab);
  };

  const updateTabThroughClick = () => {
    setTab("Details");
  };

  const handleCurrentAct = (e) => {
    console.log(e.target.value);
    setCurrentAct(e.target.value);
  };

  const handleCurrentScene = (e) => {
    console.log(e.target.value);
    setCurrentScene(e.target.value);
  };

  const handleCurrentSpeaker = (e) => {
    if (e.target.value !== "" && e.target.value !== "clear") {
      console.log(e.target.value);
      setCurrentSpeaker(e.target.value);
    } else if (e.target.value === "clear") {
      setCurrentSpeaker("");
      console.log("Search is cleared -->" + e.target.value);
    }
  };

  const addToLike = () => {
    props.addToLike(props.current);
  };

  const handleHighlightedWord = (e) => {
    console.log(e.target.value);
    setHighlightedWord(e.target.value);
  };

  useEffect((props) => {
    const getInfo = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=" +
          props.current.id;
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("playInfo", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    getInfo();
  }, []);

  const updateBoxForFave = () => {
    props.updateFaveBox();
    props.updateIsChecked();
  };

  if (tab === "Text") {
    let i = [];
    i.push(JSON.parse(localStorage.getItem("playInfo")));

    return (
      <div className="playDetailsPage">
        <HeaderBar></HeaderBar>

        <div id="playDetailsBox">
          {props.showFavorites && props.isChecked === false ? (
            <div id="detailsFavoriteList">
              <FavoriteBoxDetails
                plays={props.likedPlays}
                removeFromLike={props.removeFromLike}
                updateCurrent={props.updateCurrent}
                updateTab={updateTabThroughClick}
              />
            </div>
          ) : (
            <div id="hiddenFaveBox"> </div>
          )}

          <div id="playTitleBox">
            <div id="checkAndTitle">
              <div id="checkBoxDiv">
                {" "}
                <input
                  type="checkbox"
                  className="checkboxFave"
                  onChange={updateBoxForFave}
                />{" "}
              </div>
              <h1 id="playTitle">{props.current.title}</h1>
            </div>

            <hr></hr>

            <div id="formBox">
              <form id="textFilterBox">
                {/* This handles the act filter and adds current act*/}

                <select name="act" id="act" onChange={handleCurrentAct}>
                  {i[0].acts.map((a) => {
                    return (
                      <option value={a.name} key={a.name}>
                        {" "}
                        {a.name}{" "}
                      </option>
                    );
                  })}
                </select>

                {/* This handles the scene filter corresponding to the act*/}
                <select name="scene" id="scene" onChange={handleCurrentScene}>
                  {i[0].acts.map((act) => {
                    if (act.name === currentAct) {
                      return act.scenes.map((s) => {
                        return (
                          <option value={s.name} key={s.name}>
                            {" "}
                            {s.name}{" "}
                          </option>
                        );
                      });
                    }
                  })}
                </select>
              </form>

              <form className="playerSearch">
                {/* This handles the word filter corresponding to the speaker*/}
                <select
                  name="speaker"
                  id="speaker"
                  onChange={handleCurrentSpeaker}
                >
                  <option value=""> Choose Player Here </option>
                  {i[0].persona.map((p) => {
                    return (
                      <option value={p.player} key={p.player}>
                        {" "}
                        {p.player}{" "}
                      </option>
                    );
                  })}
                  <option value="clear"> CLEAR SEARCH </option>
                </select>
                <br />
                <input
                  id="highlightedWord"
                  type="text"
                  name="name"
                  onChange={handleHighlightedWord}
                />
              </form>
            </div>
            <div id="textPlayDetailsButtons">
              <Link
                to={{ pathname: "/default", state: { filters: props.filters } }}
              >
                <button type="button" id="closeButton">
                  {" "}
                  Close{" "}
                </button>
              </Link>
              <button onClick={addToLike} id="likeButton">
                {" "}
                ❤{" "}
              </button>
            </div>
          </div>

          <div id="tabsBox">
            <Tabs
              current={props.current}
              tab={tab}
              tabIsText={tabIsText}
              currentAct={currentAct}
              currentScene={currentScene}
              currentSpeaker={currentSpeaker}
              highlightedWord={highlightedWord}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playDetailsPage">
        <HeaderBar></HeaderBar>

        <div id="playDetailsBox">
          {props.showFavorites && props.isChecked === false ? (
            <div id="detailsFavoriteList">
              <FavoriteBoxDetails
                plays={props.likedPlays}
                removeFromLike={props.removeFromLike}
                updateCurrent={props.updateCurrent}
                updateTab={updateTabThroughClick}
              />
            </div>
          ) : (
            <div id="hiddenFaveBox"> </div>
          )}

          <div id="playTitleBox">
            <div id="checkAndTitle">
              <div id="checkBoxDiv">
                {" "}
                <input
                  type="checkbox"
                  className="checkboxFave"
                  onChange={updateBoxForFave}
                />{" "}
              </div>
              <h1 id="playTitle">{props.current.title}</h1>
            </div>
            <hr></hr>
            <div id="playSummaryBox">
              <div id="synopsisBox">{props.current.synopsis}</div>

              <div id="playDetailsButtons">
                <Link
                  to={{
                    pathname: "/default",
                    state: { filters: props.filters },
                  }}
                >
                  <button type="button" id="closeButton">
                    {" "}
                    Close{" "}
                  </button>
                </Link>
                <button onClick={addToLike} id="likeButton">
                  {" "}
                  ❤{" "}
                </button>
              </div>
            </div>
          </div>

          <div id="tabsBox">
            <Tabs
              current={props.current}
              tab={tab}
              tabIsText={tabIsText}
              currentAct={currentAct}
              currentScene={currentScene}
              currentSpeaker={currentSpeaker}
              highlightedWord={highlightedWord}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PlayDetailPage;
