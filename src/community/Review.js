import React from "react";

const Board = ({ idx, movieTitle, contents, createdBy }) => {
  return (
    <div>
      <h1>{movieTitle}</h1>
      <h2>{createdBy}</h2>
      <hr />
      <p>{contents}</p>
    </div>
  );
};

export default Board;