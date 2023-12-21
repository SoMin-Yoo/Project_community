import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction"
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      id: id,
      pw: pw,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };


  return (
    <div className="loginPage" onSubmit={handleSubmit}>
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
          <Link className="joinPage" to="/Join">
            회원가입
          </Link>
        </button>
      </div>
    </div>
  );
}