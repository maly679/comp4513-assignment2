import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import PlayDetailPage from "./components/PlayDetailPage";
import { HashRouter, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import loadingGif from './loadingGif/giphy.gif';
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [like, setLike] = useState([]);
  const [currentPlay, setCurrentPlay] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [showFavorites, setShowFavorites] = useState(true); 

  const updateisLoading = () => { setLoading(false) 
  console.log(isLoading);
  
  }

const logout = () => {
  window.location.assign('http://localhost:8080/logout');
}

  useEffect(() => {

    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:8080/user",
    }).then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });

 
},  []);

// const populateAllPlays = () => {
//   Axios({
//     method: "GET",
//     withCredentials: true,
//     url: "http://localhost:8080/api/list",
//   }).then((res) => {
//     console.log(res.data);
//     localStorage.setItem("playData", JSON.stringify(res.data));
//     setData(res.data);
//     console.log(res.data);
//   });  
// }

useEffect(() => {


  Axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:8080/api/list",
  }).then((res) => {
    console.log(res.data);
    localStorage.setItem("playData", JSON.stringify(res.data));
    setData(res.data);
    console.log(res.data);
  });  

  if (localStorage.getItem("playData") == null) {
    // populateAllPlays();
  } else {
    setData(JSON.parse(localStorage.getItem("playData")));
  }

  // invoke the async function
},  []);

// useEffect(() => {
// const getUserData = async () => {
//   try {
//     const url =  "http://localhost:8080/user";
//     const response = await fetch(url);
//     localStorage.setItem("userData", JSON.stringify(userData));
//   } catch(err) {
//     console.error(err);
//   }
// };
// if (localStorage.getItem("userData") == null) {
//   getUserData();
// } else {
//   setData(JSON.parse(localStorage.getItem("userData")));
// }
// });

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
          
  

        <DefaultPage
              mainData={data}
              userData={userData}
              logout={logout}
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
