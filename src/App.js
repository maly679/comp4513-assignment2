import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import PlayDetailPage from "./components/PlayDetailPage";
import { HashRouter, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import loadingGif from './loadingGif/giphy.gif';
function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [like, setLike] = useState([]);
  const [currentPlay, setCurrentPlay] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [showFavorites, setShowFavorites] = useState(true); 

  const updateisLoading = () => { setLoading(false) 
  console.log(isLoading);
  
  }
  useEffect(() => {
    const getData = async () => {
      try {
 
        const url =
          "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("playData", JSON.stringify(data));
        setData(data);
       updateisLoading();
      } catch (err) {
        console.error(err);
      }
    };
   
    if (localStorage.getItem("playData") == null) {
      getData();
    } else {
      setData(JSON.parse(localStorage.getItem("playData")));
    }

    // invoke the async function
  },  [isLoading]);
  const addLikes = (play) => {
    let temp = [...like];
    if (!temp.find((e) => e.title === play.title)) {
      temp.push(play);
      setLike(temp);
    } else {
      console.log("already in list");
    }
  };

  const removeLikes = (play) => {
    const temp = [...like];
    const index = temp.indexOf(play);
    temp.splice(index, 1);
    setLike(temp);
  };

  const updateCurrentPlay = (clickedPlay) => {
    setCurrentPlay(clickedPlay);
    
  };


  const updateIsChecked = () => {
    setIsChecked(!isChecked);
  }

  const updateFaveBox = () => {
    setShowFavorites(!showFavorites);
  }
  
  return (
    <main>
      <HashRouter basename='/'>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage}/>
        <Route path="/default">
          
        { isLoading === true ?  ( 
            console.log(isLoading)
        )
     : 
 

        <DefaultPage
              mainData={data}
              setFilteredData={setFilteredData}
              plays={filteredData}
              likedPlays={like}
              addToLike={addLikes}
              removeFromLike={removeLikes}
              updateCurrent={updateCurrentPlay}
              current={currentPlay}
              isChecked={isChecked}
              updateIsChecked={updateIsChecked}
              showFavorites={showFavorites}
              updateFaveBox={updateFaveBox}

            />
            
        }
        </Route>
      <Route path="/playDetails">

    
        <PlayDetailPage
          plays={data}
          likedPlays={like}
          addToLike={addLikes}
          removeFromLike={removeLikes}
          current={currentPlay}
          updateCurrent={updateCurrentPlay}
          filters={filteredData}

          isChecked={isChecked}
          updateIsChecked={updateIsChecked}

          showFavorites={showFavorites}
          updateFaveBox={updateFaveBox}
        />
  
      </Route>
     </ HashRouter>
    </main>
  );
}
export default App;
