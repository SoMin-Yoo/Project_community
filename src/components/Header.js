import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoggined, setIsLoggined] = useState(false);
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsLoggined(true);
      }else{
        setIsLoggined(false);
      }
    });
  }, []);
  
  const logOut = () => {
    signOut(auth).then((result) => {
      console.log(result, "log out");
    });
  };

  return (
    <div className="header-container">
      <div className="header-wrap">
        <Link className="header-title" to="/">
          OTT COMMUNITY
        </Link> 
        <ul>
          {!isLoggined ? (
            <Link className="header-login" to="/Login">
              로그인/회원가입
            </Link>
          ) : (
            <button onClick={logOut}>로그아웃</button>
          )}  
        </ul> 
      </div>
    </div>
  );
};