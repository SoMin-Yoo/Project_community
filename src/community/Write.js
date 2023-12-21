import React from "react";

const Write = () => {
  return (
    <div className="write">
      <div>
        <input type="text" id="movie_title" placeholder="영화 제목"></input>
      </div>

      <div>
        <textarea id="movie_content" placeholder="내용을 입력하세요."></textarea>
      </div>
    </div>
  );
};

export default Write;