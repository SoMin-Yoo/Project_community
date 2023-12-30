import React from "react";
import { Link } from "react-router-dom";

export default function Disneyplus() {

  return (
    <div>
      <div className="disneyplusLogo">
        디즈니플러스
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