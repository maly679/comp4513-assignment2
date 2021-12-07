import React from "react";

const DetailsTab = (props) => {
  return (
    <div className="DetailsTab">
      <h1> Play Info </h1>
      <p> Likely date of composition: {props.current.likelyDate}</p>
      <p> Genre: {props.current.genre}</p>
      <h1> Web Links</h1>
      <p> Wiki Link: {props.current.wiki}</p>
      <p> Gutenberg Link: {props.current.gutenberg}</p>
      <p> Shakespear.org Link: {props.current.shakespeareOrg}</p>
      <h1> Description </h1>
      <p> {props.current.desc} </p>
    </div>
  );
};
export default DetailsTab;
