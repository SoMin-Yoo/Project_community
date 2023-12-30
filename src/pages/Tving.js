import React from "react";
import { Link } from "react-router-dom";

export default function Tving() {

  return (
    <div>
      <div className="tvingLogo">
        티빙
      </div>
      <div>
        <input type="text" className="'search_input" name="search" />
        <input type="submit" value="검색" className="search_submit" />
      </div>
      <div>
        <button className="writeButton">
          <Link className="writePage" to="/Write">
            글쓰기
          </Link>
        </button>
      </div>
    </div>
  );
}  