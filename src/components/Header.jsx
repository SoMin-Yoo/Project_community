import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <Link className="header-title" to="/">
          OTT COMMUNITY
        </Link> 
        <ul>
          <Link className="header-login" to="/login">
            로그인/회원가입
          </Link>
        </ul> 
      </div>
    </div>
  );
}