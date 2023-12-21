import React from "react";
import { Link } from "react-router-dom";
import "./Netflix.css";

export default function Netflix() {

  return (
    <div>
      <div className="netflixLogo">
        넷플릭스
      </div>
      <div>
        <input type="text" className="'search_input" name="search" />
        <input type="submit" value="검색" className="search_submit" />
      </div>
      <div>
        <button className="writeButton">
          <Link className="writePage" to="/Write">
            글 쓰기
          </Link>
        </button>
      </div>
    </div>
  );
}  