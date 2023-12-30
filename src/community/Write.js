import React, { useEffect, useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import db from '../db';
import { onAuthStateChanged } from "firebase/auth";

const Write = () => {
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();
  const [user, setUser] = useState();
  const auth = getAuth();
  const navigate = useNavigate();
  const submit = async () => {
    await addDoc( collection( db, 'users'),{
      subject,
      content,
      author: user.email,
      created_at: new Date().getTime(),
    })
    alert( '등록 되었습니다.');
    setSubject( '' );
    setContent( '' );
    navigate('../Netflix');
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  },[])

  return (
    <div className="write">
      <h1>글쓰기</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        <div>
          <input
            type="text"
            id="movie_title"
            placeholder="영화 제목"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="movie_content"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button onClick={submit}>등록</button>
        </div>
      </form>
    </div>
  );  
};

export default Write;