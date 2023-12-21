import React from "react";

const Board = ({ idx, movieTitle, contents, createdBy }) => {
  return (
    <div>
      <h2>{movieTitle}</h2>
      <h5>{createdBy}</h5>
      <hr />
      <p>{contents}</p>
    </div>
  );
};

export default Board;