import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import db from "../../../db";

export default function Article() {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  
  useEffect(()=>{
    getDoc(doc(db, 'users',router.query.id))
      .then( doc => {
        const data = doc.data();
        setSubject( data.subject );
        setContent( data.content );
      })
  },[])

  return(
    <div>
      <h1>{subject}</h1>
      <p>{content}</p>
    </div>
  )
}