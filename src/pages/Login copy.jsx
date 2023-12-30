import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../actions/userAction"
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
      try {
       signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error);
      }
    }

    const onChange = (e) => {
      const {target: {name, value}} = e;
      if(name === "email") {
        setEmail(value)
      } else if (name === "password") {
        setPassword(value)
      }
    }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const body = {
  //     id: id,
  //     pw: pw,
  //   };

  //   dispatch(loginUser(body)).then((res) => {
  //     if (res.payload.loginSuccess) {
  //       navigate("/");
  //     } else {
  //       alert("Error");
  //     }
  //   });
  // };


  return (
    <>
    <h2>LOGIN</h2>
    <form onSubmit={onSubmit}>
      <input type="email" className="email" placeholder="Email" value={email} onChange={onChange}/>
      <input type="password" className="password" placeholder="Password" value={password} onChange={onChange}/>
      <button className="loginButton">
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
    </>
    // <div className="loginPage" onSubmit={onSubmit}>
    //   <div className="loginTitle">
    //     LOGIN
    //   </div>
      
    //   {/* 아이디 */}
    //   <div className="loginContent">
    //     <div className="inputBox">
    //       <input 
    //         type="email"
    //         className="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={onChange}
    //       />
    //     </div>
    //   </div>

    //   {/* 비밀번호 */}
    //   <div className="loginContent">
    //     <div className="inputBox">
    //       <input 
    //         className="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={onChange}
    //       />
    //     </div>
    //   </div>
      
    //   <div>
    //     <button className="loginButton">
    //       로그인
    //     </button>
    //     <button className="joinButton">
    //       <Link className="joinPage" to="/Auth">
    //         회원가입
    //       </Link>
    //     </button>
    //   </div>
    // </div>
  );
}

export default Login;