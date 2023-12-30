import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Auth.css'

function Auth () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();


  // const [isSignup, setIsSignup] = useState(true);
  

  // const signup = async () => {
  //   const result = await createUserWithEmailAndPassword(auth, email, password);
  //   console.log(result);
  // }

  // const singin = async () => { 
  //   const result = await signInWithEmailAndPassword(auth, email, password);
  //   console.log(result);
  // }

  const onChange = (e) => {
    const {target: {name, value}} = e;
    if(name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
    else if (name === "name") {
      setName(value)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      try {
        createUserWithEmailAndPassword(auth, email, password, name);
        navigate("/Login");
      } catch (error) {
        console.log(error);
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
    </div>
    </>
  )
}

export default Auth;