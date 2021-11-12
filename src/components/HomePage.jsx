import React, { useEffect }from "react";
import SearchContainer from "./SearchContainer";

const HomePage = (props) => {

  
  {useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 seconds!')
    }, 5000);
    clearTimeout(timer);
    
  }, [])}

  return (


      <div className="homePage">
        <div id="homeSearch"> <SearchContainer /> 
        </div>
        
          <div id="heroCredit">
            Photo by{" "}
            <a href="https://unsplash.com/@maxmuselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Max Muselmann
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          
        </div>
        
      </div>
  );
};
export default HomePage;
