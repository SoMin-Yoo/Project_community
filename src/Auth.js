import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Auth.css'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { target: { name, value } } = e;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    } else if (name === "name") {
      setName(value)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 길이 체크
    if (password.length < 6) {
      setError("비밀번호는 6자리 이상이어야 합니다.");
      return;
    }

    try {
      // Firebase에 회원가입 요청
      await createUserWithEmailAndPassword(auth, email, password, name);
      navigate("/Login");
    } catch (error) {
      // 에러 메시지 표시
      setError("이미 존재하는 이메일입니다.");
      console.error(error);
    }
  }

  return (
    <>
      <div className="joinPage">
        <h3>회원가입</h3>
        <form onSubmit={onSubmit} className="container">
          <label>이메일</label>
          <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
          <label>비밀번호</label>
          <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
          <label>이름</label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
          <button type="submit" id="joinButton">회원가입</button>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </>
  )
}

export default Auth;
