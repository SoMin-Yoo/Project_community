import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isSignup, setIsSignup] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();

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
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      try {
        signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }


  return (
    <>
    <div className="loginPage">
      <h2>LOGIN</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
        <button className="loginButton" >
            로그인
        </button>
      </form>
      <div>
        <button className="joinButton">
        <Link className="joinPage" to="/Auth">
        회원가입
        </Link>
      </button>
      </div>
    </div>
    </>
  )
}

export default Login;