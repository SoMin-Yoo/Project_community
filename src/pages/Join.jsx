import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import "./Join.css";


export default function RegisterPage() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "name") setName(value);
    else if (name === "id") setId(value);
    else if (name === "pw") setPw(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pw !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }

    const body = {
      email: email,
      name: name,
      id: id,
      pw: pw,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate("/Login");
      } else {
        alert("회원가입에 실패하셨습니다.");
      }
    });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <div className="joinTitle">
        JOIN
      </div>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label>ID</label>
        <input type="text" name="id" value={id} onChange={handleChange} />
        <label>Password</label>
        <input
          type="password"
          name="pw"
          value={pw}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <br />
        <button>회원가입</button>
      </form>
    </div>
  );
}

