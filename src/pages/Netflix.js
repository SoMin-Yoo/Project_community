import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../db";
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore'
import { DateTime } from "luxon";

export default function Netflix() {
  const [ list, setList ] = useState([]);
  useEffect(()=>{
    onSnapshot( query( collection(db, 'users'), orderBy('created_at', 'desc')), results => {
        const newList = [];
        results.forEach( doc => {
          const data = doc.data();
          data.id = doc.id;
          newList.push( data );
        });
        setList( newList );
      })

    // getDocs( query( collection(db, 'users'), orderBy('created_at', 'desc')))
    //   .then( results => {
    //     const newList = [];
    //     results.forEach( doc => {
    //       const data = doc.data();
    //       data.id = doc.id;
    //       newList.push( data );
    //     });
    //     setList( newList );
    //   })
  },[]);

  return (
    <div>
      <div className="netflixLogo">
        넷플릭스
      </div>
      <div>
        <input type="text" className="'search_input" name="search" />
        <input type="submit" value="검색" className="search_submit" />
      </div>

      <ul>
        <li className="listContainer">
            <div className="list">제목</div>
            <div className="list">작성자</div>
            <div className="list">작성일시</div>
        </li>
      
        { list.map( item => (
          <li key={ item.id } className="listContainer">
            <div className="list">
              <Link to={`/users/${item.id}`}>
                {item.subject}
              </Link>
            </div>
            <div className="list">{ item.author }</div>
            <div className="list">{ DateTime.fromMillis( item.created_at ).toFormat('yyyy-LL-dd HH:mm;ss' ) }</div>
          </li>
        ))}
      </ul>

      <div>
        <button className="writeButton">
          <Link className="writePage" to="/Write">
            글쓰기
          </Link>
        </button>
      </div>
    </div>
  );
}  