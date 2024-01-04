import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoggined, setIsLoggined] = useState(false);
  const [userName, setUserName] = useState('');
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsLoggined(true);
        setUserName(user.displayName || ''); // Firebase에서 제공하는 displayName을 사용
      } else {
        setIsLoggined(false);
      }
    });
  }, [auth]);

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
          {isLoggined && (
            <span className="header-welcome"> {`${userName} 님 환영합니다.`} </span>
          )}
          {!isLoggined ? (
            <Link className="header-login" to="/Login">
              로그인/회원가입
            </Link>
          ) : (
            <>
              <button onClick={logOut}>로그아웃</button>
            </>
          )}  
        </ul> 
      </div>
    </div>
  );
};
