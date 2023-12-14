import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <div className="loginPage">
      <div className="loginTitle">
        LOGIN
      </div>
      
      {/* 아이디 */}
      <div className="loginContent">
        <div className="inputBox">
          <input 
            className="input"
            placeholder="아이디"
            value={id}
            onChange={(e)=>setId(e.target.value)}
          />
        </div>
      </div>

      {/* 비밀번호 */}
      <div className="loginContent">
        <div className="inputBox">
          <input 
            className="input"
            placeholder="비밀번호"
            value={pw}
            onChange={(e)=>setPw(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <button className="loginButton">
          로그인
        </button>
        <button className="joinButton">
          회원가입
        </button>
      </div>
    </div>
  );
}