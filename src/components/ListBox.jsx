import React from "react";
import ListBoxItem from "./ListBoxItem";
import styled from "styled-components";

const H1 = styled.h1`
  font-style: italic;
  color: red;
`;

const ListBox = (props) => {
  const sortByTitle = () => {
    props.sortTitle();
  };

  const sortByYear = () => {
    props.sortYear();
  };

  return (
    <div id="listBox">
      <h1 id="listTitle">List / Match</h1>
      <hr />

      <div id="listPlayInfo">
        {props.matchesBoolean === true ? (
          <div>
            <div id="listHeader">
              <h2
                id="titleLabel"
                style={{ cursor: "pointer" }}
                onClick={sortByTitle}
              >
                Title
              </h2>{" "}
              <h2
                id="listLabel"
                style={{ cursor: "pointer" }}
                onClick={sortByYear}
              >
                Year
              </h2>{" "}
              <p></p>
            </div>

            <div id="listPlayBox">
              {props.plays.map((p, index) => (
                <ListBoxItem
                  play={p}
                  addToLike={props.addToLike}
                  updateCurrent={props.updateCurrent}
                  key={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <H1>No Matches Found. Please Try Again! </H1>
        )}
      </div>
    </div>
  );
};

export default ListBox;
