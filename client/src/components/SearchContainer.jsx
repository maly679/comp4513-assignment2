import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchContainer = (props) => {
  const [title, updateTitle] = useState();

  const handleInputChange = e => {
    updateTitle(e.target.value);
  }

    return (
    <div id="searchContainer">

      <div id="homeTitleInput">
        <input type="text" id="title" placeholder="Search Play Here" onChange={handleInputChange}></input>
      </div>
      <div id="homeButtons">
      <Link to={{pathname:"/default", state: {title: title }}}>
        <div id="matchingButton">
          <button type="button" data-inline="true" >Show matching Plays</button>
        </div>
      </Link>
      <Link to={{pathname:"/default", state: {title: '' }}}>
        <div id="showAllButton">
          <button type="button" data-inline="true"  >Show All Plays</button>
        </div>
      </Link>
      </div>
    </div> 
  );
};

export default SearchContainer;